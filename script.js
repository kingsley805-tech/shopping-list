//  references
const image = document.querySelector('img');
const head = document.querySelector('#my-heading');
const mainConatainer = document.querySelector('.container');
const form = document.querySelector('#item-form');
const inputI = document.querySelector('#item-input');
const add = document.getElementById('add');
const buttonC = document.querySelector('.btn');
const AddButtonI = document.querySelector('#addbutIcon');
const mainFilterContainerC = document.querySelector('.filter');
const inputFilterI = document.querySelector('#filter');
const ulI = document.querySelector('#item-list');
const uItem = document.getElementById('item-list');
const li = document.querySelectorAll('li');
const clearButtonC = document.querySelector('#clear');
const clearButton= document.getElementsByClassName('btn-clear');
const newLi = document.createElement('li');
const button = document.createElement('button');
const icon = document.createElement('i');
const uldel=document.querySelectorAll("#item-list li")

//styling image
image.style.boxShadow = '0px 5px 5px 2px rgba(0, 0.0, 0, 0.5)';
image.style.borderRadius='50px';
image.style.border='1px solid pink'
//styling heading
head.style.color='green';
head.style.backgroundColor='pink';
head.style.padding='4px 10px 4px 10px';
head.style.borderRadius='10px'
head.style.boxShadow = '5px 0px 5px 2px rgba(200, 0, 20, 0.5)';
head.innerHTML='<strong>Shopping List</strong>';
//styling main container
mainConatainer.style.backgroundColor='lightblue'
mainConatainer.style.borderRadius='20px';
mainConatainer.style.padding='40px';
//styling form
form.style.border='2px solid white'
form.style.backgroundColor='white'
form.style.borderRadius='20px'
form.style.padding='20px'
form.style.boxShadow = '0px 0px 5px 2px rgba(0, 0, 0, 0.3)';
//inputI styling
inputI.style.border='solid pink'
inputI.style.backgroundColor='lightblue'
inputI.style.boxShadow = '3px 0px 5px 2px rgba(0, 0, 0, 0.3)';

//addbutton styling
buttonC.style.border='solid pink'
buttonC.style.borderRadius='8px'
buttonC.style.backgroundColor='pink'
buttonC.style.boxShadow = '3px 3px 5px 2px rgba(0, 0, 0, 0.3)';
//styling AddButtonC i
AddButtonI.style.color='green'
//styling filter
mainFilterContainerC.style.backgroundColor='white';
mainFilterContainerC.style.margin='23px 0 ';
mainFilterContainerC.style.borderRadius='10px';
mainFilterContainerC.style.padding='5px'
mainFilterContainerC.style.boxShadow = '0px 0px 5px 2px rgba(0, 0, 0, 0.3)';
inputFilterI.style.border='solid pink';
inputFilterI.style.width='133px';
inputFilterI.style.margin='0 0 0 16px';
inputFilterI.style.borderRadius='10px';
inputFilterI.style.backgroundColor='lightblue'
inputFilterI.style.boxShadow = '3px 3px 5px 2px rgba(0, 0, 0, 0.3)';

//styling the ul
ulI.style.backgroundColor='white';
ulI.style.padding='30px 0 0 0';
ulI.style.borderRadius='10px';
ulI.style.boxShadow = '0px 0px 5px 2px rgba(0, 0, 0, 0.3)';
// styling li
li.forEach(l=>{
l.style.backgroundColor='lightblue';
l.style.color='black';
l.style.boxShadow = '3px 3px 6px 2px rgba(0, 0,0, 0.3)';
})
// styling clear button
clearButtonC.style.backgroundColor='pink'
clearButtonC.style.color='red';
clearButtonC.style.boxShadow= '0px 0px 5px 2px rgba(0, 0, 0, 0.3)';
clearButtonC.innerHTML='<strong>Clear All..</strong>'

//creating functions

function styleNewLi(){
li.forEach(l=>{
l.style.backgroundColor='lightblue';
l.style.color='black';
l.style.boxShadow = '3px 3px 6px 2px rgba(0, 0,0, 0.3)';
})
}

// Add this inside the DOMContentLoaded event listener
const deleteIcons = document.querySelectorAll('.remove-item');

deleteIcons.forEach(deleteIcon => {
deleteIcon.addEventListener('click', () => {
  const listItem = deleteIcon.closest('li');
  listItem.remove();
});
});

function dels(){
const deleteIcons = document.querySelectorAll('.remove-item');

deleteIcons.forEach(deleteIcon => {
deleteIcon.addEventListener('click', () => {
   deleteIcon.closest('li').remove();
  
  localStorage.removeItem('key')
});
});
}


//filter search
inputFilterI.addEventListener('input', () => {
        const searchText = inputFilterI.value.toLowerCase();
        const items = uItem.getElementsByTagName('li');
        for (const item of items) {
          const itemText = item.textContent.toLowerCase();
          if (itemText.includes(searchText)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
//clear all 

clearButtonC.addEventListener('click', () => {
clearAll();
});

// Function to clear all items from local storage and display
function clearAll() {
ulI.innerHTML = ''; // Clear the list display
localStorage.clear(); // Clear all items from local storage
}


//conditions
document.addEventListener('DOMContentLoaded',()=>{
  add.disabled=true;
  inputI.addEventListener('keyup',()=>{
    if(inputI.value.length>0){
      add.disabled=false;
    }
    else{
      add.disabled=true
    }
  })
})


//click add
add.addEventListener('click',()=>{
addtoL()
})
// localStorage which takes two functions and add li list
//addtoldisc

const addtoL=()=>{
const input=document.getElementById('item-input');
const task=input.value;
//retrieving the item first
const get=JSON.parse(localStorage.getItem('key')) || [];
get.push(task);
localStorage.setItem('key',JSON.stringify(get)) || [];
input.value=''
display()
}
//display
const display=()=>{
const uItem = document.getElementById('item-list');

const get=JSON.parse(localStorage.getItem('key')) || [];

get.forEach(task=>{
  const newLi = document.createElement('li');
newLi.style.backgroundColor='lightblue'
  newLi.innerText=task
const button = document.createElement('button');
button.className='remove-item btn-link text-red'
const icon = document.createElement('i')
icon.className='fa-solid fa-xmark'
uItem.appendChild(newLi);
newLi.appendChild(button);
button.appendChild(icon);
icon.onclick=dels;

})
}
display()          