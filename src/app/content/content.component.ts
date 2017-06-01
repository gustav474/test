import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { CartService } from 'app/services/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DataService]
})
export class ContentComponent implements OnInit {

  products: any = [];
  categories: string[] = [
    '---',
    'Вибраторы',
    'Фаллоимитаторы',
    'BDSM, садо-мазо товары',
    'Анальные игрушки',
    'Секс-товары для мужчин',
    'Секс-товары для женщин',
    'Косметика с феромонами',
    'Страпоны, фаллопротезы',
    'Смазки, лубриканты',
    'Приятные мелочи',
    'Эротическая одежда',
    'Секс-мебель и качели'
  ];
  brands: string[] = [
    '---',
    'California Exotic Novelties',
    'Doc Johnson',
    'Pipedream',
    'Gopaldas',
    'Seven Creations',
    'Topco Sales',
    'Inverma',
    'Wet International Inc.',
    'Сумерки богов',
    'ForPlay',
    'Парфюм престиж М',
    'СМП',
    'Фанты',
    'Биоритм',
    'Erolanta',
    'ToyFa',
    'Baile',
    'Vibe Therapy',
    'DressToUndress',
    'Роспарфюм',
    'Toy Joy',
    'NMC',
    'Dream Toys',
    'Tonga',
    'Sexus Glass',
    'Fleshlight',
    'Anal Jewelry Plug',
    'Подиум',
    'FUN / ULTRA ZONE',
    'Lelo',
    'Sextoy 2011',
    'Holiday Exclusive',
    'FlirtOn',
    'Pjur',
    'Hustler',
    'Sexus Funny Five',
    'MyWorld - DIVA',
    'Waterglide',
    'SoftLine',
    'Shirley of Hollywood',
    'Natural touch',
    'Swiss navy',
    'Bristols SIX',
    'Shiatsu',
    'HOT',
    'Candy Girl',
    'OVO',
    'Odeco',
    'Sexus Lubricant',
    'Masculan',
    'Jopen',
    'Jes Extender',
    'Male Edge',
    'DIOGOL',
    'Shunga',
    'Lux Fetish',
    'Aneros',
    'Ann Devine',
    'Glas',
    'Hustler Lingerie',
    'Electric Lingerie',
    'Luxe',
    'Domino',
    'Sagami',
    'Temptlife',
    'Le Frivole',
    'Dupu',
    'Shots Media BV',
    'Sexus Men',
    'Fun Factory',
    'Qvibry',
    'Big Teaze Toys',
    'Casmir',
    'Avanua',
    'Svakom',
    'Ero',
    'Livia Corsetti',
    'X-Play',
    'JimmyJane',
    'KOKOS',
    'Baci',
    'Chisa',
    'Tantus',
    'B Swish',
    'Supreme Nature',
    'We-vibe',
    'Wild Lust',
    'Howells',
    'ZINI',
    'ENVY',
    'NS Novelties',
    'Fifty Shades of Grey',
    'Sqweel',
    'Издательский Дом ЭКСМО',
    'System JO',
    'Bathmate',
    'Nexus Range',
    'MyStim',
    'Tenga',
    'KeepBurning',
    'Rocks-Off',
    'Tickler',
    'Orion',
    'ID lubricants',
    'Lovetoy',
    'Swede',
    'Viamax',
    'Steel Power Tools',
    'Scala',
    'Beastly',
    'Joy Division',
    'Roxana',
    'Sitabella',
    'Pink Lipstick',
    'Sportsheets и Sex&Mischief',
    'Candy Boy',
    'JuJu',
    'Erokay',
    'БДСМ арсенал',
    'R&S GmbH',
    'Lubry GmbH',
    'Fun Toys',
    'Leg Avenue',
    'Maison Close',
    'Seven`til Midnight',
    'Coquette Int',
    'BlueLine',
    'Womanizer',
    'Wicked',
    'Obsessive',
    'Lola Lingerie',
    'Erotic Fantasy',
    'Hollywood Curves',
    'XR Brands',
    'Allure Lingerie',
    'Hitachi Magic',
    'LOVETOY (А-Полимер)',
    'Джага-Джага',
    'Screaming O',
    'Mae B',
    'Passion',
    'Lola toys',
    'Toyz4lovers',
    'Forplay Lingerie',
    'Anasteisha',
    'BMS Factory',
    'X-TOY',
    'Kanikule',
    'Revel Body',
    'VNEW',
    'Distra',
    'O`VIE',
    'Magic Motion',
    'SPRING',
    'Gartelle',
    'JoyDrops',
    'Bijoux Indiscrets',
    'Hustler Shoes',
    'Anais',
    'LuxLab',
    'Electric Shoes',
    'Classic Erotica',
    'Сима-Ленд',
    'Elisex',
    'Xise',
    'O-Products',
    'Closet Collection',
    'Sharon Sloane',
    'PicoBong',
    'Chilirose',
    'Hot Secret',
    'Nalone',
    'Demoniq',
    'Lovense',
    'Okamoto',
    'Ganzo',
    'MensDreams',
    'Be Wicked',
    'LoversPremium',
    'Rene Rofe',
    'Blush Novelties',
    'Ree',
    'Gox',
    'Dear girl',
    'Cocolicious',
    'Unilatex',
    'Элементы питания',
    '4sexdreaM',
    'Loving World',
    'ImToy',
    'Cloneboy',
    'Adrien Lastic',
    'Kiss me',
    'Kiiroo',
    'Lubrix',
    'RUF',
    'Durex',
    'Feelztoys',
    'XLsucker',
    'Taboom',
    'Pheromax',
    'Media Craft Inc.',
    'Autoblow',
    'Nomi Tang',
    'Пикантные штучки',
    'Crave',
    'Energizer',
    'Veneziana',
    'Идель Групп',
    'Eroticon',
    'ВИС',
    'Lexy',
    'Tokio Design',
    'Satisfyer',
    'Milan Arzneimittel GmbH',
    'Swoon',
    'Fever',
    'Me Seduce',
    'House of steel',
    'HOT planet',
    'Softex',
    'Liberator',
    'b-Vibe',
    'Erotist Lubricants',
    'The Rabbit Company',
    'Ёska',
    'Rebelts',
    'Leco',
    'Mister B',
    'Tokidoki',
    'Erotist',
    'VR BOX',
    'Erolution',
    'WANAME',
    'Dolce Piccante Lingerie',
    'Lolitta',
    'RestArt'
  ];
  price_range: string[] = [
    '- 3000',
    '- 10000',
    '- 25000',
  ];
  error: boolean;

  category: string;
  brand: string;
  price1: string;
  price2: string;

  getData(_category: string, _brand: string, _price1: string, _price2: string) {
    this.dataService.search(_category, _brand, _price1, _price2)
      .subscribe(
        res => { this.products = res; },
        err => { alert(err); },
        () => {
          if (this.products.length != 0) {
            console.log('Приняли данные: ');
            console.log(this.products);
            this.error = false;
            console.log('Нет ошибки поиска в DB');
          } else {
            console.log('Нет совпадений');
            this.error = true;
            console.log('Ошибка поиска в Db');
          }
        }
      );
  }

  addToCart(_product) {
    this.cartService.addCartProducts(_product);
  }

  constructor(private dataService: DataService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {

    //Для параметров запроса(выбор по параметрам)
    this.route
      .queryParams
      .subscribe(params => {
        this.category = params['category'];
        this.brand = params['brand'];
        this.price1 = params['price1'];
        this.price2 = params['price2'];
        this.getData(this.category, this.brand, this.price1, this.price2);
      });

    //Для обычных параметров(выбор категории)
    this.route.params.subscribe(params => this.category = params['category']);
  }

}

