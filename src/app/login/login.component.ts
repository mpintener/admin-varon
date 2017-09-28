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
		private _adminService: AdminService,
		private _loaderService: LoaderService
		){
		this.admin = new Admin('','','');
		this.objLoaderStatus = false;
	}

	ngOnInit(){
		this._loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
	}

	onSubmit(){
		this.status = 1;
		this._loaderService.displayLoader(true);
		this._adminService.login(this.admin).subscribe(
			response => {
				this._loaderService.displayLoader(false);
				console.log(response);
				if (response.data === 'admin not found') {
					this.status = 0;
				} else {
					localStorage.setItem('admin', JSON.stringify(response.data.info));
					localStorage.setItem('token', JSON.stringify(response.data.token));
					this._router.navigate(['/home']);
				}
			}, error => {
				this._loaderService.displayLoader(false);
				var errorMessage = <any>error;
				if (errorMessage != null) {
					var body = JSON.parse(error._body);
					this.status = errorMessage;
				}
			}
		);
	}
}