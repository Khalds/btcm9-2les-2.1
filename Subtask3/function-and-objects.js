//! 3.1

const myObj = {
  name: 'Khalid',
  lastname: 'Abaev',
  age: 20
}

function getName(obj) {
  return obj.name
}
console.log(getName(myObj));

//! 3.2

const person = {
  firstname: 'Akhmad',
  lastname: 'Kuduzow',
  age: 31
}

function getNames(pers) {
  const nameArr = [];
  nameArr.push(pers.firstname, pers.lastname)
  return nameArr
}
console.log(getNames(person));

//! 3.3

const person2 = {
  firstname: 'Alvi',
  age: 27
};

function concatName(obj, last) {
  const nameArr = [];
  obj.lastname = last;
  nameArr.push(obj.firstname, obj.lastname);
  return nameArr.join(' ')
}

console.log(concatName(person2, 'Tsugaev'));

//! 3.4

const firstPerson = {
  firstname: 'Alvi',
  lastname: 'Tsugaev',
  fathername: undefined
};

const secondPerson = {
  firstname: 'Akhmad',
  lastname: 'Kuduzow',
  fathername: 'Yakubovich'
};

function correctName(pers) {
  if (pers.fathername == undefined || pers.fathername == '') {
    return pers.firstname;
  }
  return `${pers.firstname} ${pers.lastname} ${pers.fathername}`;
}

console.log(correctName(firstPerson));
console.log(correctName(secondPerson));