import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService]
})

export class LoginComponent implements OnInit{
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

	ngOnInit(){
		console.log(this._userService.getToken());
		console.log(this._userService.getUser());
	}

	onSubmit(){
		this.status = 1;
		this._userService.login(this.user).subscribe(
			response => {
				if (response.data.token == undefined) {
					this.status = 0;
				} else {
					console.log(response.data);
					localStorage.setItem('user', JSON.stringify(response.data.info));
					localStorage.setItem('token', JSON.stringify(response.data.token));
					this._router.navigate(['/admin']);
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