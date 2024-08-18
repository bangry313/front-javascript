const h2Element = document.getElementById("title");
// console.log(h2Element);
console.dir(h2Element);
h2Element.style.color = "red";

// const h2s= document.getElementsByTagName("h2");
// console.log(h2s);
// for (const element of h2s) {
//     // element.style["background-color"] = "yellow";
//     element.style.backgroundColor = "yellow";
// }

const h2s= document.getElementsByClassName("sub_title");
console.log(h2s);
for (const element of h2s) {
    // element.style["background-color"] = "yellow";
    element.style.backgroundColor = "yellow";
    element.remove();
}


