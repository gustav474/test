import { Component, OnInit, Input } from '@angular/core';
declare  var  $: any;

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  @Input() product;

  img_array: string[] = [];

  Slider() {
    $(document).ready(function ($) {

      $('#checkbox').change(function () {
        setInterval(function () {
          moveRight();
        }, 3000);
      });

      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;

      $('#slider').css({width: slideWidth, height: slideHeight});

      function moveLeft() {
        $('#slider ul').animate({
          left: +slideWidth
        }, 200, function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
        });
      };

      function moveRight() {
        $('#slider ul').animate({
          left: -slideWidth
        }, 200, function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
        });
      };

      if (slideCount > 1) {
        $('#slider ul').css({width: sliderUlWidth, marginLeft: -slideWidth});

        $('#slider ul li:last-child').prependTo('#slider ul');

        $('a.control_prev').click(function () {
          moveLeft();
        });

        $('a.control_next').click(function () {
          moveRight();
        });

      } else {
        $('#slider a').remove();
      }

    });
  }

  getImg(_product) {
    let array: string[] = [];
    if (_product.pic1 != "") {
      console.log('Есть 1 изображение!');
      array.push(_product.pic1);
    }
    if (_product.pic2 != "") {
      console.log('Есть 2 изображение!');
      array.push(_product.pic2);
    }
    if (_product.pic3 != "") {
      console.log('Есть 3 изображение!');
      array.push(_product.pic3);
    }
    if (_product.pic4 != "") {
      console.log('Есть 4 изображение!');
      array.push(_product.pic4);
    }
    if (_product.pic5 != "") {
      console.log('Есть 5 изображение!');
      array.push(_product.pic5);
    }
    console.log("У продукта изображений: " + array.length);
    console.log(array);
    this.img_array = array;
  }

  constructor() { }

  ngOnInit() {
    //Необходимость использования Promise объясняется тем, что при инициализации компонента массив с изображениями отрабатывает после создания слайдера, в результате последний работает не корректно. Добавление Promise позволяет решить эту проблему.
    let promise = new Promise((resolve, reject) => {
      this.getImg(this.product);
      if (this.img_array) resolve();
    });

    promise
      .then(
        () => {
          this.Slider();
        }
      )
  }
}
