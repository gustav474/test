import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private path: string = 'http://localhost:3000/api/users/3001';
  private category_path = 'http://localhost:3000/api/products/category/';
  private search_path = 'http://localhost:3000/api/search';
  private search_single_product_path = 'http://localhost:3000/api/singlesearch';



  constructor(private http: Http) { }

  //Ф-ция преобразования строки в число
  getNum(_num: string) {
    return _num.replace(/\D/g, '');
  }

  search(_category: string, _brand: string, _price1: string, _price2: string) {
    let params: URLSearchParams = new URLSearchParams();

    //Проверка на null, когда при загрузке страницы поля select'ов пустые
    if (_category != '---' && _category != null) params.set("category", _category);
    if (_brand != '---' && _brand != null) params.set("brand", _brand);
    if (_price1 != '---' && _price1 != null) {
      let price1 = this.getNum(_price1);
      params.set("price1", price1);
    };
    if (_price2 != '---' && _price2 != null) {
      let price2 = this.getNum(_price2);
      params.set("price2", price2);
    };

    let requestOptions = new RequestOptions();
    requestOptions.params = params;

    return this.http.get(this.search_path, requestOptions)
      .map((res: Response) => res.json());
  }

  //Получаем один продукт из базы данных для отображения на productPageComponent
  getSingleProduct(_id) {
    let requestOptions = new RequestOptions();
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', _id);

    requestOptions.params = params;
    return this.http.get(this.search_single_product_path, requestOptions)
      .map((res: Response) => res.json());
  }

}
