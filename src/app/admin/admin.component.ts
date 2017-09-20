import { Component, OnInit, DoCheck } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	providers: [AdminService]
})
export class AdminComponent implements OnInit{
	title = 'admin';
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

	// comprueba los datos del local storage y ante un csambio, los actualiza
	// ngDoCheck(){
	// 	this.user = this._userService.getUser();
	// 	this.token = this._userService.getToken();
	// }
}
