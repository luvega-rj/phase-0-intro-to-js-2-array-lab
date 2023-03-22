const cats=["Milo", "Otis", "Garfield"];
const cat =[...cats];
cat;
beforeEach(function () {
  cats.length = 0;
  cats.push('Milo', 'Otis', 'Garfield');
});
function destructivelyAppendCat(name)
{
  cats.push (name);
}
destructivelyAppendCat([('Ralph')])
function destructivelyPrependCat(start)
{
  cats.unshift (start);
}
destructivelyPrependCat([('Bob')])
function destructivelyRemoveLastCat(end)
{
  cats.pop (end);
}
destructivelyRemoveLastCat([('Garfield')])
function destructivelyRemoveFirstCat(remfrst)
{
  cats.shift(remfrst)
}
//function appendCat(name)
//{
 // const cat = [...name];
//}
//appendCat(name)
//function destructivelyRemoveLastCat()
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  let newCats = [name].concat(cats);
  return newCats;
}
// Example usage
let catss= ["Milo", "Otis", "Garfield"];
let newCats = prependCat("Arnold");
console.log(newCats);
console.log(cats);
function removeLastCat() {
  let newCats = cats.slice(0, cats.length - 1);
  return newCats;
}
// Example usage
let catsss= ["Milo", "Otis", "Garfield"];
let newCat = removeLastCat();
console.log(newCats); // Output: ["Milo", "Otis"]
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]
function removeFirstCat() {
  return cats.slice(1);
}
cats
console.log(cats)
console.log(start)
console.log(end)
console.log(remfrst)
console.log(cat)