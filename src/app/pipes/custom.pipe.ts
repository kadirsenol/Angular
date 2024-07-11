import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, index : number , hane : number): string {
    return value.slice(index,hane);
  }

}
