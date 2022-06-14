const {
  promiseTheaterIXX,
  promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  let total_IXX = 0;
  let total_VGC = 0;
  return new Promise((resolve, reject) => {

    if (emosi == "marah") {
      (async () => {
        total_IXX = hitung(await promiseTheaterIXX(), emosi);
        total_VGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(total_IXX + total_VGC);
      })();
    } else if (emosi == "tidak marah") {
      (async () => {
        total_IXX = hitung(await promiseTheaterIXX(), emosi);
        total_VGC = hitung(await promiseTheaterVGC(), emosi);
        resolve(total_IXX + total_VGC);
      })()
    } else {
      reject("emosi tidak ditemukan")
    }


  })
}

const hitung = (data, emosi) => {
  let counter = 0;
  if (emosi === "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil === "marah") {
        counter++;
      }
    }
  }
  if (emosi === "tidak marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil === "tidak marah") {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  promiseOutput,
};