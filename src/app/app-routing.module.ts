import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { CreatActivityComponent } from './creat-activity/creat-activity.component';
import { ActivityComponent } from './activity/activity.component';
import { TemplateComponent } from './demo/components/template/template.component';

        
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            {
                path: 'home', component: AppLayoutComponent,
                children: [
                    { path: '', component: TemplateComponent },
                    { path: 'Activity', component: ActivityComponent },
                     { path: 'CreatActivity', component: CreatActivityComponent }
           
        ]
    },
    { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'login', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule) },

     { path: 'notfound', component: NotfoundComponent },
     { path: '**', redirectTo: '/notfound' },
        ], 


        { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
