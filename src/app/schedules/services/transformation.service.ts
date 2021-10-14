import { Injectable } from '@angular/core';
import { CountryCodes } from '../modals/scheduleModals';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class TransformationService {
  constructor(private api: ApiService) {}

  mapCountryCodes(): Observable<CountryCodes> {
    return this.api.getCountryCodes().pipe(
      map((response: any) => {
        const countries: CountryCodes = Object.assign(
          {},
          ...response.map((s: any) => ({ [s.name]: s.code }))
        );
        return countries;
      })
    );
  }
}
