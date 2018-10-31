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
  // your code here
  let index = 0

  document.body.addEventListener("keydown", function(e){
     const key = e.key

     if (key === codes[index]) {
       index ++;

       if (index === codes.length){
         alert("You have 30 lives!")
       }
     } else {
       index = 0
     }
  })

}
