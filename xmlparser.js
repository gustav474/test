/**
 * Created by gusta on 14.04.2017.
 */
var fs = require('fs');
var jsonfile = require('jsonfile');
var xml2js = require('xml2js');
var http = require('http');

const path = 'http://stripmag.ru/datafeed/p5s_full.xml';
const testpath = 'http://demo7590466.mockable.io/';
const xml = "<root>Hello xml2js!</root>";
const arrayToJson =
  {
    name: "Sergey",
    email: "gustav474@gmail.com"
  };

function readFile(url){
  var file = new fs.WriteStream('datasource.xml');
  var request = http.get(url, (res) => {
    res.pipe(file);
    });
};

function parseXmlFile(url){
  fs.readFile(url, function (err, data) {
    xml2js.parseString(data, function (err, result) {
      // console.log(result);
      fs.writeFile('datasource.json', JSON.stringify(result));
    });
  });
};

function parseJsonFile(url){
  fs.readFile(url, 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(JSON.parse(data).p5s.product[0].pictureSmall[0]);
  });
};

//readFile(path);//Качаем XML файл с источника
//parseXmlFile('datasource.xml');//парсим XML файл. Результат в виде JSON файла
parseJsonFile('datasource.json');//выстаскиваем значения из файла






