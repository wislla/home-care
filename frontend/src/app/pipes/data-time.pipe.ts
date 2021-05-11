import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dataTime'
})
export class DataTimePipe implements PipeTransform {

  transform(date: string): string {
    if(date !="0000-00-00"){
      let dateOut: moment.Moment = moment(date, "YYYY-MM-DDTHH:mm:ss");
      return dateOut.format("DD/MM/YYYY");
    }
    return "Não informado";
  }

}
