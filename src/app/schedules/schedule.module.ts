import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { TransformationService } from './services/transformation.service';
import { ApiService } from './services/api.service';
import { ScheduleSearchComponent } from './components/schedule-search/schedule-search.component';
import { StoreService } from './services/store.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [ScheduleSearchComponent, FilterPipe],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TransformationService, ApiService, StoreService],
})
export class ScheduleModule {}
