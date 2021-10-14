import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-schedule-search',
  templateUrl: './schedule-search.component.html',
  styleUrls: ['./schedule-search.component.css'],
})
export class ScheduleSearchComponent implements OnInit {
  constructor(private apiService: ApiService, public store: StoreService) {}

  schedules: any = null;
  error = false;
  loading = false;
  searchForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
  });

  ngOnInit(): void {}

  search() {
    this.error = false;
    this.loading = true;

    const from: string = this.searchForm.value['from'];
    const to: string = this.searchForm.value['to'];

    if (from === to) {
      this.error = true;
      this.loading = false;
      return;
    }
    this.apiService.getSchedules(from, to).subscribe(
      (response) => {
        if (response) {
          this.schedules = response;
        }
      },
      (error) => {
        this.error = true;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
