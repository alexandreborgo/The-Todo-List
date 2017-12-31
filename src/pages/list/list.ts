import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewPage } from '../view/view';

import { Task } from '../../Classes/Task';

import { InterfaceProvider } from '../../providers/interface/interface';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  tasks: Array<Task>;

  constructor(public navCtrl: NavController, private api_interface: InterfaceProvider) {
    
    this.tasks = new Array<Task>();
    
    this.api_interface.getTasks().subscribe(
      data => {
        for(var i=0; i < data.length; i++) {
          this.tasks.push(<Task>data[i]);
        }
      },
      error => {
        console.log(error);
      }
    );  
  
  }

  itemView(task) {
    this.navCtrl.push(ViewPage, {task: task});
  }
}
