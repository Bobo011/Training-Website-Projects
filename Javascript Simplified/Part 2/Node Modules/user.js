const george = {
    name: 'George',
    lastName:'Smith'
}
const sam = {
    name: 'Sam',
    lastName:'Smith'
}
const kain = {
    name: 'Kain',
    lastName:'Smith'
}

function printNames(user){
    console.log(`User name is ${user.name} ${user.lastName}`);
}

module.exports = {
    george,
    sam,
    kain,
    printNames
}