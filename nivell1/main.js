class Product {
    constructor(name, price, year) {
        this._name = name;
        this._price = price;
        this._year = year;
    }
}

let productsArray = [];

function crearProduct() {
    let name = document.getElementById("prodName").value;
    let price = document.getElementById("prodPrice").value;
    let year = document.getElementById("prodYear").value;

    let product1 = new Product(name, price, year);
    addProduct(product1);
    console.log(productsArray);
    clear(name, price, year);
}

function addProduct(product) {
    console.log(product);
    productsArray.push(product);
}

function clear(name, price, year) {
    name = "";
    price = "";
    year = "";
}