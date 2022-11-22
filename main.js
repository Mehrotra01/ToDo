function sayHi(){
	console.log("Hello")
}



const buttonCreate = document.getElementById('button-main');
const buttonToggle = document.querySelector('.button-toggle');
const buttonRemove = document.querySelector('.button-remove');
const taskList = document.querySelector('.list-container ul');


taskList.addEventListener('mouseover', (event) => {
	if(event.target.tagName === 'LI'){
		event.target.textContent = event.target.textContent.toUpperCase();
	}
})

buttonToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') { 
    buttonToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    buttonToggle.textContent = 'Show List';                        
    listContainer.style.display = 'none';
  }                         
});

buttonCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  list.insertAdjacentHTML( 
    'afterbegin', 
    `<li>${input.value}</i>` 
  );
  input.value = '';
});

buttonRemove.addEventListener('click', () => {
  const li = document.querySelector('li:last-child');
  li.remove();
});
