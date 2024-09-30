let selectedItem = null;
let addedItems = [];

// Function to add item to the list
function additem() {
  const selectMenu = document.querySelector('select');
  selectedItem = selectMenu.options[selectMenu.selectedIndex].value;
  if (selectedItem !== 'Select Menu') {
    const selectedItemPrice = getPriceFromMenu(selectedItem);
    addedItems.push({ name: selectedItem, price: selectedItemPrice });
    displayAddedItems();
    removeOptionFromSelect(selectedItem);
  }
}

// Function to remove item from the list
function removeitem() {
  if (addedItems.length > 0) {
    const removedItem = addedItems.pop();
    addOptionToSelect(removedItem.name);
    displayAddedItems();
  }
}

// Function to generate bill
function generateBill() {
  let totalAmount = 0;
  addedItems.forEach((item) => {
    totalAmount += item.price;
  });
  const billElement = document.createElement('p');
  billElement.textContent = `Total Amount: ₹ ${totalAmount}`;
  document.querySelector('.inner-container').appendChild(billElement);
}

// Function to display added items
function displayAddedItems() {
  const addedItemsElement = document.querySelector('.added-items');
  if (!addedItemsElement) {
    const element = document.createElement('div');
    element.className = 'added-items';
    document.querySelector('.inner-container').appendChild(element);
  }
  const addedItemsHTML = addedItems.map((item) => `<p>${item.name} - ₹ ${item.price}</p>`).join('');
  document.querySelector('.added-items').innerHTML = addedItemsHTML;
}

// Function to remove option from select menu
function removeOptionFromSelect(item) {
  const selectMenu = document.querySelector('select');
  const optionToRemove = Array.prototype.filter.call(selectMenu.options, (option) => option.value === item)[0];
  selectMenu.removeChild(optionToRemove);
}

// Function to add option to select menu
function addOptionToSelect(item) {
  const selectMenu = document.querySelector('select');
  const newOption = document.createElement('option');
  newOption.value = item;
  newOption.textContent = item;
  selectMenu.appendChild(newOption);
}

// Function to get price from menu
function getPriceFromMenu(item) {
  const menuItems = document.querySelectorAll('.display-menu ol li');
  const menuItem = Array.prototype.filter.call(menuItems, (menuItem) => menuItem.textContent.trim().startsWith(item))[0];
  const price = menuItem.querySelector('p').textContent.replace('₹ ', '');
  return parseInt(price);
}
// Function to generate bill
function generateBill() {
    let totalAmount = 0;
    addedItems.forEach((item) => {
      totalAmount += item.price;
    });
    const billElement = document.querySelector('.bill');
    if (!billElement) {
      const newBillElement = document.createElement('p');
      newBillElement.className = 'bill';
      newBillElement.textContent = `Total Amount: ₹ ${totalAmount}`;
      document.querySelector('.inner-container').appendChild(newBillElement);
    } else {
      billElement.textContent = `Total Amount: ₹ ${totalAmount}`;
    }
  }

  // Function to display added items
function displayAddedItems() {
  const addedItemsElement = document.querySelector('.added-items');
  const billElement = document.querySelector('.bill');
  if (billElement) {
    billElement.remove();
  }
  if (!addedItemsElement) {
    const element = document.createElement('div');
    element.className = 'added-items';
    document.querySelector('.inner-container').appendChild(element);
  }
  const addedItemsHTML = addedItems.map((item) => `<p>${item.name} - ₹ ${item.price}</p>`).join('');
  document.querySelector('.added-items').innerHTML = addedItemsHTML;
  generateBill();
}