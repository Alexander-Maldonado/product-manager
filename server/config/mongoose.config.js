const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/product_manager', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log('Connected to datatbase'))
    .catch((err)=>console.log(err));

