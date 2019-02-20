import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule
  ],
  exports: [
      AlertComponent
  ]
})
export class AlertsModule { }
