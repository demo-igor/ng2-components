import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMoney'
})
export class CustomMoneyPipe implements PipeTransform {
  transform(value: any): string | null {
    if (value) {
      value = value / 100;
    }

    return value;
  }
}
