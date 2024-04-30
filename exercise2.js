// დავალება 1
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// დავალება 2

let array;

for (let i = 0; i < array.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(array[i]);
}

// დავალება 3

for (let i = 0; i < array.length; i++) {
  if (i >= 5) {
    continue;
  }
  console.log(array[i]);
}

// დავალება 4
let num = 23;
if (num > 0) {
  console.log("რიცხვი დადებითია");
} else if (num === 0) {
  console.log("რიცხვი ნულის ტოლია");
} else {
  console.log("რიცხვი უარყოფითია");
}

// დავალება 5

let books = [
  {
    title: "Harry potter",
    author: "J.K Rowling",
  },
  {
    title: "Maze runner",
    author: "James Dashner",
  },
];

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

// დავალება 6

const str = "Javascript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.substring(0, 4));
