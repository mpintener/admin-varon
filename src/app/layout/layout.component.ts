import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	selector: 'layout',
	templateUrl: 'layout.component.html',
	providers: [UserService]
})

export class LayoutComponent{
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
}