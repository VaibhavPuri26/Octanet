document.getElementById('add-item-btn').addEventListener('click', addItem);

function addItem() {
    const input = document.getElementById('new-item-input');
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter a skill.");
        return;
    }

    const itemContainer = document.getElementById('item-container');
    const newItem = document.createElement('div');
    newItem.className = 'item list-group-item';
    newItem.innerHTML = `
        <span>${itemText}</span>
        <button class="remove-btn" onclick="removeItem(this)">X</button>
    `;

    itemContainer.appendChild(newItem);
    input.value = "";
    input.focus();

    document.getElementById('message').innerText = "New item added: " + itemText;
    document.getElementById('delete-message').innerText = "";
}

function removeItem(button) {
    const item = button.parentNode;
    const skillText = item.querySelector('span').innerText;
    item.remove();

    document.getElementById('delete-message').innerText = "Last item deleted: " + skillText;
}
