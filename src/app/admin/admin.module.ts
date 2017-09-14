import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';

@NgModule({
	declarations: [
		UserComponent,
		AdminComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		AdminRoutingModule
	],
	exports: [
		UserComponent,
		AdminComponent,
		HomeComponent
	],
	providers: []
})

export class AdminModule{}