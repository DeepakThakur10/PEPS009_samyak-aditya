const btn = document.getElementById("btn");
const cnt = document.getElementById("count");
let count1 = 0;
let r = false;

btn.addEventListener("click", function () {
    if (!r) {
      count1++;
      cnt.textContent = count1;
      r = true;

      setTimeout(() => {
        r= false;
      }, 1000);
    }
});