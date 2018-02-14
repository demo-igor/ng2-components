/**
 * Created by igordemo on 11/17/17.
 */
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: string) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}
