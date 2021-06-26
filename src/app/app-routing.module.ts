import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NetflixLoginComponent } from './pages/netflix-login/netflix-login.component';
import { NetflixHomeComponent } from './pages/netflix-home/netflix-home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'netflix-login',
        component: NetflixLoginComponent
    },
    {
        path: 'netflix-home',
        component: NetflixHomeComponent
    },
    // {
    //     path: '**',
    //     redirectTo: ''
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


