import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
	selector: 'layout',
	templateUrl: 'layout.component.html',
	providers: [AdminService]
})

export class LayoutComponent{
	public admin;
	public token;

	constructor(
		private _adminService: AdminService,
		private _router: Router,
		){}

	ngOnInit(){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
	}

	logout(){
		localStorage.clear();
		this.admin = null;
		this.token = null;
		this._router.navigate(['/login']);
	}
}