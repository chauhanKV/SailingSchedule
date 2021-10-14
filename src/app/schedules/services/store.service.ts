import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TransformationService } from './transformation.service';
import { CountryCodes } from '../modals/scheduleModals';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable()
export class StoreService {
  // private subject = new BehaviorSubject<CountryCodes>({ countries: undefined });
  // private countries$: Observable<CountryCodes> = this.subject.asObservable();

  private subject = new BehaviorSubject<any>([]);
  private countries$: Observable<any> = this.subject.asObservable();

  constructor(
    private mappingService: TransformationService,
    private api: ApiService
  ) {
    this.loadCountries();
  }

  private loadCountries() {
    this.api.getCountryCodes().subscribe(
      (response) => {
        if (response) {
          this.subject.next(response);
        }
      },
      (error) => {
        this.subject.next(null);
        // this.subject.next({ countries: undefined });
      },
      () => {}
    );
  }

  getCountriesCodes$() {
    return this.countries$;
  }

  // private loadCountries() {
  //   this.mappingService.mapCountryCodes().subscribe(
  //     (response) => {
  //       if (response) {
  //         this.subject.next(response);
  //       }
  //     },
  //     (error) => {
  //       this.subject.next({ countries: undefined });
  //     },
  //     () => {}
  //   );
  // }

  // getCountriesCodes$() {
  //   return this.countries$.pipe(
  //     map((response) => {
  //       return response.countries;
  //     })
  //   );
  // }
}
