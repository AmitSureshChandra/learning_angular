import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, term: any): any {
    if (!term){
        return users
    }

    return users.filter(v => v.name.toLowerCase().includes(term.toLowerCase()))
  }

}
