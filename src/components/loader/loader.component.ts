/**
 * Created by igordemo on 10/18/17.
 */
import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { LoaderService } from './loader.service';
import { Loader } from './loader.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() loaderId: any = null;
  @Input() isOpen: boolean = false;

  @Output() isOpened: EventEmitter<any> = new EventEmitter();
  @Output() isClosed: EventEmitter<any> = new EventEmitter();

  private subscription: Subscription;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.getLoader().subscribe((loader:Loader) => {
      if ((loader.id || this.loaderId) && loader.id !== this.loaderId) {
        return;
      }

      if (loader.isOpen) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public open() {
    this.isOpen = true;
    this.isOpened.emit(this.loaderId);
  }

  public close() {
    this.isOpen = false;
    this.isClosed.emit(this.loaderId);
  }
}
