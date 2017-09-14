// Importamos los modulos de angualr para poder trabajar con metodos y objetos que provee el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes que voy a utilizar
// import { UserComponent } from './user/user.component';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// defino una constante que va a contener la configuracion de las rutas
const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	// {path: 'users', component: UserComponent},
	// {path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	//{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = []; // para poder carga el provider de las rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // Aca le digo cuáles son las rutas que tiene que cargar
// Cargar las rutas en appModule