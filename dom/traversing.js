// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// selector.parentNode hoặc selector.parentElement.removeChild(delete selector);
// span.parentNode.removeChild(span);
// 2. nextElementSibling: tìm tới phần tử kế tiếp vs previousElementSiBling(span) -> tìm tới phần tử đứng sau nó
// a b c
const nextSpan = span.nextElementSibling.nextElementSibling.parentElement;
console.log(nextSpan);
const previousLinks = span.previousLink;
console.log(previousLinks);
// 3. childNodes: trả về 1 mảng các node bên trong bao gồm textNode vs children
console.log(span.childNodes); // text <strong> text
console.log(span.children); // 
// 4. firstChild vs firstElementChild
console.log(span.firstChild); // text
console.log(span.firstElementChild); // <strong>
// 5 . lastChild vs lastElementChild
console.log(span.lastChild); // text
console.log(span.lastElementChild); // <strong>
// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);