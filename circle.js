const pi = 3.14;
const radius = Number(process.argv[2]);

const result = pi * (radius * radius);

console.log(`Yarıçapı ${radius} olan dairenin alanı: ${result}`);