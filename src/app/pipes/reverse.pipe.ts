import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string)  {
    var ch1: string = "";
    for (let i = ch.length-1; i >-1 ; i--) {
      ch1 += ch[i];      

      IDBKeyRange;
    }
    return ch1;
  }

}
