<template>
  <!-- navbar -->
  <nav-bar></nav-bar>

  <div class="container w-11/12 sm:w-9/12 md:w-7/12 xl:w-8/12 mt-20">
    <h1 class="font-bold text-gray-700 text-4xl">HISAB-IN</h1>
    <p class="text-gray-500 mb-6">
      <span class="text-lg font-semibold italic"
        >Hitung Waktu Sholatmu! (Eksperimental)
      </span>
      - By A. Y. Firdaus -
      <a
        class="text-blue-300 italic "
        target="_blank"
        href="https://github.com/tikosewads/"
        >Ikut Kontribusi</a
      >
    </p>

    <p class="text-gray-500 text-base mb-6">
      Hisab-In, sebuah aplikasi untuk menghitung waktu sholat berdasarkan data
      awal. Diperuntungkan untuk media pembelajaran Ilmu Falak. Terinspirasi
      dari mata pelajaran Ilmu Falak di MA Persis Padalarang yang diampu
      langsung oleh Ust. Hasan Nasir.
    </p>

    <div class="grid grid-cols-1 xl:grid-cols-2 w-full h-50 ">
      <div
        class="px-6 pt-5 pb-7 bg-white dark:bg-gray-300 filter shadow-md mb-14 rounded-xl mr-1"
      >
        <h4 class="font-semibold text-base mb-3">
          Lintang Tempat (φ) :
        </h4>
        <div class="flex flex-wrap justify-center text-center">
          <input type="number" v-model="lintangTempat[0]" />
          <input type="number" v-model="lintangTempat[1]" />
          <input type="number" v-model="lintangTempat[2]" />
        </div>
        <h4 class="font-semibold text-base mt-5 mb-3">
          Deklinasi Matahari (δ) :
        </h4>
        <div class="text-center">
          <input type="number" v-model="deklinasiMatahari[0]" />
          <input type="number" v-model="deklinasiMatahari[1]" />
          <input type="number" v-model="deklinasiMatahari[2]" />
        </div>
        <h4 class="font-semibold text-base mt-5 mb-3">
          Equation of Time :
        </h4>
        <div class="text-center">
          <input type="number" v-model="eot[0]" />
          <input type="number" v-model="eot[1]" />
          <input type="number" v-model="eot[2]" />
        </div>
        <h4 class="font-semibold text-base mt-5 mb-3">
          Bujur Tempat :
        </h4>
        <div class="text-center">
          <input type="number" v-model="bujurTempat[0]" />
          <input type="number" v-model="bujurTempat[1]" />
          <input type="number" v-model="bujurTempat[2]" />
        </div>
        <h4 class="font-semibold text-base mt-5 mb-3">
          Bujur Daerah :
        </h4>
        <div class="text-center">
          <input type="number" v-model="bujurDaerah[0]" />
          <input type="number" v-model="bujurDaerah[1]" />
          <input type="number" v-model="bujurDaerah[2]" />
        </div>
        <h4 class="font-semibold text-base mt-5 mb-3">
          Ikhtiyat :
        </h4>
        <div class="text-center">
          <input type="number" v-model="ikhtiyat[0]" />
          <input type="number" v-model="ikhtiyat[1]" />
          <input type="number" v-model="ikhtiyat[2]" />
        </div>
        <button
          @click="fill"
          class="bg-gradient-to-r from-manis to-red-400 text-white mt-6 w-40 h-10 rounded-xl shadow-md hover:shadow-none hover:text-gray-100 font-bold"
        >
          Isi Data Contoh
        </button>
      </div>

      <div
        class="flex flex-col justify-center bg-gradient-to-r from-manis to-red-400 rounded-xl ml-1 mb-14 py-5 shadow-md"
      >
        <div v-if="!dataCompleted" class="text-center px-4 py-6">
          <h1 class="font-bold text-2xl text-white">
            Disini Masih Kosong!
          </h1>
          <p class="text-white">
            Setelah memasukan data sepenuhnya, rincian waktu sholat akan muncul
            disini.
          </p>
        </div>

        <jadwal-list
          :dataCompleted="dataCompleted"
          :waktuSholat="maghrib"
          title="Waktu Sholat Maghrib"
        ></jadwal-list>
        <jadwal-list
          :dataCompleted="dataCompleted"
          :waktuSholat="isya"
          title="Waktu Sholat Isya"
        ></jadwal-list>
        <jadwal-list
          :dataCompleted="dataCompleted"
          :waktuSholat="shubuh"
          title="Waktu Sholat Shubuh"
        ></jadwal-list>

        <!-- <h4 class="font-semibold text-base mt-6 mb-4">
          <span class="text-lg font-bold">Rincian Waktu Isya :</span>
        </h4>
        <ul>
          <li
            class="list-disc list-inside"
            v-for="(value, key) in isya"
            :key="key"
          >
            <span class="font-semibold">{{ key }}</span>
            : {{ value }}
          </li>
        </ul>
        <h4 class="font-semibold text-gray-900 text-base mt-6 mb-4">
          <span class="text-lg font-bold">Rincian Waktu Shubuh :</span>
        </h4>
        <ul>
          <li
            class="list-disc list-inside"
            v-for="(value, key) in shubuh"
            :key="key"
          >
            <span class="font-semibold">{{ key }}</span>
            : {{ value }}
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import { WaktuSholat } from "../util/prayUtil";
const degToDec = WaktuSholat.degToDec;
export default {
  data() {
    return {
      // Derajat
      lintangTempat: [],
      deklinasiMatahari: [],
      eot: [],
      bujurTempat: [],
      bujurDaerah: [],
      ikhtiyat: [],
      dataCompleted: false,

      // Hasil
      maghrib: {},
      isya: {},
      shubuh: {},
    };
  },

  updated() {
    this.calculate();
  },

  methods: {
    fill() {
      (this.lintangTempat = [-6, 58, 0]),
        (this.deklinasiMatahari = [11, 16, 34]),
        (this.eot = [0, 0, 54]),
        (this.bujurTempat = [107, 34, 0]),
        (this.bujurDaerah = [105, 0, 0]),
        (this.ikhtiyat = [0, 2, 0]);
    },

    calculate() {
      let lt = degToDec(...this.lintangTempat.map((x) => parseFloat(x)));
      let dm = degToDec(...this.deklinasiMatahari.map((x) => parseFloat(x)));
      let et = degToDec(...this.eot.map((x) => parseFloat(x)));
      let bt = degToDec(...this.bujurTempat.map((x) => parseFloat(x)));
      let bd = degToDec(...this.bujurDaerah.map((x) => parseFloat(x)));
      let ik = degToDec(...this.ikhtiyat.map((x) => parseFloat(x)));

      if (lt && dm && et && bt && bd && ik) {
        const maghrib = new WaktuSholat(lt, dm, -1, et, bt, bd, ik);
        const isya = new WaktuSholat(lt, dm, -18, et, bt, bd, ik);
        const shubuh = new WaktuSholat(lt, dm, -20, et, bt, bd, ik);

        this.dataCompleted = true;
        this.maghrib.sudutWaktu = maghrib.sudutWaktu();
        this.maghrib.meridianPass = maghrib.meridianPass();
        this.maghrib.penjumlahanSudut = maghrib.penjumlahanSudut();
        this.maghrib.selisihSudut = maghrib.selisihSudut();
        this.maghrib.waktuSholat = maghrib.waktuSholat();

        this.isya.sudutWaktu = isya.sudutWaktu();
        this.isya.meridianPass = isya.meridianPass();
        this.isya.penjumlahanSudut = isya.penjumlahanSudut();
        this.isya.selisihSudut = isya.selisihSudut();
        this.isya.waktuSholat = isya.waktuSholat();

        this.shubuh.sudutWaktu = shubuh.sudutWaktu();
        this.shubuh.meridianPass = shubuh.meridianPass();
        this.shubuh.penjumlahanSudut = shubuh.penjumlahanSudut();
        this.shubuh.selisihSudut = shubuh.selisihSudut();
        this.shubuh.waktuSholat = shubuh.waktuSholat();
      }
    },
  },
};
</script>

<style lang="postcss">
input[type="number"] {
  @apply w-20 sm:w-24 md:w-28 mx-0.5 rounded-sm border-2 border-gray-300;
}
input[type="number"]:hover {
  @apply shadow-sm border-gray-500;
}
input[type="number"]:active {
  @apply ring-2 shadow-inner;
}

h4 {
  @apply text-gray-500;
}
</style>
