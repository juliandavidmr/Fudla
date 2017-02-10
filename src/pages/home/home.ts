import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Users } from '../../providers/users'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public list: any = [];

  constructor(
    public navCtrl: NavController,
    users: Users
  ) {
    users.getListUser().then(results => {
      console.log(results);
      this.list = results;
    }).catch(err => {
      console.log(err);
    });
  }

}
