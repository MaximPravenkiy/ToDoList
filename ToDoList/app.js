let inputCreate = document.getElementById("input-create");
let buttonCreate = document.getElementById("btn-create");
let listToDo = document.getElementById("todo-list");
let listCompleted = document.getElementById("mission-completed");
let inputSearch = document.getElementById("search");
let buttonSearch = document.getElementById("btn-search");

buttonCreate.addEventListener('click', function(){
  let value = inputCreate.value;
  let spaces = 0; 
  if(value) {
    for(i = 0; i < value.length; i++)
      if(value[i] == ' ')
        spaces++;
    if(spaces == value.length) 
    alert('Наименование задачи не должно состоять только из пробелов!');
    else
    addItemToDom(value);
    inputCreate.value = '';  
  }
})

function addItemToDom(value){
    let itemView = `
      <div class="item">
        <span class="item-text">${value}</span>
        <span class="secondary-content">
          <div class="item-btn item-btn-done btn-floating btn-small waves-effect waves-light green">v</div>
          <div class="item-btn item-btn-del btn-floating btn-small waves-effect waves-light red">х</div>
        </span>
      </div>`;

    let item = document.createElement('li');
    //класс, который я не вспомнил на уроке
    item.classList = 'collection-item';
    item.innerHTML = itemView;
    //добавим слушатель для удаления

    listToDo.appendChild(item);
    // console.log(item);
    // console.log(listToDo);
    let buttonDelete = item.getElementsByClassName('item-btn-del')[0];
    buttonDelete.addEventListener('click', removeItem);

    let buttonDone = item.getElementsByClassName('item-btn-done')[0];
    buttonDone.addEventListener('click', moveItem);

}

function removeItem(event){
  let item = event.target.parentNode.parentNode.parentNode;
  listToDo.removeChild(item);
}

function moveItem(event){
  let item = event.target.parentNode.parentNode.parentNode;
  let btnDel = event.target.parentNode;
  btnDel.remove();
  item.style.background = 'grey';
  listCompleted.appendChild(item);
}

buttonSearch.addEventListener('click', function(){
  // console.log(event);
  let value = inputSearch.value;
  let getAllLi = listCompleted.querySelectorAll('li');
  let search = [];
  let count = 0;
  // console.log(getAllLi);
  for(i = 0; i < getAllLi.length; i++){
    getAllLi[i].style.background = 'grey';
    if(value.toLowerCase() == getAllLi[i].innerText.toLowerCase()){
      count++;
      getAllLi[i].style.background = 'red';
    }
  }
  alert('Найдено совпадений: ' + count);
})