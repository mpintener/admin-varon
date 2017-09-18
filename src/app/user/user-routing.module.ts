import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { AdminRoutingModule } from './admin/admin-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user.component';

// defino una constante que va a contener la configuracion de las rutas
const userRoutes: Routes = [
	{
		path: 'user',
		component: UserComponent,
		children: [
			{ path: 'list', component: ListComponent },
			{ path: 'edit/:id', component: EditComponent },
			{ path: '', component: ListComponent },
			{ path: '**', component: ListComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(userRoutes)
	],
	exports: [
		RouterModule
	]
})
export class UserRoutingModule { }
