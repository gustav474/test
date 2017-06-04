/**
 * Created by gusta on 03.06.2017.
 */
const fs = require('fs');
const http = require('http');

const path = 'http://stripmag.ru/datafeed/p5s.csv';

//Скачиваем файл с выгрузки и сохраняем его как file.csv
var file = fs.createWriteStream('file.csv');

var promise = new Promise( function(resolve, reject) {

  var request = http.get(path, (res) => {
      res.pipe(file);
      resolve();
  } );


} );

promise.
  then( () => {
    console.log('Файл загружен');

} );






