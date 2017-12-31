import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User } from '../../Classes/User';
import { InterfaceProvider } from '../../providers/interface/interface';

@Component({
  selector: 'page-addUser',
  templateUrl: 'addUser.html'
})
export class AddUserPage {

  public user: User;
  public test: Observable<any>;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private api_interface: InterfaceProvider) {
    this.user = new User('', '');
  }  

  addUser() {
    if( this.user.firstname != null && this.user.lastname != null && this.user.firstname != '' && this.user.lastname != '') {      
     this.api_interface.postUser(this.user.firstname, this.user.lastname).subscribe(
        data => {
          if(data.result == 'error')
            this.toastCtrl.create({
              message: 'This user is already register !',
              duration: 4000,
              position: 'bottom'
            }).present();
          else 
            this.toastCtrl.create({
              message: 'The new user has been registered !',
              duration: 4000,
              position: 'bottom'
            }).present();
        },
        error => {
            this.toastCtrl.create({
              message: 'Communication error with the database, try again later.',
              duration: 4000,
              position: 'bottom'
            }).present();
        }
      );
    } else {      
      this.toastCtrl.create({
        message: 'Fistname or lastname can\'t be empty !',
        duration: 4000,
        position: 'bottom'
      }).present();
    }    
  }  
}
