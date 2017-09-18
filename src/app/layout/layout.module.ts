import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { LayoutComponent } from '../layout/layout.component';

@NgModule({
	declarations: [
		LayoutComponent
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		RouterModule
	],
	exports: [
		LayoutComponent
	],
	providers: []
})
export class LayoutModule { }
