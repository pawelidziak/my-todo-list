/**
 * Created by pawel.idziak on 25.06.2017.
 */

export class Task {
  title: string;
  description: string;
  deadline?: Date;

  constructor(title: string, description: string, deadline?: Date) {
    this.title = title;
    this.description = description;
    this.deadline = deadline || null;
  }
}
