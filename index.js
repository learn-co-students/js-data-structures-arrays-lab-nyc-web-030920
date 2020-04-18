const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => {
    drivers.push(name)
};

const destructivelyPrependDriver = (name) => {
    drivers.unshift(name)
};

const destructivelyRemoveLastDriver = () => {
    drivers.pop(-1)
};

const destructivelyRemoveFirstDriver = () => {
    drivers.shift(0)
};

const appendDriver = (name) => {
    const newArray = [...drivers, name]
    return newArray
};

const prependDriver = (name) => {
    const newArray = [name, ...drivers]
    return newArray
};

const removeLastDriver = () => {
    const newArray = drivers.slice(0, 2)
    return newArray
};

const removeFirstDriver = () => {
    const newArray =  drivers.slice(1, 3)
    return newArray
};