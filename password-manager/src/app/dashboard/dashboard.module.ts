import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { MenuItemComponent } from './sidebar/menu/menu-item/menu-item.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';

@NgModule({
    declarations: [
        MainComponent,
        DashboardComponent,
        TopbarComponent,
        SidebarComponent,
        MenuComponent,
        MenuItemComponent,
        EditPasswordComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        TableModule,
        ButtonModule,
        FormsModule,
        TooltipModule,
    ],
})
export class DashboardModule {}
