const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


const products = [
    {
        id:1,
        name:"name",
        price: 50,
        image:"images/product-1.webp",
        stock:3
    },
    {
        id:2,
        name:"name",
        price: 50,
        image:"images/product-2.webp",
        stock:50
    },
    {
        id:3,
        name:"name",
        price: 50,
        image:"images/product-3.webp",
        stock:50
    },
    {
        id:4,
        name:"name",
        price: 50,
        image:"images/product-4.webp",
        stock:50
    },
    {
        id:5,
        name:"name",
        price: 50,
        image:"images/product-5.webp",
        stock:50
    },
    {
        id:6,
        name:"name",
        price: 50,
        image:"images/product-6.webp",
        stock:50
    }
]


app.get("/api/products", (req, res) => {
    res.send(products);
});
app.post("/api/pay", (req, res) => {
    const ids= req.body;
    const productsCopy= products.map(p =>({...p}))
    ids.forEach(id=>{
        const product = productsCopy.find(p=>p.id === id);
        if (product.stock > 0){
            product.stock--;
        } else {
            throw "Sin stock";
        }
    })
    products = productsCopy;
    res.send(products);
});
  
app.use("/", express.static("FrontEnd"));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});