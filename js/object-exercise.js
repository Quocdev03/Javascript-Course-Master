// 1. Viết 1 function kiểm tra value có phải là 1 object hay không ?
// typeof value === "object"
// {} [] null
// {}
// plain object -> tre else return false
function isObject(value) {
   if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      console.log(value);
      return true;
   }
   return false;
}
// console.log(isObject({
//    name: "quoc",
// }))
// 2. {a:1, b:2} -> [["a", 1], ["b", 2]]
function objectToArray(object) {
   // Cách 1
   // Check nếu không phải object thì dừng;
   // if (!isObject(object)) return;
   // // Nếu là object;
   // return Object.entries(object);
   // Cách 2
   // [a,b]
   // object[key]
   // key = a,b
   // const value = Object.keys(object).map((key) => [key, object[key]]);
   // return value;
   // Cách 3
   let result = [];
   for (let key in object) {
      // hasOwnProperty(key) -> nếu object chứa key thì trả về true ngược lại trả về false
      if (object.hasOwnProperty(key)) {
         result.push([key, object[key]]);
         console.log(key);
      }
   }
   return result;

}
// console.log(objectToArray({ a: 1, b: 2, c: 3 }));

// without
// 3. Viết phương thức truyền vào
// {{ a: 1, b: 2}}, 'b' => { a:1 }}
function without(object, ...key) {
   const newObject = { ...object };
   key.forEach(item => {
      delete newObject[item];
   })
   return newObject;
   // delete object[key];
   // return object;
}
// console.log(without({ a: 1, b: 2 }, "a"));

// 4. { a: 1, b: 2 }, { a: 1, b: 2 } -> true
// 4. { a: 1, b: 2 }, { a: 1, b: 2, c: 3 } -> false
function isQualObject(obj1, obj2) {
   // create variables
   const objkey1 = Object.keys(obj1);
   const objkey2 = Object.keys(obj2);
   // check keys lenght of two objects
   if (objkey1.lenght !== objkey2.lenght) return null;
   // check valuse of two object
   // [a,b] -> object[a] || object[b]
   // every -> toàn bộ dk đúng thì return đúng và chỉ cần 1 điều kiện sai thì tất cả sẽ sai
   const reslut = objkey2.every((key) => obj1[key] === obj2[key]);
   return reslut;
}
console.log(isQualObject({ a: 1, b: 2 }, { a: 1, b: 2 }));