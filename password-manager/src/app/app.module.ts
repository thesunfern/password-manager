import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ButtonModule,
        CheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        InputTextModule,
        TooltipModule,
        HttpClientModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        LoginService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
