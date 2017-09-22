import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { AdminService } from '../services/admin.service';
import { WineService } from '../services/wine.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [ChartService, AdminService, WineService]
})

export class HomeComponent{
	public title = 'Panel Principal';
	public token;
	public admin;
    public favoriteWines;

	constructor(
		private _adminService: AdminService,
		private _chartService: ChartService,
		private _wineService: WineService,
		private _router: Router,
		){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
	}

	ngOnInit(){
		if (this.token == null) {
			this._router.navigate(['/login']);
		}

		this._wineService.getFavoriteWines(this.token).subscribe(
			response => {
				this.favoriteWines = response.data;
			}, error => {
				console.log(<any>error);
			}
		);
	}
}