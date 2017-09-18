// Importamos los modulos de angualr para poder trabajar con metodos y objetos que provee el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes que voy a utilizar
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './pages/error404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WineComponent } from './wine/wine.component';

// defino una constante que va a contener la configuracion de las rutas
const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	// {path: '**', component: ErrorComponent},
	{path: 'notfound', component: ErrorComponent},
	{path: 'user', component: UserComponent},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'wine', component: WineComponent},
	{path: 'admin', component: AdminComponent}
];

export const appRoutingProviders: any[] = []; // para poder carga el provider de las rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // Aca le digo cuáles son las rutas que tiene que cargar
// Cargar las rutas en appModule