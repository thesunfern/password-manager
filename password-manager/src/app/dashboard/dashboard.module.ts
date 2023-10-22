import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [MainComponent],
    imports: [CommonModule, DashboardRoutingModule, TableModule],
})
export class DashboardModule {}
