/**
 * Created by igordemo on 10/18/17.
 */
import { Subject } from 'rxjs';
import { Loader } from './loader.model';

export class LoaderService {
  private subject: Subject<any> = new Subject();

  constructor() { }

  public getLoader() {
    return this.subject;
  }

  public open(id: any = null) {
    this.subject.next(<Loader>{id: id, isOpen: true});
  }

  public close(id: any = null) {
    this.subject.next(<Loader>{id: id, isOpen: false});
  }
}
