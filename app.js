//dom
//getElementTagName 
//getElementTagName
//getEWlementById
//qyery





// const content = window.document.querySelector("h3");
// content.textContent = " привет мир"

// const num = document.getElementById('nur').onclick =  function  () {
//     console.log('💔');
    
// }

// const list = document.getElementById('list')
// const newItemi = document.createElement('li')
// const newH1 = document.createElement('h1')
// const  newButton = document.createElement('button')



    
// newButton.textContent = "content 5"
// newButton.textContent = "Удалить"
// newItemi.textContent = "content 3 "
// newH1.textContent = "content 4 "







// console.log(newH1);

// console.log(newItemi);
// newItemi.prepend(newButton);
// list.appendChild(newItemi)
// // list.appendChild(newButton)
// list.appendChild(newH1)




// const headings= document.querySelectorAll('li');

// headings.forEach((heading) => {
//   heading.addEventListener('click', () => {
//     heading.remove(); 
//   });
// });


// document.querySelectorAll('li').forEach(h1 => h1.onclick = () => h1.remove());


const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
      const listItem = document.createElement("li");
      listItem.className = "task-item";
      
      listItem.innerHTML = `
          <input type="checkbox" onchange="toggleComplete(this)">
          <span>${taskText}</span>
          <button onclick="this.parentElement.remove()">Delete</button>
      `;
      
      taskList.appendChild(listItem);
      taskInput.value = "";
  }
}

function toggleComplete(checkbox) {
  checkbox.nextElementSibling.classList.toggle("completed", checkbox.checked);
}



function clearCompleted() {
  Array.from(taskList.children).forEach(task => {
      if (task.querySelector("input").checked) {
          task.remove();
      }
  });
}