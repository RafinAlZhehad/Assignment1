
//Problem 1

const filterEvenNumbers =(numbers:number[]):number[]=>
    {
    return numbers.filter((num)=>num%2===0);
}

const evenNumbers = filterEvenNumbers([1,2,3,4,5,6]);
console.log(evenNumbers);


//problem 2


const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};


console.log(reverseString("typescript")); 

//problem3


type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {

  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }else {
  return "Unknown";
  }
};


console.log(checkType("Hello"));


console.log(checkType(42));

//problem 4 

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };


const userName = getProperty(user, "name"); 

console.log(userName); // Output: "John Doe"

//problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus=(book: Book)=>{
  return {
    ...book,
    isRead: true,
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));



//problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");

console.log(student.getDetails());


//problem -7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter(item => arr2.includes(item));
};


const result = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(result); 


