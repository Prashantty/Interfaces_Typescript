// Using Node.js http module:

import { promises } from "dns";
import { markAsUntransferable } from "worker_threads";

// import * as http from 'http';
// import * as fs from 'fs';

// const server = http.createServer((req, res) => {
//   const filePath = 'path/to/your/file.html';
//   const fileStream = fs.createReadStream(filePath);

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   fileStream.pipe(res);
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });

// import * as express from 'express';

// const app = express();

// // Serve static files from a directory (optional)
// app.use(express.static('public'));

// // Define routes for dynamic content
// app.get('/', (req, res) => {
//   res.send('Hello from TypeScript on localhost!');
// });

// // Other routes and logic...

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// });

/*Interface in typescript */

interface U {
  name : string;
  id : number;
}

const user : U = {
  name : "Prashant",
  id : 234242
};

class UserAccount {
  name : string;
  id  :number;

  constructor(name :string , id :number) {
    this.name = name;
    this.id = id;
  }
}

const p: U = new UserAccount("Murphy", 1);
console.log(p);


interface user {
  name: string;
  email: string;
  address: {
    street: string;
    pin: string;
    state?: string;
  };
}

var user1: user = {
  name: "ad",
  email: "@gmail.com",
  address: { street: "4th", pin: "3432" },
};

console.log("this is the test interface");

function getvalue(person: user) {
  // person.name = "asdfas";
  console.log(person.name);
  console.log(person.email);
  console.log(person.address.pin);
  console.log(person.address);
}

interface adduser extends user {
  password: string;
}

var user2: adduser;

function printuser() {
  getvalue(user1);
  //getvalue(user1);
  //getvalue(user2);
  //getvalue(user2);
}

printuser();

/* Utility types in typescript */

interface Todo {
    title: string;
    //description: {type : string , required : true};
    description : string;
    completed: boolean;
    createdAt: number;
  }
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 
console.log(todoInfo);
 
