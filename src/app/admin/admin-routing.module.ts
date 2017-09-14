import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
{
	path: 'admin',
	component: AdminComponent,
	children: [
	{ path: 'home', component: HomeComponent },
	{ path: 'users', component: UserComponent },
	{ path: '', component: HomeComponent }
	]
}	
];

@NgModule({
	imports: [
		RouterModule.forChild(adminRoutes)
	],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
