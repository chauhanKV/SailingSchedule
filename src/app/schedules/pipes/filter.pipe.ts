import { Pipe, PipeTransform } from '@angular/core';
import { CountryCodes } from '../modals/scheduleModals';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: string): any {
    return value;
  }
}
