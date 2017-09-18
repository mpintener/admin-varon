import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { LoaderService } from '../services/loader.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [UserService, LoaderService]
})

export class LoginComponent implements OnInit{
	public user: User;
	public identity;
	public token;
	public status = 1;
	public objLoaderStatus: boolean;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _loaderService: LoaderService
		){
		this.user = new User('','','','');
		this.objLoaderStatus = false;
	}

	ngOnInit(){
		console.log(this._userService.getToken());
		console.log(this._userService.getUser());
		this._loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
	}

	onSubmit(){
		this.status = 1;
		this._loaderService.displayLoader(true);
		this._userService.login(this.user).subscribe(
			response => {
				this._loaderService.displayLoader(false);
				if (response.data.token == undefined) {
					this.status = 0;
				} else {
					console.log(response.data);
					localStorage.setItem('user', JSON.stringify(response.data.info));
					localStorage.setItem('token', JSON.stringify(response.data.token));
					this._router.navigate(['/home']);
				}
			}, error => {
				this._loaderService.displayLoader(false);
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