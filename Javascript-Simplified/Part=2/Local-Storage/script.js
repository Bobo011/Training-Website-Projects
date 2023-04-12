// $(document).ready(function(){

//     const inpKey = $('#inpKey')
//     const inpValue = $('#inpValue')
//     const insertButton = $('.button-insert-data')
//     const output = $('.isOutput')

//     $(insertButton).click(function(){
//       const keyValue = inpKey.val()
//       const inValue = inpValue.val()

//       if(keyValue && inValue){
//         const deleteBtn = $('<button>')
//           .text('Delete')
//           .addClass('delete-button')
//           .click((e)=>{
//             const key = $(e.target).parent().data('key');
//             localStorage.removeItem(key);
//             $(e.target).closest('div').remove();
//           });
//         const div = $('<div>').text(`${keyValue}:${inValue}`).append(deleteBtn).data('key', keyValue);
//         output.append(div);
//         localStorage.setItem(keyValue, inValue);
//       }
//     });

//     // Load data from localStorage on page load
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const value = localStorage.getItem(key);
//       const deleteBtn = $('<button>')
//         .text('Delete')
//         .addClass('delete-button')
//         .click((e)=>{
//           localStorage.removeItem(key);
//           $(e.target).closest('div').remove();
//         });
//       const div = $('<div>').text(`${key}:${value}`).append(deleteBtn).data('key', key);
//       output.append(div);
//     }
//   });
$(document).ready(function () {

    $('span').addClass('email')
    
    




});