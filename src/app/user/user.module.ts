import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutModule } from '../layout/layout.module';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

@NgModule({
	declarations: [
		UserComponent,
		EditComponent,
		ListComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		LayoutModule,
		UserRoutingModule
	],
	exports: [
		UserComponent,
		EditComponent,
		ListComponent
	],
	providers: []
})
export class UserModule { }
