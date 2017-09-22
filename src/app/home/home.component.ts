import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [ChartService, AdminService]
})

export class HomeComponent{
	public title = 'Panel Principal';
	public token;
	public admin;
	public chartData;
	public message: any;
    public subscription: Subscription;

	constructor(
		private _adminService: AdminService,
		private _chartService: ChartService,
		private _router: Router,
		){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
	}

	ngOnInit(){
		if (this.token == null) {
			this._router.navigate(['/login']);
		}
	}
}