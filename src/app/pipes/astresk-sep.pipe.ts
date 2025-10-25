import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'astreskSep'
})
export class AstreskSepPipe implements PipeTransform {

  transform(value: string): string {
    //  return value.split("").join('*');
   //or
     let result =value.split("").join('*');
     return result
  }

}
