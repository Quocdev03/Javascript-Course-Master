// codument.title
// document.head
console.log(document.title); // Javascript
document.title = "Welcome to Javascript course"
// document.head
console.log(document.head);
// <meta http-equiv="X-UA-Compatible" content="IE=edge" />
const meta = document.createElement("meta");
meta.setAttribute("http-equiv", "X-UA-Compatible")
meta.setAttribute("content", "IE=edge")
// document.head.appendChild(meta);
const head = document.getElementsByTagName("head"); // html colection
head[0].appendChild(meta);
console.log(head);
// insertBefore
// parentNode.insertBefore(newnode, existingnode)
const ul = document.querySelector("ul")
// document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
document.querySelector("h3").insertAdjacentElement("beforebegin", ul);
// replaceChild  
const span = document.createElement("span");
span.textContent = "abc"
document.body.replaceChild(span, document.querySelector("boxed"));
// convert HTML Colection, NodeList to Array
const li = document.getElementsByTagName("li");
console.log(li);
li.forEach((item) => item);
// Array.from(HTML collection or NodeList)
// [...HTMLCOLLECTION], [...NodeList]
[...li].filter((item) => item);
console.log(li);
// html body head title
// html: document.documentElement;
// body: document.Body
// head: document.head
// title: document.title