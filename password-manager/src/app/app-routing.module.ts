import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from 'src/guards/auth.guard';
import { loginAuthGuard } from 'src/guards/login-auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: LoginComponent,
                    canActivate: [loginAuthGuard],
                },
                {
                    path: 'dashboard',
                    loadChildren: () =>
                        import('./dashboard/dashboard.module').then(
                            (m) => m.DashboardModule
                        ),
                    canActivate: [authGuard],
                },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
