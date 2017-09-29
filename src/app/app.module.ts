import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';

// Para las rutas
import { AppRoutingModule } from './app.routing';
import { ChartService } from './services/chart.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error404.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LineChartComponent } from './charts/line/line-chart.component';
import { DonutChartComponent } from './charts/donut/donut.component';
import { LoginComponent } from './login/login.component';
import { WineComponent } from './wine/wine.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/list/list.component';
import { UserEditComponent } from './user/edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin/edit/edit.component';
import { AdminAddComponent } from './admin/add/add.component';
import { AdminListComponent } from './admin/list/list.component';

@NgModule({
	declarations: [
		AppComponent,
		AdminComponent,
		AdminEditComponent,
		AdminAddComponent,
		AdminListComponent,
		DonutChartComponent,
		LoginComponent,
		LineChartComponent,
		HomeComponent,
		WineComponent,
		LoaderComponent,
		ErrorComponent,
		UserComponent,
		UserListComponent,
		UserEditComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		ChartsModule,
		FormsModule,
		HttpModule,
		LayoutModule
	],
	exports: [
		ChartsModule,
		DonutChartComponent,
		LoaderComponent,
		LineChartComponent,
		LayoutModule
	],
	providers: [{
	    provide: LocationStrategy,
	    useClass: HashLocationStrategy
	  }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
