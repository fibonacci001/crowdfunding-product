let burger = document.querySelector('.buger');
let closer = document.querySelector('.closer');
let overlay = document.querySelector('.overlay');
let nav = document.querySelector('.ul1');
let modelpriceholder = document.querySelectorAll('.modelpricebamboo');
let modelsp = document.querySelector('.modelsp');
let modelsbam = document.querySelector('.modelsbam');
let modelsblac = document.querySelector('.modelsblac');
let modelsmaho = document.querySelector('.modelsmaho');
let checkbox2 = document.querySelector('#checkbox2');
let checkbox1 = document.querySelector('#checkbox1');
let checkbox3 = document.querySelector('#checkbox3');
let checkbox4 = document.querySelector('#checkbox4');
let model = document.querySelector('.model');
let reward = document.querySelectorAll('.reward');
let model_cancel = document.querySelector('.model_cancel');
let thanks = document.querySelector('.thanks');
let modelpriceer = document.querySelectorAll('.modelbamprice');
let got = document.querySelector('.got');

const totalBacked = document.querySelector('.total-backed');
const totalBackers = document.querySelector('.total-backers');
const daysLeft = document.querySelector('.days-left');
const goalValue = document.querySelector('.goal-value');
let totalBackers_content = Number(totalBackers.innerHTML.replace(/[$,]/g, ''));
console.log(totalBackers_content)
let total_backnum = Number(totalBacked.innerHTML.replace(/[$,]/g, ''));

let modelInput = document.querySelectorAll('.modelbaminput');
let edition = document.querySelectorAll('.edition');
console.log(edition);
let stand = document.querySelectorAll('.stand');
console.log(stand);
let bookmark = document.querySelector('.bookmark');
const bambooInput = document.querySelector('#bambooInput');
bambooInput.value = 25; 

const blackInput = document.querySelector('#blackInput');
blackInput.value = 75;

function updateTotal(input) {

   const min = Number(input.min); 
   let value = Number(input.value);
 
   if(value < min) {
     value = min; 
   }
 
   totalBacked.textContent = total_backnum + value;
 
 }
 
 bambooInput.addEventListener('input', () => {
   updateTotal(bambooInput); 
 });
 
 blackInput.addEventListener('input', () => {
   updateTotal(blackInput);
 });

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('bookmarks')
})

















  





let startBacked = 0;
let endBacked = total_backnum;
let startBackers = 0;
let endBackers = 5007;
let startDays = 0;
let endDays = 56;
let startGoal = 0;
let endGoal = 100000;

const duration = 2000;

function animateValue(div, start, end, duration) {
   
   start = Number(start);
   end = Number(end);
   
   let startTimestamp = null;
   
   const step = (timestamp) => {
      
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);  
      
      div.textContent = Math.floor(progress * (end - start) + start);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  
    
    window.requestAnimationFrame(step);

 }
 animateValue(totalBacked, startBacked, endBacked, duration);
 animateValue(totalBackers, startBackers, endBackers, duration);
 animateValue(daysLeft, startDays, endDays, duration);
 animateValue(goalValue, startGoal, endGoal, duration);
 







let activeDiv = null;
let activeSection = null;
let activeCheckbox = null;

model_cancel.addEventListener('click', () => {
   model.classList.remove('show_model');
   overlay.classList.remove('overshow');
})

modelsp.addEventListener('click', () => {
   
   checkbox1.checked = !checkbox1.checked;

});

modelsbam.addEventListener('click', () => {
  
   toggleElements(modelsbam, modelpriceholder[0], checkbox2);

});
modelsblac.addEventListener('click', () => {
  
   toggleElements(modelsblac, modelpriceholder[1], checkbox3);
})

modelsmaho.addEventListener('click', () => {
   toggleElements(modelsmaho, modelpriceholder[2], checkbox4);
})






function toggleElements(div, section, checkbox) {

   if(activeDiv === div) {
     
     section.classList.add('showpricesection');
   
   } else {
     
     if(activeSection) {
       activeSection.classList.remove('showpricesection');
     }
     if(activeCheckbox) {
       activeCheckbox.checked = false; 
     }
     
     
     section.classList.add('showpricesection');
     
      
     activeDiv = div;
     activeSection = section;
     activeCheckbox = checkbox;
 
     
     checkbox.checked = true;
   }
 
 }

 reward.forEach(event => {
   event.addEventListener('click', () => {
      console.log(event);
model.classList.add('show_model');
overlay.classList.add('overshow');
   })
});



function validateInput(value) {
   const amount = parseFloat(value); 
 
   if (isNaN(amount)) {
     return 0; 
   }
 
   if (amount < 0) {
     return 0; 
   }
 
   const newTotal = total_backnum + amount;
   console.log(newTotal);
 
   if (newTotal > endGoal) { 
     
     window.alert('goal exceeded');

     return 0;

     
   }
 
   return amount;
 }

 function validate(value) {

   if(isNaN(value)) {
     return; 
   }
 
   if(value > endGoal) {
   
     return false; 
   }
 
   return true;
 
 }





 modelInput.forEach(input => {
   input.addEventListener('keydown', e => {
     if (e.key === '-' || e.key === 'e') { 
       e.preventDefault();
     } 
   });
 })



 var main_value;
 

modelpriceer.forEach( (event) => {
   event.addEventListener('click', () => {
      let inputId = null;
      console.log(totalBackers_content);
      let new_result = totalBackers_content + 1;
      console.log(new_result);
      totalBackers_content = new_result;
      console.log(totalBackers_content);
      modelInput.forEach(input => {
         const id = input.id;
      inputId = id;
     
         input.addEventListener('input', e => {
           const main_value = validateInput(e.target.value); 
           e.target.value = main_value; 

         });
         
       });

       modelInput.forEach(input => {

         input.addEventListener('keypress', e => {
          
           const isValid = validate(parseFloat(input.value + e.key));
       
           if(!isValid) {
             e.preventDefault();
           }
       
         });
       
       });
       const editionArr = Array.from(edition).map(el => el);
       const standArr = Array.from(stand).map(content => content);


if (inputId === "blackInput") {
  editionArr.forEach( el => {
    let contentvalue = Number(el.textContent);
    let newValue = contentvalue - 1;
    console.log(newValue);
    console.log(contenvalue);
    el.textContent = newValue.toString();
   });
  
}
else if (inputId === "bambooInput") {
  standArr.forEach((content) => {
      let contentvalue = Number(content.textContent );
      let newValue = contentvalue - 1;
      console.log(newValue);
      console.log(contentvalue);
      content.textContent = newValue.toString();
   })
}



       const newTotal = total_backnum + main_value;
   console.log(newTotal);
       if (newTotal > endGoal) { 
     
         window.alert('goal exceeded');
    
         return totalBacked.textContent = total_backnum;
    
         
       }
       else {
        model.classList.remove('show_model');
      thanks.classList.add('thanks_show'); 
       }
      
   });


});





got.addEventListener('click', () => {
   thanks.classList.remove('thanks_show'); 
   overlay.classList.remove('overshow');
})







console.log(modelpriceholder[0]);
burger.addEventListener('click', () => {
   nav.classList.toggle('ul1s') 
   overlay.classList.toggle('overshow')
   burger.classList.toggle('hidebug')
});
closer.addEventListener('click', () => {
    nav.classList.toggle('ul1s') 
    overlay.classList.toggle('overshow')
    burger.classList.toggle('hidebug')
 })




