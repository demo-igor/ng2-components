import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert.model';

@Injectable()
export class AlertService {
  private subject: Subject<any> = new Subject();

  constructor() { }

  private alert(id: any, type: AlertType, message: string, hide: boolean) {
    this.subject.next(<Alert>{id: id, type: type, message: message, hide: hide});
  }

  public getAlert() {
    return this.subject;
  }

  public success(message: string, {id = null, hide = false}: {id?: any, hide?: boolean} = {}) {
    this.alert(id, AlertType.Success, message, hide);
  }

  public error(message: string, {id = null, hide = false}: {id?: any, hide?: boolean} = {}) {
    this.alert(id, AlertType.Error, message, hide);
  }

  public info(message: string, {id = null, hide = false}: {id?: any, hide?: boolean} = {}) {
    this.alert(id, AlertType.Info, message, hide);
  }

  public warning(message: string, {id = null, hide = false}: {id?: any, hide?: boolean} = {}) {
    this.alert(id, AlertType.Warning, message, hide);
  }

  public clear() {
    this.subject.next(null);
  }
}
