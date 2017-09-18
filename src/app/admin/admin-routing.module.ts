import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin.component';
import { EditComponent } from './edit/edit.component';
import { LayoutComponent } from '../layout/layout.component';
import { ListComponent } from './list/list.component';

const adminRoutes: Routes = [
{
	path: 'admin',
	component: AdminComponent,
	children: [
			{ path: 'add', component: AddComponent },
			{ path: 'edit/:id', component: EditComponent },
			{ path: 'list', component: ListComponent },
			{ path: '', component: ListComponent },
			{ path: '**', component: ListComponent }
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
