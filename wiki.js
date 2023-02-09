/*
* @Author: razvbir
* @Date:   2023-02-09 18:39:12
* @Last Modified by:   razvbir
* @Last Modified time: 2023-02-09 18:39:47
*/

let allBoulevards = document.querySelectorAll('.mw-category.mw-category-columns li a');

let myList = [];

for (let boulevard of allBoulevards) {
  myList.push(boulevard.title);
} 

let withDe = myList.filter(e => e.indexOf('de') > -1)

console.log(withDe);