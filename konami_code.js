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

let correctCode = 0;

function init() {
  document.body.addEventListener('keydown', function(event) {
    if (codes[correctCode] === event.key) {
      correctCode++;
    }
    else {
      correctCode = 0;
    }
    if (correctCode === 10) {
      correctCode = 0;
      alert('Congratz, you are correct!');
    }
  })
}

// your code here
