import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';

import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

@NgModule({
	declarations: [
		AddComponent,
		AdminComponent,
		EditComponent,
		ListComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		LayoutModule,
		AdminRoutingModule
	],
	exports: [
		AddComponent,
		AdminComponent,
		EditComponent,
		ListComponent
	],
	providers: []
})
export class AdminModule { }
