
export class Task {
  public id: string;
  public title: string;
  public description: string;
  public date: string;
  public time: string;
  public priority: string;
  public icon: string;
  public userId: string;

  public constructor (id: string, title: string, description: string,  date: string,  time: string, priority: string, icon: string, userId: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.priority = priority;
    this.icon = icon;
    this.userId = userId;
  }

  toString () {
    return this.title + ' ' + this.description;
  }
}