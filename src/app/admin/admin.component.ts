import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../services/user.service';

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
		private _userService: UserService
	){}

	ngOnInit(){
		this.user = this._userService.getUser();
		this.token = this._userService.getToken();	
	}

	// comprueba los datos del local storage y ante un csambio, los actualiza
	// ngDoCheck(){
	// 	this.user = this._userService.getUser();
	// 	this.token = this._userService.getToken();
	// }
}
