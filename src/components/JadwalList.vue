<template>
  <div v-if="dataCompleted" class="my-5">
    <div class="text-center">
      <h4 class="text-white font-semibold text-2xl mb-4">
        {{ title }}
      </h4>
    </div>
    <div class="mx-10 text-white text-sm">
      <ul>
        <li class="list-disc list-inside">
          <span class="font-semibold">Sudut Waktu :</span>
          {{ waktuSholat.sudutWaktu }}
        </li>
        <li class="list-disc list-inside">
          <span class="font-semibold">Meridian Pass :</span>
          {{ waktuSholat.meridianPass }}
        </li>
        <li class="list-disc list-inside">
          <span class="font-semibold">Penjumlahan Sudut :</span>
          {{ waktuSholat.penjumlahanSudut }}
        </li>
        <li class="list-disc list-inside">
          <span class="font-semibold">Selisih Sudut :</span>
          {{ waktuSholat.selisihSudut }}
        </li>
        <li class="list-disc list-inside">
          <span class="font-semibold">Waktu Sholat :</span>
          {{ waktuSholat.waktuSholat }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["dataCompleted", "waktuSholat", "title"],
};
</script>
