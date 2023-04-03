const ProductModel = require('../model/ProductModel');

class ProductsRepository {
  constructor(){
    if(!ProductsRepository.instance){
      ProductsRepository.instance = this;
    }
    return ProductsRepository.instance;
  }

  async findAll() {
    return await ProductModel.find();
  }

  async findById(id) {
    return await ProductModel.findById(id);
  }

  async delete(id) {
    await ProductModel.findByIdAndDelete(id);
  }

  async create({ name, price, category_id, subcategory, }) {
    return await ProductModel.create({
      name,
      price,
      category_id,
      subcategory,
    });
  }

  async update(id, { name, price, category_id, subcategory, }) {
   return await ProductModel.findByIdAndUpdate(id, {
      name,
      price,
      category_id,
      subcategory,
   },
   {
      new: true,
   });
  }

}

module.exports = new ProductsRepository();
