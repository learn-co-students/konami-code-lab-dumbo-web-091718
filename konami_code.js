const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function init() {
document.body.addEventListener('keydown', inputKey)
let codeFile = []

  function inputKey(e) {
    let key = e.key;
    console.log(key);
    codeFile.push(key);
    let arrayCheck;
    if (codeFile.length === codes.length) {
      for (i = 0; i < codes.length; i++) {
        if (codes[i] !== codeFile[i]) {
          codeFile = [];
          return;
        }
      }
      codeFile = [];
      return alert("congratulatoins!");
    }
  }
}
