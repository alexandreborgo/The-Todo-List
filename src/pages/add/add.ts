import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { User } from '../../Classes/User';
import { Task } from '../../Classes/Task';
import { InterfaceProvider } from '../../providers/interface/interface';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  public task: Task;
  users: Array<User>;
  userId: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private api_interface: InterfaceProvider) {                
    
    this.users = new Array<User>();
    this.task = new Task('', '', '', '2018-01-01', '10:00', '2', '', null);
    
    this.api_interface.getUsers().subscribe(
      data => {
        for(var i=0; i < data.length; i++) {
          this.users.push(<User>data[i]);
        }
      },
      error => {
        console.log(error);
      }
    );  
  }

  addTask() {
    if(this.task.title != '' && this.task.userId != null) {
      this.api_interface.postTask(this.task).subscribe(
        data => {
          this.toastCtrl.create({
            message: 'Task added !',
            duration: 4000,
            position: 'bottom'
          }).present();
        },
        error => {
          console.log(error);
        }
      );
      this.navCtrl.setRoot(ListPage);
    }
    else {
       this.toastCtrl.create({
        message: 'Title of the task and the user can\'t be empty !',
        duration: 4000,
        position: 'bottom'
      }).present();
    }
  }
}
