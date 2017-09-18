import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { LayoutModule } from './layout/layout.module';

// Para las rutas
import { routing, appRoutingProviders } from './app.routing';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error404.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { WineComponent } from './wine/wine.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		WineComponent,
		LoaderComponent,
		ErrorComponent
	],
	imports: [
		AdminModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		LayoutModule,
		routing,
		UserModule,
		UserRoutingModule,
		AdminRoutingModule
	],
	exports: [
		LoaderComponent,
		LayoutModule
	],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
