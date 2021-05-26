let productsArray = [];

let formulari = document.getElementById("formProduct");
let alert = document.getElementById("alert");

btnSave.onclick = addProd;

function addProd(producte) {
    let acumErrores = 0;
    producte.preventDefault();

    let nameProduct = nameP.value;
    let priceProduct = priceP.value;
    let yearProduct = yearP.value;

    let product = new Product(nameProduct, priceProduct, yearProduct);

    if (nameProduct == "" | priceProduct == "" | yearProduct == "") {
        messageAlert("Tots els camps són obligatoris.", "alert alert-warning");
        acumErrores++;
    } else if (productsArray.some(e => e.name == nameProduct)) {
        messageAlert("El producte ja ha estat registrat. Si us plau, tria un altre nom.", "alert alert-secondary");
        acumErrores++;
    } else {
        product.print();
        messageAlert("S'ha afegit el producte correctament.", "alert alert-success");
        console.log(product);

        productsArray.push(product);
        console.log(productsArray);

        product.clearForm();
    }

    if (acumErrores > 0) {
        return false;
    }
}

function remProd(product) {
    if (product.classList = "btn btn-sm btn-danger") {
        for (let element in productsArray) {
            if (productsArray[element].name === product.target.parentNode.parentNode.firstElementChild.className) {
                productsArray.splice(element, 1);
                product.target.parentNode.parentNode.remove();
                messageAlert("S'ha eliminat el producte correctament.", "alert alert-danger");
                console.log(productsArray);
            }
        }
    }
}

function messageAlert(showMessage, showAlert) {
    document.getElementById("alert").innerHTML = showMessage;
    alert.className = showAlert;

    alert.style.visibility = 'visible';
    setTimeout(() => alert.style.visibility = 'hidden', 3000);
}