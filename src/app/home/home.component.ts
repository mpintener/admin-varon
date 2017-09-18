import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [UserService]
})

export class HomeComponent{
	public title = 'Panel Principal';
	public token;
	public user;

	constructor(
		private _userService: UserService,
		private _router: Router,
	){}

	ngOnInit(){
		this.user = this._userService.getUser();
		this.token = this._userService.getToken();
		if (this.token == null) {
			this._router.navigate(['/login']);
		}
	}

	logout(){
		localStorage.clear();
		this.user = null;
		this.token = null;
		this._router.navigate(['/login']);
	}
}