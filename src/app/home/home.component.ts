import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [AdminService]
})

export class HomeComponent{
	public title = 'Panel Principal';
	public token;
	public admin;

	constructor(
		private _adminService: AdminService,
		private _router: Router,
	){}

	ngOnInit(){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
		if (this.token == null) {
			this._router.navigate(['/login']);
		}
	}

	logout(){
		localStorage.clear();
		this.admin = null;
		this.token = null;
		this._router.navigate(['/login']);
	}
}