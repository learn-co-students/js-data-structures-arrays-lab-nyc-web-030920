// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name); 
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  let new_drivers = [...drivers, name];
  return new_drivers;
}

function prependDriver(name) {
  let new_drivers = [name, ...drivers];
  return new_drivers;
}

function removeLastDriver() {
  let new_drivers = drivers.slice(0, 2);
  return new_drivers;
}

function removeFirstDriver() {
  let new_drivers = drivers.slice(1); 
  return new_drivers;
}