import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMinusSixHours'
})
export class DateMinusSixHoursPipe implements PipeTransform {

  transform(value: any): any {
    const date = new Date(value);
    date.setHours(date.getHours() + 6);
    return date.toLocaleString();
  }

}