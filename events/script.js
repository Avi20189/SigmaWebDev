// document.querySelector(".box").addEventListener("click", () => {
//     alert("Sec was clicked")
// })

// document.querySelector(".box").addEventListener("click", () => {
//     alert("box was clicked")
// })

// document.querySelector(".container").addEventListener("click", () => {
//     alert("container was clicked")
// })
// function getRandomColor() {
//     let val1 = Math.ceil(0 + Math.random() * 255);
//     let val2 = Math.ceil(0 + Math.random() * 255);
//     let val3 = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${val1}, ${val2}, ${val3})`

// }

// setInterval(() =>{
//     document.querySelector(".sec").style.background = getRandomColor()
// }, 1000)


const callback = (arg) =>{
    console.log(arg);
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Avi");
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)














