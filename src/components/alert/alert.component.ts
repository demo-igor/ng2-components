/** Created by igordemo on 10/14/17. ...*/
import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './alert.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() alertId: any = null;

  public subscription: Subscription;
  public alerts: Array<Alert> = [];

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert().subscribe((alert:Alert) => {
      if(!alert) {
        this.alerts = [];
        return;
      }

      if ((alert.id || this.alertId) && this.alertId !== alert.id) {
        return;
      }

      this.alerts.push(alert);

      if (alert.hide) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });
  }

  ngOnDestroy() {
    this.alerts = [];
    this.subscription.unsubscribe();
  }

  private removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  public alertCss(type: AlertType) {
    switch (type) {
      case AlertType.Success:
        return 'success';
      case AlertType.Error:
        return 'alert';
      case AlertType.Info:
        return 'primary';
      case AlertType.Warning:
        return 'warning';
      default:
        return 'secondary';
    }
  }
}
