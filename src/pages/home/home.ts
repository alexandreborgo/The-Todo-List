import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  
  addPage = AddPage;

  constructor(public navCtrl: NavController) {
  }

  goToAddPage() {
    this.navCtrl.push(AddPage);
  }

}
