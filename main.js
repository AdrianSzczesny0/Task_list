const item_template = document.getElementById("item_template");
const addBtn = document.getElementById("addBtn");
const item_container = document.getElementById("list");
const item_text = document.getElementById("itemName");
const removeBtn = document.getElementsByClassName;
const itemList = [];
const notybar = document.getElementById("noty_bar");

console.log(addBtn);


// add new list item 
function addNewListItem(){
  const toAddName = item_text.value;
  if (itemList.includes(toAddName) || toAddName==""){
    console.log('item already in list');
    document.getElementById("itemName").value = "";
    createNotybar('fail','Item already exists');
  }else{
    const firstItem = document.getElementsByClassName("")
    const toAddName = item_text.value;
    const clonedItem = item_template.content.cloneNode(true);
    const clonedItemName = clonedItem.getElementById("item_name");
    const delete_button = clonedItem.getElementById("item_button");
    clonedItemName.innerHTML = toAddName;
    clonedItemName.parentElement.classList.add('visible');
    item_container.append(clonedItem);
    document.getElementById("itemName").value = "";
    delete_button.onclick = function() {
      this.parentElement.remove();
      for (let index = 0; index < itemList.length; index++) {
        if (itemList[index] == clonedItemName.innerHTML){
          itemList.splice(index,1);
        }
      }
    }
    createNotybar('success','Successfully added item');

    // item check uncheck
    clonedItemName.onclick = function() {
      console.log('CLICKED');
      if (clonedItemName.parentElement.classList.contains('Finished')){
        clonedItemName.parentElement.classList.remove('Finished');
        clonedItemName.parentElement.classList.add('ToDo');
        clonedItemName.classList.remove('Finished');
        clonedItemName.classList.add('ToDo');
      }else if (clonedItemName.parentElement.classList.contains('ToDo')) {
        clonedItemName.parentElement.classList.remove('ToDo');
        clonedItemName.parentElement.classList.add('Finished');
        clonedItemName.classList.remove('ToDo');
        clonedItemName.classList.add('Finished');
      }
    }
    itemList.push(toAddName);
  }
}


addBtn.addEventListener('click', e => {
  addNewListItem();
  console.log(itemList);  

})


var close = document.getElementsByClassName("item_button");
console.log(close);
var i;
for (i = 0; i < close.length; i++) {
  console.log(close[i]);
  close[i].onclick = function() {
    var div = this.parentElement;
  }
}

document.body.addEventListener("keydown", (ev) =>{
  if(ev.key=='Enter'){
    addNewListItem();
  }
});


async function createNotybar(type,message){
  console.log('Creating notybar');
  const notyBar = document.createElement('div');
  const notyBarMessage = document.createElement('p');
  
  notyBar.classList.add('noty_bar');
  if (type=='success'){
    notyBar.classList.add(type);
    notyBarMessage.innerHTML = message;
  }else if (type=="fail"){
    notyBar.classList.add(type);
    notyBarMessage.innerHTML = message;
  }else{
    console.log(`There is no notification type ${type}`)
  }
  notyBar.appendChild(notyBarMessage);
  document.body.appendChild(notyBar);
  await fadeIn(notyBar);
  await delay(1000);
  await fadeout(notyBar);
  notyBar.remove();
}

async function fadeIn(element){
  for (let index = 0; index <10; index++) {
    await delay(20);
    element.style.opacity = index/10;
  }
}
async function fadeout(element){
  for (let index = 10; index <0; index--) {
    await delay(20);
    element.style.opacity = index/10;
  }
}


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function test() {
  console.log('start timer');
  await delay(1000);
  console.log('after 1 second');
}