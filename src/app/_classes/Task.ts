/**
 * Created by pawel.idziak on 25.06.2017.
 */

export class Task {
  private _title: string;
  private _type: string;
  private _color: string;
  private _description?: string;
  private _deadline?: Date;



  constructor(title: string, type: string, color: string, description?: string, deadline?: Date) {
    this._title = title;
    this._type = type;
    this._color = color;
    this._description = description || '';
    this._deadline = deadline || null;
  }

  // toJSON is automatically used by JSON.stringify
  // toJSON(task: Task): TaskJSON {
  //   return {
  //     title: task.title,
  //     type: task.type,
  //     description: task.description,
  //     deadline: task.deadline
  //   };
  // }

  // // fromJSON is used to convert an serialized version
  // // of the User to an instance of the class
  // static fromJSON(json: TaskJSON|string): Task {
  //   if (typeof json === 'string') {
  //     // if it's a string, parse it first
  //     return JSON.parse(json, Task.reviver);
  //   } else {
  //     // create an instance of the User class
  //     const user = Object.create(Task.prototype);
  //     // copy all the fields from the json object
  //     return Object.assign(user, json);
  //   }
  // }
  //
  // // reviver can be passed as the second parameter to JSON.parse
  // // to automatically call User.fromJSON on the resulting value.
  // static reviver(key: string, value: any): any {
  //   return key === '' ? Task.fromJSON(value) : value;
  // }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get deadline(): Date {
    return this._deadline;
  }

  set deadline(value: Date) {
    this._deadline = value;
  }
}

interface TaskJSON {
  title: string;
  type: string;
  description: string;
  deadline: Date;
}
