import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getSchedules(source: string, destination: string) {
    return this.http.get('https://apitest.ecuworldwide.com/schedules', {
      params: { from: source, to: destination },
      responseType: 'json',
    });
  }

  getCountryCodes() {
    return this.http.get('https://apitest.ecuworldwide.com/codes/countries', {
      responseType: 'json',
    });
  }

  // getLocations() {
  //   return this.http.get('https://apitest.ecuworldwide.com/codes/locations', {
  //     responseType: 'json',
  //   });
  // }
}
