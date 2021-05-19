class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

    print() {
        let tr = document.createElement("tr");
        tr.innerHTML = `
                    <th>${this.name}</th>
                    <th>${this.price}</th>
                    <th>${this.year}</th>
                    `;

        let th3 = document.createElement("th");
        tr.appendChild(th3);

        let thButton = document.createElement("button");
        th3.appendChild(thButton);
        thButton.className = "btn btn-sm btn-danger";
        thButton.textContent = "Delete";
        thButton.onclick = remProd;

        document.getElementById("productList").appendChild(tr);
    }

    clearForm() {
        formulari.name.value = "";
        formulari.price.value = "";
        formulari.year.value = "";
    }
}