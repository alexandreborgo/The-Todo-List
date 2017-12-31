import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { ListPage } from '../../pages/list/list';
import { EditPage } from '../../pages/edit/edit';
import { ToastController } from 'ionic-angular';

import { Task } from '../../Classes/Task';
import { InterfaceProvider } from '../../providers/interface/interface';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

  task: Task;
  user: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,  private api_interface: InterfaceProvider, public actionSheetCtrl: ActionSheetController) {

    this.task = navParams.get('task');
    this.user = "Loading..."
    
    this.api_interface.getUser(this.task.userId).subscribe(
      data => {
       this.user = data.firstname + ' ' + data.lastname;
      },
      error => {
        console.log(error);
      }
    );  
  }

  delete() {
    this.api_interface.delTask(this.task.id).subscribe(
      data => {
        this.toastCtrl.create({
          message: 'The task has been deleted',
          duration: 4000,
          position: 'bottom'
        }).present();
        this.navCtrl.setRoot(ListPage);
      },
      error => {
        console.log(error);
      }
    );  
  }

  edit() {
    
    this.navCtrl.setRoot(EditPage, {task: this.task});
  }
}
