const productCtrl = require('../controllers/product.controller');

module.exports=(app)=>{
    app.post('/api/product', productCtrl.createNewProduct);
    app.get('/api/product', productCtrl.getAllProducts);
    app.get('/api/product/:id', productCtrl.getOneProductById);
    app.delete('/api/product/:id', productCtrl.deleteProduct);
    app.put('/api/product/:id', productCtrl.findOneAndUpdate)
};