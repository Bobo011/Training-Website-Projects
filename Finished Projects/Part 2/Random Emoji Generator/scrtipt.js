const buttonEl = document.querySelector('#btn');
const emojiNameEl = document.querySelector('#emoji-name');

const titleEl= document.querySelector('.title')

const emoji =[];
const apiKey ='1103746945c031311db8cbea5878f5f5c492a1f9';


async function  getEmoji(){
    try {
        let response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
let data = await response.json()
 //this api has a database of over 2600 arrays, but we need only the first 1500
for (let i = 0; i < 1500; i++) {
    //this pushes objects of character and UnicodeName from the api into the empty emoji array
    emoji.push({
        emojiName:data[i].character,
        emojiCode:data[i].unicodeName
    })
    
}
    } catch (error) {
        
        console.log(error);
    }

}
getEmoji()

buttonEl.addEventListener('click',()=>{
    const randomNumber = Math.floor(Math.random()*emoji.length)
    buttonEl.innerText =emoji[randomNumber].emojiName;
    emojiNameEl.innerText = emoji[randomNumber].emojiCode;
})

