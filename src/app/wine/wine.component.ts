import { Component, OnInit } from '@angular/core';
// import { TableData } from './table-data';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Admin } from '../models/admin';
import { LoaderService } from '../services/loader.service';
import { AdminService } from '../services/admin.service';
import { WineService } from '../services/wine.service';

@Component({
	selector: 'wine',
	templateUrl: './wine.component.html',
	providers: [AdminService, LoaderService, WineService]
})

export class WineComponent implements OnInit{
	public admin: Admin;
	public token;
	public wines;
	public objLoaderStatus: boolean;
	public page = 0;
	public cant = 0;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loaderService: LoaderService,
		private _adminService: AdminService,
		private _wineService: WineService
		){
		this.objLoaderStatus = false;
		this.token = this._adminService.getToken();
		this.admin = this._adminService.getAdmin();
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
						this.wines = response.data.wines;
						// this.wines.forEach((item, index) => {
							console.log(this.wines[10].cellar ? 'hola' : 'chau');
						// });
					} else {
						console.log('aca'+response);
					}
				}, error => {
					console.log(<any>error);
				}
				);
		}
	}

}