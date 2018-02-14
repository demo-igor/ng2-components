/**
 * Created by igordemo on 10/17/17.
 */
import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  ComponentRef,
  HostListener
} from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { Modal } from './modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      if (ev.keyCode == 27 && this.isOpen) {
        this.close();
      }
    }

  @ViewChild ('modalContentRef', { read: ViewContainerRef }) modalContentRef: ViewContainerRef;

  @Input() modalId: any = null;
  @Input() modalType: string = '';
  @Input() modalClose: boolean = true;
  @Input() isOpen: boolean = false;
  @Input() set modalContent(content: any) {
    this.modalContentRef.clear();
    if (content) {
      if (content instanceof ComponentRef) {
        this.modalContentRef.insert(content.hostView);
      } else if (content instanceof TemplateRef) {
        this.modalContentRef.createEmbeddedView(content);
      }
    }
  }

  @Output() isOpened: EventEmitter<any> = new EventEmitter();
  @Output() isClosed: EventEmitter<any> = new EventEmitter();

  private subscription: Subscription;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.subscription = this.modalService.getModal().subscribe((modal:Modal) => {
      if ((modal.id || this.modalId) && modal.id !== this.modalId) {
        return;
      }

      if (modal.isOpen) {
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
    this.isOpened.emit(this.modalId);
  }

  public close() {
    this.isOpen = false;
    this.isClosed.emit(this.modalId);
  }

  public onClose() {
    this.close();
  }
}
