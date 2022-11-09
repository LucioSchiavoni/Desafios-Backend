const Contenedor = require('./index');

const products = new Contenedor('productos.txt');

const test = async () => {
    let save = await products.save({
        title: 'Havanna Semilla',
        price: 40,
        thumbail: "https://storage.lacapitalmdp.com/2019/12/semilia-1024x744.jpg"

    });
    let getAll = await products.getAll();
    let getById = await products.getById(5);
    let deleteById = await products.deleteById(2);
    let deletAll = await products.deletAll();

    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deletAll);
};

test();