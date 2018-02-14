/**
 * Created by igordemo on 10/17/17.
 */
import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Input,
  HostListener
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PromptService } from './prompt.service';
import { Prompt } from './prompt.model';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromptComponent implements OnInit, OnDestroy {
  @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      if (ev.keyCode == 27 && this.isOpen) {
        this.onDecline();
      }
    }

  @Input() promptId: any = null;

  public isOpen: boolean = false;
  public message: string = '';
  public callbackAccept: Function;
  public callbackDecline: Function;

  public subscription: Subscription;

  constructor(
    private promptService: PromptService
  ) { }

  ngOnInit() {
    this.subscription = this.promptService.getPrompt().subscribe((prompt:Prompt) => {
      if ((prompt.id || this.promptId) && prompt.id !== this.promptId) {
        return;
      }

      this.message = prompt.message;
      this.callbackAccept = prompt.accept;
      this.callbackDecline = prompt.decline;
      this.isOpen = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private close() {
    this.isOpen = false;
    this.message = '';
    this.callbackAccept = () => {};
    this.callbackDecline = () => {};
  }

  public onAccept() {
    this.callbackAccept();
    this.close();
  }

  public onDecline() {
    this.callbackDecline();
    this.close();
  }

  public onClose($event: any) {
    if ($event.target.classList.value.indexOf('modal') !== -1) {
      this.close();
    }
  }
}
