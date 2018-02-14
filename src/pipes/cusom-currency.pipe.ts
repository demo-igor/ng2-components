import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe extends DecimalPipe implements PipeTransform {
  transform(value: any, digits?: string): string | null {
    let result = super.transform(value, digits);

    if (result) {
      result = result.replace(/(,|\.)/g, (val) => { return val == ',' ? '.' : ','; });
    }

    return result;
  }
}
