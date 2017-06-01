import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent implements OnInit {

  constructor() {}

  Slider(){
    $(function () {
      $('#slider-range').slider({
        range: true,
        min: 0,
        max: 100000,
        values: [0, 10500],

        slide: function (event, ui) {
            $('#amount').val(ui.values[0] + ' - ' + ui.values[1]);
        }
      });

      $('#amount').val('$' + $('#slider-range').slider('values', 0) +
        ' - $' + $('#slider-range').slider('values', 1));
    });
  }


  ngOnInit() {
    this.Slider();
  }
}
