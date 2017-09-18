import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { LoaderService } from '../services/loader.service';
import { UserService } from '../services/user.service';
import { WineService } from '../services/wine.service';

@Component({
	selector: 'wine',
	templateUrl: './wine.component.html',
	providers: [UserService, LoaderService, WineService]
})

export class WineComponent implements OnInit{
	public user: User;
	public token;
	public wines;
	public objLoaderStatus: boolean;
	public page = 0;
	public cant = 50;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loaderService: LoaderService,
		private _userService: UserService,
		private _wineService: WineService
		){
		this.objLoaderStatus = false;
		this.token = this._userService.getToken();
		this.user = this._userService.getUser();
	}

	ngOnInit(){
		if (this.token == null) {
			this._router.navigate(['/login']);
		} else {
			this._loaderService.loaderStatus.subscribe((val: boolean) => {
	            this.objLoaderStatus = val;
	        });

	        this._wineService.listWines(this.token, this.page, this.cant).subscribe(
				response => {
					console.log(response.status === 'success');
					console.log(response.data);
					if (response.status === 'success') {
						this.wines = response.data;
					} else {
						console.log(response);
					}
				}, error => {
					console.log(<any>error);
				}
			);
		}
	}
}