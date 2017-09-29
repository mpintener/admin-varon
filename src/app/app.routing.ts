// Importamos los modulos de angualr para poder trabajar con metodos y objetos que provee el router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes que voy a utilizar
import { ErrorComponent } from './pages/error404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin/add/add.component';
import { AdminListComponent } from './admin/list/list.component';
import { AdminEditComponent } from './admin/edit/edit.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/edit/edit.component';
import { UserListComponent } from './user/list/list.component';
import { WineComponent } from './wine/wine.component';


export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'user',
		component: UserComponent,
		data: {
			title: 'Detalle'
		},
		children: [
			{
				path: '',
				component: UserListComponent,
				data: {
					title: 'Detalle'
				}
			},
			{
				path: 'edit/:id',
				component: UserEditComponent,
				data: {
					title: 'Detalle'
				}
			},
		]
	},
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: AdminListComponent
			},
			{
				path: 'edit/:id',
				component: AdminEditComponent
			},
			{
				path: 'add',
				component: AdminAddComponent
			},
		]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'wine',
		component: WineComponent
	},
	{
		path: '**',
		component: ErrorComponent
	}
]
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
