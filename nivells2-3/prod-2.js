let productsArray = [];

let formulari = document.getElementById("formProduct");
let alert = document.getElementById("alert");

btnSave.onclick = addProd;

function addProd(producte) {
    let acumErrores = 0;
    producte.preventDefault();

    if (nameP.value == "" | priceP.value == "" | yearP.value == "") {
        messageAlert("Tots els camps són obligatoris.", "alert alert-warning");
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    }

    let product = new Product(formulari.name.value, formulari.price.value, formulari.year.value);
    product.print();
    console.log(product);

    messageAlert("S'ha afegit el producte correctament.", "alert alert-success");

    productsArray.push(product);
    console.log(productsArray);

    product.clearForm();
}

function remProd(product) {
    product.target.parentNode.parentNode.remove();
    messageAlert("S'ha eliminat el producte correctament.", "alert alert-danger");
}

function messageAlert(showMessage, showAlert) {
    document.getElementById("alert").innerHTML = showMessage;
    alert.className = showAlert;
}