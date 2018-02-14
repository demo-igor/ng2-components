/**
 * Created by igordemo on 11/17/17.
 */
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'capitalizeAll'
})
export class CapitalizeAllPipe implements PipeTransform {

    transform(value: string) {
        if (value) {
          let arr = value.split(' ');
          arr = arr.map((val :string) => {
            return val.charAt(0).toUpperCase() + val.slice(1);
          });
          return arr.join(' ');
        }
        return value;
    }

}
