import { User } from "./models/user";

function sortStrArray(strArray: string[]) {
  strArray.sort((a, b) => a.localeCompare(b));
}

enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue'
}

if (Color.RED === 'red') {}


type SampleUser = {username: string, points: number, middleName?: string};

let sampleUser: SampleUser;

sampleUser = {
  username: 'lalal',
  points: 78,
}

sampleUser = {
  username: 'lalal',
  points: 78,
  middleName: 'asdfa'
}

let sameUser2: SampleUser


interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
}

let user: IUser;
user =  {
  firstName: '',
  lastName: '',
  userName: ''
}


const user1: User = new User();
user1.firstName;

let x = 23;
if (x === 3) {

}


const removeEmpty = (list = ['hola']) => {
  return list.filter(item => item)
}

removeEmpty([]);

function padLeft(str: string, padding: string | number) {

}

padLeft('asdfas', 4);
padLeft('asdfas', false);

type Contact = {
  phone: string,
  email: string
}

type Address = {
  city: string,
  country: string
}


function logUser(user: Contact & Address) {
  user.city;
}

window.scroll({top: 0, behavior: 'smooth'});



class Stack <T>{
  items: T[];
  constructor () {
    this.items = []
  }

  push(item: T) {
    this.items.push(item);
  }
  pop() {
    return this.items[this.items.length -1];
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(34);
stack.pop();

const stack2 = new Stack<string>();

stack2.push('asdf');
stack2.push('asdfasd');
stack2.pop();
