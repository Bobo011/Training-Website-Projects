const person = {
    name: 'George',
    address:{
street:'Leonidze str'
    }
}

// if(person!= null && person.address !=null){
//     console.log(person.address.street);
// }

console.log(person && person.address && person.address.street||'Default')