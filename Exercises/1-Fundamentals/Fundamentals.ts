let a = 100; // number
// question 1

let b = "Coffee"; // string
let c = [true, false, false]; // boolean[]
let d = { age: number }; // object
let e = [3]; // number[]
let f; // any
let g = []; // any[]

// question 2

let song: {
  title: string;
  releaseYear: number;
} = { title: "My song" };

// the object has been defined as having both a title and a
// releaseYear, but it has only been instantiated with a title.

let prices = [100, 200, 300];
prices[0] = "$100";

// prices cannot be reassigned from a number[] to a string

function myFunc(a: number, b: number): number {}

// the function has been shown to pass in two numbers, but is not returning anything in the function body.
