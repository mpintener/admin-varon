import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { LoaderService } from '../services/loader.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AdminService, LoaderService]
})

export class LoginComponent implements OnInit{
	public admin: Admin;
	public identity;
	public token;
	public status = 1;
	public objLoaderStatus: boolean;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: AdminService,
		private _loaderService: LoaderService
		){
		this.admin = new Admin('','','');
		this.objLoaderStatus = false;
	}

	ngOnInit(){
		console.log(this._userService.getToken());
		console.log(this._userService.getAdmin());
		this._loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
	}

	onSubmit(){
		this.status = 1;
		this._loaderService.displayLoader(true);
		this._userService.login(this.admin).subscribe(
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