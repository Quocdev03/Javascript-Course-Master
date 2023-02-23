// 1. DOM là gì ?
// Document Object Model
// DOM attribute
// DOM Node
// 2. Selecting Nodes
// 2.1 document.querySelector("selector") -> trả về 1 node nếu tồn tại selector đó, ngược lại nó sẽ trả về null
// selectors: .header, p, body, #heading, . . .
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
// console.log(singleNode4);
// 2.2 document.querySelectorAll("selector") -> trả về 1 NodeList, nếu không có thì trả về empty 
// nó có thể loop và sử dụng forEach
// nó giống array là có thể loop nhưng không sử dụng được các phương thức như push, pop, shift
const mutliNode = document.querySelectorAll(".item");
// for (let i = 0; i < mutliNode.length; i++) {
//    console.log(mutliNode[i]);
// }
// console.log(mutliNode);
// 2.3 document.getElementsByClassName("className") -> trả về 1 HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
const classNode = document.getElementsByClassName("item");
// console.log(classNode)
// 2.4 document.getElementsByTagName("tagName")
const tagNode = document.getElementsByTagName("li");
console.log(tagNode);
// 2.5 document.getElementById("id") -> Trả về node
// const idNode = document.getElementById("spinner");
const idNode = document.querySelector("#spinner");
// Hay dùng nhất document.querySelector(), document.querySelectorAll()
console.log(idNode);