/**
 * Created by igordemo on 10/17/17.
 */
import { Subject } from 'rxjs';
import { Prompt } from './prompt.model';

export class PromptService {
  private subject: Subject<any> = new Subject();

  constructor() { }

  public getPrompt() {
    return this.subject;
  }

  public open(message: string, accept: Function, decline: Function = () => {}, id: any = null) {
    this.subject.next(<Prompt>{id: id, message: message, accept: accept, decline: decline});
  }
}
