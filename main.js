const item_template = document.getElementById("item_template");
const addBtn = document.getElementById("addBtn");
const item_container = document.getElementById("list");
const item_text = document.getElementById("itemName");
const removeBtn = document.getElementsByClassName;
const itemList = [];

console.log(addBtn);

function addNewListItem(){
  const toAddName = item_text.value;
  if (itemList.includes(toAddName) || toAddName==""){
    console.log('item already in list');
    document.getElementById("itemName").value = "";
  }else{
    const toAddName = item_text.value;
    const clonedItem = item_template.content.cloneNode(true);
    const clonedItemName = clonedItem.getElementById("item_name");
    const delete_button = clonedItem.getElementById("item_button");
    clonedItemName.innerHTML = toAddName;
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


// const addButton = document.getElementById('sub-btn');
// const listContainer = document.getElementById('items');
// const inputField = document.getElementById('sub');
// const rmvButton = document.getElementById('rmv');

// const handleRemove = e => {
//   const item = e.target.closest('.item');
  
//   // Remove the listener, to avoid memory leaks.
//   item.querySelector('.remove-btn')
//     .removeEventListener('click', handleRemove);
  
//   item.parentElement.removeChild(item);
// };

// // Adds items to list after clicking button
// addButton.addEventListener('click', e => {
//   const item = document.createElement('div');
//   const paragraph = document.createElement('div');
//   const remove = document.createElement('button');
  
//   item.classList.add('item');
//   paragraph.classList.add('paragraph-style');
//   remove.classList.add('remove-btn');
  
//   paragraph.textContent = inputField.value;
//   remove.textContent = 'Remove';
  
//   remove.addEventListener('click', handleRemove);
  
//   item.append(paragraph);
//   item.append(remove);
//   listContainer.append(item);
  
//   inputField.value = '';
// })