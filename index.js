// simple shopping list array
let shoppingList = [];

// add item if not empty and not already in the list
function addItem(item) {
  if (!item || item.trim() === "") {
    alert("Please enter an item!");
    return;
  }

  const cleanItem = item.trim();

  // check duplicate (case-insensitive)
  const exists = shoppingList.some(
    (i) => i.toLowerCase() === cleanItem.toLowerCase()
  );
  if (exists) {
    alert("Item already in the list!");
    return;
  }

  shoppingList.push(cleanItem);
  updateDisplay();
}

// remove the last item
function removeLastItem() {
  if (shoppingList.length === 0) {
    alert("List is already empty!");
    return;
  }
  shoppingList.pop();
  updateDisplay();
}

// show all items on screen
function updateDisplay() {
  const list = document.getElementById("listDisplay");
  list.innerHTML = "";

  if (shoppingList.length === 0) {
    list.innerHTML = "<li>No items in the list.</li>";
    return;
  }

  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// search items that match the input
function searchItems() {
  const term = document.getElementById("searchInput").value.trim().toLowerCase();
  const list = document.getElementById("listDisplay");
  list.innerHTML = "";

  if (term === "") {
    updateDisplay();
    return;
  }

  const results = shoppingList.filter((item) =>
    item.toLowerCase().includes(term)
  );

  if (results.length === 0) {
    list.innerHTML = "<li>No match found.</li>";
    return;
  }

  results.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// connect buttons when page loads
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBtn").addEventListener("click", function () {
    const value = document.getElementById("itemInput").value;
    addItem(value);
    document.getElementById("itemInput").value = "";
  });

  document
    .getElementById("removeBtn")
    .addEventListener("click", removeLastItem);

  document.getElementById("searchBtn").addEventListener("click", searchItems);
});
