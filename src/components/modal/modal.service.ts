/**
 * Created by igordemo on 10/17/17.
 */
import { Subject } from 'rxjs';
import { Modal } from './modal.model';

export class ModalService {
  private subject: Subject<any> = new Subject();

  constructor() { }

  public getModal() {
    return this.subject;
  }

  public open(id: any = null) {
    this.subject.next(<Modal>{id: id, isOpen: true});
  }

  public close(id: any = null) {
    this.subject.next(<Modal>{id: id, isOpen: false});
  }
}
