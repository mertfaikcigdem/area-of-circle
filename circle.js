const pi = 3.14;
const radius = Number(process.argv[2]);

if (radius) {
  const result = pi * (radius * radius);
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${result}`);
} else {
  console.log('Lütfen yarıçap değerini giriniz!');
}