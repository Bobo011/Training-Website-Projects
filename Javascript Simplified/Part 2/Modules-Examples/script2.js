const me={
    age:32,
    name:'George'
}
const sally={
    age:33,
    name:'Sally'
}
const rich={
    age:52,
    name:'Rich'
}

function printObj(user){
    console.log(`Name: ${user.name}. Age:${user.age}`);
}



export default me
export {rich, printObj}