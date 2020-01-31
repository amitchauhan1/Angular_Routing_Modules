import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'doller'
})
export class DollerPipe implements PipeTransform {

  constructor(private http: HttpClient){

  }
  transform(value: any, ...args: any[]): any {
    // var currencySymbol = '$';
    // this.http.get(`https://coinmill.com/INR_USD.html#USD=2`).subscribe(( data => {
    //   console.log('data',data);
      
    //   doll = data;
    // }));
    return value / 71.49;
  }

}
