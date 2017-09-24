import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutModule } from './layout/layout.module';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
// Para las rutas
import { routing, appRoutingProviders } from './app.routing';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

import { ChartService } from './services/chart.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error404.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LineChartComponent } from './charts/line/line-chart.component';
import { DonutChartComponent } from './charts/donut/donut.component';
import { LoginComponent } from './login/login.component';
import { WineComponent } from './wine/wine.component';

@NgModule({
	declarations: [
		AppComponent,
		DonutChartComponent,
		LoginComponent,
		LineChartComponent,
		HomeComponent,
		WineComponent,
		LoaderComponent,
		ErrorComponent
	],
	imports: [
		AdminModule,
		BrowserModule,
		ChartsModule,
		FormsModule,
		HttpModule,
		LayoutModule,
		routing,
		UserModule,
		UserRoutingModule,
		AdminRoutingModule
	],
	exports: [
		ChartsModule,
		DonutChartComponent,
		LoaderComponent,
		LineChartComponent,
		LayoutModule
	],
	providers: [appRoutingProviders, ChartService],
	bootstrap: [AppComponent]
})
export class AppModule { }
