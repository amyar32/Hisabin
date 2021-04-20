// Utility ini dibuat oleh Amin Yarits Firdaus
// Suatu kelas untuk membantu dalam otomatisasi perhitungan waktu sholat

export class WaktuSholat {
  constructor(
    lintangTempat,
    deklinasiMatahari,
    tinggiMatahari,
    eot,
    bujurTempat,
    bujurDaerah,
    ikhtiyat
  ) {
    this.lintangTempat = lintangTempat;
    this.deklinasiMatahari = deklinasiMatahari;
    this.tinggiMatahari = tinggiMatahari;
    this.eot = eot;
    this.bujurTempat = bujurTempat;
    this.bujurDaerah = bujurDaerah;
    this.ikhtiyat = ikhtiyat;
  }

  // =====================
  // Method Dasar Pembantu
  // =====================

  static degToDec = function(d, m, s) {
    if (Object.is(d, -0)) {
      m = Math.abs(m) * -1;
      s = Math.abs(s) * -1;
    }
    return d + m / 60 + s / 3600;
  };

  degToDec(d, m, s) {
    if (Object.is(d, -0)) {
      m = Math.abs(m) * -1;
      s = Math.abs(s) * -1;
    }
    return d + m / 60 + s / 3600;
  }

  decToDeg(decimal) {
    let sisaMinute = (decimal - Math.floor(decimal)) * 60;
    let sisaSecond = (sisaMinute - Math.floor(sisaMinute)) * 60;
    let hour = Math.floor(decimal);
    let minute = Math.floor(sisaMinute);
    let second = Math.floor(sisaSecond);

    if (second >= 30) {
      return `${hour} : ${minute + 2}`;
      // } else if (minute == 59) {
      //   return `${hour + 1} : 00`;
    } else {
      return `${hour} : ${minute + 1}`;
    }
    // return `${hour} : ${minute} : ${second}`;
  }

  getTanDeg(deg) {
    return Math.tan((deg * Math.PI) / 180);
  }

  getCosDeg(deg) {
    return Math.cos((deg * Math.PI) / 180);
  }

  getAcosDeg(deg) {
    return (Math.acos(deg) * 180) / Math.PI;
  }

  getSinDeg(deg) {
    return Math.sin((deg * Math.PI) / 180);
  }

  // ========================
  // Pengitungan Waktu Sholat
  // ========================

  // 1. Mencari Sudut Waktu
  // ======================
  sudutWaktu() {
    return (
      this.getAcosDeg(
        this.getTanDeg(-1 * this.lintangTempat) *
          this.getTanDeg(this.deklinasiMatahari) +
          this.getSinDeg(this.tinggiMatahari) /
            this.getCosDeg(this.lintangTempat) /
            this.getCosDeg(this.deklinasiMatahari)
      ) / 15
    );
  }

  // 2. Mencari Harga Meridian Pass
  // ==============================
  meridianPass() {
    return 12 - this.eot;
  }

  // 3. Penjumlahan Sudut Waktu dengan Meridian Pass
  // ===============================================
  penjumlahanSudut() {
    if (this.tinggiMatahari === -20) {
      return this.meridianPass() - this.sudutWaktu();
    }
    return this.sudutWaktu() + this.meridianPass();
  }

  // 4. Mencari Selisih Bujur
  // ========================
  selisihSudut() {
    return (this.bujurTempat - this.bujurDaerah) / 15;
  }

  // 5. Interpolasi dan Penambahan Ikhtiyat
  // ======================================
  waktuSholat() {
    return this.decToDeg(
      this.penjumlahanSudut() - this.selisihSudut() + this.ikhtiyat
    );
  }
}
