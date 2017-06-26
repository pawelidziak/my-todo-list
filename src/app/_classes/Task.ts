/**
 * Created by pawel.idziak on 25.06.2017.
 */

export class Task {
  private _title: string;
  private _type: string;
  private _color: string;
  private _description?: string;
  private _deadline?: Date;


  constructor(title: string, type: string, description?: string, deadline?: Date) {
    this._title = title;
    this._type = type;
    this._description = description || '';
    this._deadline = deadline || null;
  }


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
