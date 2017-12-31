import { Component } from '@angular/core';
import { NavController, NavParams   } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { ViewPage } from '../view/view';
import { User } from '../../Classes/User';
import { Task } from '../../Classes/Task';

import { InterfaceProvider } from '../../providers/interface/interface';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  task: Task;
  users: Array<User>;
  userId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private api_interface: InterfaceProvider) {                
    
    this.users = new Array<User>();
    this.task = navParams.get('task');
    
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

  editTask() {
    if(this.task.title != '' && this.task.userId != null) {
        this.api_interface.upTask(this.task).subscribe(
          data => {
            this.toastCtrl.create({
              message: 'Task eddited !',
              duration: 4000,
              position: 'bottom'
            }).present();
          },
          error => {
            console.log(error);
          }
        );
      }
      else {
         this.toastCtrl.create({
          message: 'Title of the task and the user can\'t be empty !',
          duration: 4000,
          position: 'bottom'
        }).present();
      }

   this.navCtrl.setRoot(ViewPage, {task: this.task});
  }
}
