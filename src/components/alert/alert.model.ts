/**
 * Created by igordemo on 10/15/17.
 */

export class Alert {
  public id: any;
  public type: AlertType;
  public message: string;
  public hide: boolean;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
