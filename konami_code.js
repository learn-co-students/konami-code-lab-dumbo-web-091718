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

  let index = 0;
  document.body.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Congrats, you did it. Now you must die.");

        index = 0;
      }
    } else {
      index = 0
    }
  })




//   function checkKeys(){
//   for(let i = 0; i < codes.length; i++){
//   if(event.key = codes[i]){
//     console.log(event.value)
//     i++}
//
//
//   else
//    console.log("wrong code")
//    i = 0
// }
//  }
//
//
// function init(){
//   // your code here
// document.addEventListener('keydown', checkKeys)};
// init()
//
//
//
// //  function checkKeys(){
// //  for(let i = 0; i < codes.length; i++){
// //   if(event.key = codes[i]){
// //     i++}
// //
// //
// //   else()
// //    console.log("wrong code")
// //    i = 0
// // }
// //  }
