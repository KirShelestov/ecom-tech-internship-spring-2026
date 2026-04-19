const express = require("express");
const cors = require("cors");

const products = require("./data/products");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get("/products", async (req, res) => {
    const { search } = req.query;

    await delay(500);

    let result = products;

    if (search) {
        result = products.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
        );
    }

    res.json(result);
});

app.get("/products/:id", async (req, res) => {
    await delay(500);

    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Товар не найден" });
    }

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен - http://localhost:${PORT}`);
});
