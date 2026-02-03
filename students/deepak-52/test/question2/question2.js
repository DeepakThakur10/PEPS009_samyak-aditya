const textarea = document.getElementById("text");
const charCount = document.getElementById("count");
const maxLimit = 100;

textarea.addEventListener("input", function () {
    const length = textarea.value.length;
    charCount.textContent = `${length} / ${maxLimit}`;

    if (length > maxLimit) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black"
    }
});