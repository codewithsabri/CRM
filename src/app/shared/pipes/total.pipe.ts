import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("pipe importé")
    return null;
  }

}
