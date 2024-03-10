

function addAll() {
    addIngredient('2', 'Eier')
    addIngredient('300g', 'Mehl');
    addIngredient('1 EL', 'Zucker');
    addIngredient('3L', 'Milch');
    addIngredient('1 Prise', 'Salz');
}

function addCustom(){
    let amount = document.getElementById('customAmount').value;
    let ingredient = document.getElementById('customIngredient').value;
    addIngredient(amount, ingredient);

    document.getElementById('customAmount').value = '';
    document.getElementById('customIngredient').value = '';
}

function addIngredient(menge, zutat) {
    document.getElementById('table').innerHTML += `
    <tr>
        <td>${menge}</td>
        <td>${zutat}</td>
    </tr>
    `;
}

