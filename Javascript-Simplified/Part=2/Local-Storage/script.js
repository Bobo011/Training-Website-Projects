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

  var fighterSelect = $('.fighter');

  

  var mario_world = {
    mario: {
      name: "Mario",
      description: "Small and jumpy. Likes princesses.",
      celebration: "Mario wins and does a little dance",
      height: 10,
      weight: 3,
      speed: 12,
      attack_power: function () {
        return this.weight * this.speed;
      },
    },
    peach: {
      name: "Peach",
      description: "Princess.",
      celebration: "Peach drinks a peach juice",
      height: 7,
      weight: 2,
      speed: 6,
      dash_mode: false,
      toggle_dash: function () {
        this.dash_mode = !this.dash_mode;
      },
      attack_power: function () {
        if (this.dash_mode) {
          return this.weight * (this.speed + 5);
        } else {
          return this.weight * this.speed;
        }
      },
    },
    bowser: {
      name: "Bowser",
      description: "Big and green, Hates princesses.",
      celebration: "Bowser wins and does a big roar",
      height: 16,
      weight: 6,
      speed: 4,
      boost: 0,
      activate_boost: function () {
        this.boost += 5;
      },
      attack_power: function () {
        this.activate_boost();
        return this.weight * (this.speed + this.boost);
      },
    },
    boss_battle: function (contestant_1, contestant_2) {
      var winner = null;
      if (contestant_1.attack_power() > contestant_2.attack_power()) {
        winner = contestant_1;
      } else {
        winner = contestant_2;
      }
      return `${winner.name} wins, ${winner.celebration}`;
    },
  };
  
  console.log(mario_world.boss_battle(mario_world.peach, mario_world.bowser));
  console.log(mario_world.boss_battle(mario_world.peach, mario_world.mario));
});

