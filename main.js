const sneakers = [
    {name: "Nike Air Max", price: 1800 },
    {name: "Adidas Ultraboost", price: 2200 },
    { name: "Puma RS-X", price: 1500  }
];

function displayProducts(list) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = list.map(s => '
        <div class="product-card">
           <h3>${s.name}</h3>
           <p>R${s.price}</p>
        </div>
       ').join('');
}


document.getElementById('searchBar').addEventListener('input',(e) => {
    const filtered = sneakers.filter(s => 
        s.name.toLowerCase().includes(e.target.value.toLowerCase())
);    
    displayProducts(filtered);
});

displayProducts(sneakers);

