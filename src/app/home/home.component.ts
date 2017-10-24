import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { AdminService } from '../services/admin.service';
import { UserService } from '../services/user.service';
import { WineService } from '../services/wine.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [ChartService, AdminService, WineService, UserService]
})

export class HomeComponent{
	public title = 'Panel Principal';
	public token;
	public admin;
    public favoriteWines;
    public favoriteWine;
    public totalUsers:number;
    public facebookUsers:number = 0;
    public googleUsers:number = 0;

	constructor(
		private _adminService: AdminService,
		private _chartService: ChartService,
		private _userService: UserService,
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
				var cont;
				this.favoriteWines.forEach((item, index)=> {

				});
				this.favoriteWine = response.data[0].wine;
			}, error => {
			}
		);

		this._userService.listUsers(this.token).subscribe(
			response => {
				this.totalUsers = response.data.length;
				response.data.forEach((item, index)=>{
					if (item.provider === 'facebook') {
						this.facebookUsers+=1;
					} else {
						this.googleUsers+=1;
					}
				});
			}, error => {
				console.log(<any>error);
			}
		);
	}
}