import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../Classes/Task';

@Injectable()
export class InterfaceProvider {
 
    constructor(private http: HttpClient) {
 
    }

    postUser(firstname: string, lastname: string) : Observable<any> {         
      let body = new FormData();
      body.append('firstname', firstname);
      body.append('lastname', lastname);

      return this.http.post('https://www.alexandreborgo.fr/api/post/user', body);
    }

    postTask(task: Task) : Observable<any> {         
      let body = new FormData();
      body.append('title', task.title);
      body.append('description', task.description);
      body.append('date', task.date);
      body.append('time', task.time);
      body.append('priority', task.priority);
      body.append('icon', task.icon);
      body.append('userId', task.userId);

      return this.http.post('https://www.alexandreborgo.fr/api/post/task', body);
    }

    upTask(task: Task) : Observable<any> {         
      let body = new FormData();
      body.append('title', task.title);
      body.append('description', task.description);
      body.append('date', task.date);
      body.append('time', task.time);
      body.append('priority', task.priority);
      body.append('icon', task.icon);
      body.append('userId', task.userId);
      body.append('id', task.id);

      return this.http.post('https://www.alexandreborgo.fr/api/up/task', body);
    }

    getUsers() : Observable<any> {
      return this.http.post('https://www.alexandreborgo.fr/api/get/users', {});
    }  

    getUser(id: string) : Observable<any> {   
      let body = new FormData();
      body.append('id', id);

      return this.http.post('https://www.alexandreborgo.fr/api/get/user', body);
    }   

    getTasks() : Observable<any> {
      return this.http.post('https://www.alexandreborgo.fr/api/get/tasks', {});
    }

    delTask(id: string) : Observable<any> {
      let body = new FormData();
      body.append('id', id);

      return this.http.post('https://www.alexandreborgo.fr/api/del/task', body);
    }
 
}