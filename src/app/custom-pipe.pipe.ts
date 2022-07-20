import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class Custom implements PipeTransform {

  transform(value: string , num : number): unknown {
    if(value.length> num){
       const val:string = value.slice(0 , num)
      return `${val}...`;
    }
    return value;
  }

}




export class TranckPipe implements PipeTransform {

  transform(value: string , num : number): unknown {
    if(value.length> num){
       const val:string = value.slice(0 , num)
      return `${val}...`;
    }
    return value;
  }

}
