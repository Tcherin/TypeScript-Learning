// question 1

type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software engineer",
  },
  {
    name: "Kate Müller",
    age: 28,
  },
];

// question 2

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

// question 3

type dayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// question 4

let user = getUser();
console.log(user?.address?.street);

let x = foo ?? bar();

// question 5

// The function has been set to an unknown type, but has been implemented before the type has been narrowed down.
