import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService]
})

export class LoginComponent{
	public user: User;
	public identity;
	public token;
	public status;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
		){
		this.user = new User('','','');
	}

	onSubmit(){
		this.status = 1;
		this._userService.login(this.user).subscribe(
			response => {
				if (response.token) {
					console.log(response.data.token);
					this.token = response.data.token;
				} else {
					this.status = 0;
				}
			}, error => {
				console.log(error);
				var errorMessage = <any>error;

				if (errorMessage != null) {
					var body = JSON.parse(error._body);
					this.status = errorMessage;
				}
			}
		);
	}
}