import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	providers: [UserService]
})
export class AdminComponent implements OnInit{
	title = 'admin';
	public user;
	public token;

	constructor(
		private _userService: UserService,
		private _router: Router,
	){}

	ngOnInit(){
		this.user = this._userService.getUser();
		this.token = this._userService.getToken();	
	}

	logout(){
		localStorage.clear();
		this.user = null;
		this.token = null;
		this._router.navigate(['/login']);
	}

	// comprueba los datos del local storage y ante un csambio, los actualiza
	// ngDoCheck(){
	// 	this.user = this._userService.getUser();
	// 	this.token = this._userService.getToken();
	// }
}
