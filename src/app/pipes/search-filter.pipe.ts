import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(options, args: string): Array<any> {
    return options.filter((option) => option.name.toLowerCase().indexOf((args || '').toLowerCase()) > -1);
  }

}

