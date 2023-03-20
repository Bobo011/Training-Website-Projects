const me={
    age:32,
    name:'George'
}
export const sally={
    age:33,
    name:'Sally'
}
export const rich={
    age:52,
    name:'Rich'
}

export function printObj(user){
    console.log(`Name: ${user.name} Age:${user.age}`);
}



export default me


// module.exports = {
//     me: me,
//     rich: rich,
//     printObj: printObj
//   };