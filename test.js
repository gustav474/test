/**
 * Created by gusta on 03.06.2017.
 */

const fs = require('fs');

//Имя файла, который будем изменять
let file = 'file.scv';

fs.readFile('file.csv', function (err, contents) {
  var str = contents.toString().replace(/(?:Артикул)/, 'articul')
    .replace(/(?:"Основная категория товара")/, 'category')
    .replace(/(?:Наименование)/, 'name')
    .replace(/(?:Описание)/, 'description')
    .replace(/(?:Производитель)/, 'brand')
    .replace(/(?:"Артикул производителя")/, 'brand_articul')
    .replace(/(?:"Цена \(Розница\)")/, 'price')
    .replace(/(?:"Цена \(Опт\)")/, 'price_opt')
    .replace(/(?:"Можно купить")/, 'may_to_buy')
    .replace(/(?:"На складе")/, 'instock')
    .replace(/(?:"Время отгрузки")/, 'time_otgruzki')
    .replace(/(?:Размер\/Цвет)/, 'size_color')
    .replace(/(?:Материал)/, 'meterial')
    .replace(/(?:Батарейки)/, 'battery')
    .replace(/(?:Упаковка)/, 'package')
    .replace(/(?:"Вес \(брутто\)")/, 'weight')
    .replace(/(?:"Фотография маленькая до 150\*150")/, 'pic_small')
    .replace(/(?:"Фотография 1")/, 'pic1')
    .replace(/(?:"Фотография 2")/, 'pic2')
    .replace(/(?:"Фотография 3")/, 'pic3')
    .replace(/(?:"Фотография 4")/, 'pic4')
    .replace(/(?:"Фотография 5")/, 'pic5');
  //  записывем изменения обратно в файл с выгрузкой
  fs.writeFile('file.csv', str);
} );
