import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public list_cards: any = [];

  constructor(public navCtrl: NavController) {
    this.list_cards = [{
      title: 'Pizza',
      subtitle: '',
      img: 'assets/food/pizza.gif'
    }, {
      title: 'Pollo',
      subtitle: '',
      img: 'assets/food/frito.gif'
    }, {
      title: 'Ponqué',
      subtitle: '',
      img: 'assets/food/ponque.gif'
    }, {
      title: 'Arroz',
      subtitle: '',
      img: 'assets/food/arroz.gif'
    }, {
      title: 'Sopa',
      subtitle: '',
      img: 'assets/food/sopa.gif'
    }, {
      title: 'Helado',
      subtitle: '',
      img: 'assets/food/helado.gif'
    }, {
      title: '',
      subtitle: '',
      img: 'assets/food/acomer.gif'
    }];
  }

}
