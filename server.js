const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json()); // Parse JSON bodies

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
