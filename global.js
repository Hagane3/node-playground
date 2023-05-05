// Global object

// console.log(global);

setTimeout(() => {
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("interval");
}, 1000);
