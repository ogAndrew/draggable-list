const draggableList = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');
// array of richest people
const rawDataArr = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
]

const listItems = [];

let startIndex;

createList();
// insert items into dom
function createList() {
  [...rawDataArr]
    .map(person => ({ value: person, sort: Math.random() } ))
    .sort((a, b) => a.sort - b.sort)
    .map(obj => obj.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');
    
      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fa fa-grip-lines"></i>
        </div>
      `;
        console.log(listItem.classList);

      listItems.push(listItem);

      draggableList.appendChild(listItem);
    })
}
