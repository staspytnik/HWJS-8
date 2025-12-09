//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ["Big", "Small", "Medium", "Tiny", "Large"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ",";
  }
}
console.log(string);

let string2 = friends.join(", ");

console.log(string2);

//2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = "Карточка-3";

const indexCardForRemove = cards.indexOf(cardToRemove);

console.log(indexCardForRemove);

if (indexCardForRemove !== -1) {
  cards.splice(indexCardForRemove, 1);
}

console.log(cards);

const cartToInsert = "КАрточка-6";

cards.push(cartToInsert);

console.log(cartToInsert);

const cardToUpdate = "Карточка-4";
const indexCardForUpdate = cards.indexOf(cardToUpdate);

if (indexCardForRemove !== -1) {
  cards.splice(indexCardForUpdate, 1, "Карточка-4");
}

console.log(cards);
