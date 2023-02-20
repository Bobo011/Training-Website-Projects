const testimonials = [
    {
        name: '-Jillian G.',
        photoUrl : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        text: "Apple should be nominated for service of the year."
    },
    {
        name: '-Irena E.',
        photoUrl : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        text: "I will refer everyone I know. If you aren't sure, always go for Apple. Thank you for making it painless, pleasant and most of all hassle free!"
    },
    {
        name: '-Deerdre W.',
        photoUrl : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "It's incredible. I can't say enough about Apple. Thank you for making it painless, pleasant and most of all hassle free! Apple was the best investment I ever made."
    }
    
];
const imgEl = document.querySelector('img')
const textEl = document.querySelector('.text')
const userNameEl = document.querySelector('.username')

let idx = 0;
updateTestimonial()

function updateTestimonial(){
const {name, photoUrl, text} = testimonials [idx];
imgEl.src = photoUrl;
textEl.innerText = text;
userNameEl.innerText =name;
idx++;
//ამით ბოლოში რომ გავა თავიდან გაიმეორებს
if(idx === testimonials.length){
    idx = 0;
}
setTimeout(()=>{
    updateTestimonial()
},2000) 
}