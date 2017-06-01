/**
 * Created by gusta on 23.04.2017.
 */
const User = require('../db');
var ObjectId = require('mongoose').Types.ObjectId;

let mainController = {

  getProducts: (req, res) => {

    let parse = {};
    count = 20; //Колличество извлекаемых из базы данных продуктов по запросу

    //Проверка на наличие данных у параметров
    if (req.query.category != null) parse.category = req.query.category;
    if (req.query.brand != null) parse.brand = req.query.brand;
    //Установка логики поиска по цене
    // if (req.query.price1 != null && req.query.price2 != null ) parse.price = {$gt: Number(req.query.price1), $lt: Number(req.query.price2)};
    parse.price = {$lt: Number(req.query.price2), $gt: Number(req.query.price1)};//Меньше чем price2, больше чем price1


    User.find(parse, (err, products) => {
      if (err) res.json(err);
      else res.json(products);
    }).limit(count);

  },

  //Поиск продукта по ID
  getSingleProduct: (req, res) => {

    let parse = {"_id": ObjectId(req.query.id)};

    User.find(parse, (err, product) => {
      if (err) res.json(err);
      else res.json(product);
    })
}

}

module.exports = mainController;

