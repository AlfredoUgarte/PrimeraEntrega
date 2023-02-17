import { v4 as uuidv4 } from 'uuid';

class Product{
    constructor({title,description,price,thumbnail, stock})
    {
        this.id=uuidv4();
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.stock=stock;

    }
}

class ProductManager{
    constructor ()
    {
        this.products = [];
    }

  addProduct(product){
    if(!product.description||!product.price||!product.title||!product.stock||!product.thumbnail){
        console.log('Product must have all properties: title, description, price, thumbnail, stock');
 }
 else{
 const  newProduct = new Product(product)

 this.products.push(newProduct)
 }
  }

  getProducts()
  {
    return this.products;
  }

  getProductById(id)
  {
    const currentProduct = this.products.find(p=>p.id===id)
    return currentProduct?currentProduct:"Product not found"
    
  }


    
}


/* const product1 = {
    title: 'Coca Cola',
    description: 'Bebida gaseosa',
    price: 100,
    thumbnail: 'https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png',
    stock: 100
  }
  
  const product2 = {
    title: 'Pepsi',
    description: 'Bebida gaseosa',
    thumbnail: 'https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png',
    stock: 100
  }

  const manager=new ProductManager();
  manager.addProduct(product1)
  manager.addProduct(product2)

const productos=manager.getProducts();
  console.log(manager.getProductById(productos[0].id)) */

