const item_template = document.getElementById("item_template");
const addBtn = document.getElementById("addBtn");
const item_container = document.getElementById("list");
const item_text = document.getElementById("itemName");
const removeBtn = document.getElementsByClassName;
const itemList = [];
const notybar = document.getElementById("noty_bar");
const currentAmount = document.getElementById("currentAount");
const maxAmount = document.getElementById("maxAmount");

// add new list item 
function addNewListItem(){
  const toAddName = item_text.value;
  if (itemList.includes(toAddName) || toAddName==""){
    document.getElementById("itemName").value = "";
    createNotybar('fail','Item already exists');
  }else{

    // create elements needed for the list item
    const listItemContainer = document.createElement('div');
    const listItemNameWrapper = document.createElement('div');
    const listItemButton = document.createElement('span');
    const listItemLine = document.createElement('div');
    const listItemName = document.createElement('span');

    // add the listItem as child to UL
    item_container.appendChild(listItemContainer);

    // add correct item structure
    listItemContainer.appendChild(listItemNameWrapper);
    listItemContainer.appendChild(listItemButton);
    listItemNameWrapper.appendChild(listItemName);
    listItemNameWrapper.appendChild(listItemLine);

    // add classes for styles to the list Item
    listItemContainer.classList.add('item_grid');
    listItemContainer.classList.add('ToDo');
    listItemNameWrapper.classList.add('item_name');
    listItemButton.classList.add('item_button');
    listItemLine.classList.add('line');

    // add correct text to list Item
    listItemButton.innerHTML = "Delete";
    listItemName.innerHTML = toAddName;

    // clear the add item input
    document.getElementById("itemName").value = "";

    // add the delete function to list item button
    listItemButton.onclick = async function() {
      listItemContainer.classList.add('deleted');
      for (let index = 0; index < itemList.length; index++) {
        if (itemList[index] == listItemName.innerHTML){
          itemList.splice(index,1);
        }
      }
      await fadeout(listItemContainer);
    }
    createNotybar('success','Successfully added item');

    // add check uncheck function to list item
    listItemNameWrapper.onclick = function() {
      if (listItemNameWrapper.parentElement.classList.contains('Finished')){
        listItemNameWrapper.parentElement.classList.remove('Finished');
        listItemNameWrapper.parentElement.classList.add('ToDo');
        listItemNameWrapper.classList.remove('Finished');
        listItemNameWrapper.classList.add('ToDo');
        listItemLine.style.opacity=0;
      }else if (listItemNameWrapper.parentElement.classList.contains('ToDo')) {
        listItemNameWrapper.parentElement.classList.remove('ToDo');
        listItemNameWrapper.parentElement.classList.add('Finished');
        listItemNameWrapper.classList.remove('ToDo');
        listItemNameWrapper.classList.add('Finished');
        listItemLine.style.opacity=1;
      }
    }
    itemList.push(toAddName);
    
    itemList.forEach(element => {
      if (element === toAddName){
        console.log(element);
        toAddName
      }
    });
  }
}

addBtn.addEventListener('click', e => {
  addNewListItem();
})


document.body.addEventListener("keydown", (ev) =>{
  if(ev.key=='Enter'){
    addNewListItem();
  }
});


async function createNotybar(type,message){
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

}

async function fadeIn(element){
  for (let index = 0; index <10; index++) {
    await delay(20);
    element.style.opacity = index/10;
  }
}
async function fadeout(element){
  for (let index = 10; index >0; index--) {
    await delay(50);
    element.style.opacity = index/20;
  }
  element.remove();
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}