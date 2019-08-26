import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: string, args: string[]): string {
    const var1 = value.substr(0,3);
    const var3 = value.substr(13,3);
    let var2 = '';

    for(let i=0;i<10;i++){
      var2 += args;
    }
    return var1 + var2 + var3;
  }

}
