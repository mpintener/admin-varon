import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { Admin } from '../../models/admin';
import { AdminService } from '../../services/admin.service';

@Component({
	selector: 'list-admin',
	templateUrl: './list.component.html',
	providers: [AdminService]
})
export class ListComponent implements OnInit{
	public admin: Admin;
	public admins: Admin[];
	public token;
	public url;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _adminService: AdminService
	){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit(){
		this.getAll();
	}

	delete(id){
		console.log(id);
		this._adminService.deleteAdmin(this.token, id).subscribe(
			response => {
				console.log(response);
				if (response.status === 'success') {
					this.getAll();
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}

	getAll(){
		this._adminService.listAdmins(this.token).subscribe(
			response => {
				if (response.status === 'success') {
					this.admins = response.data;
				} else {
					console.log(response);
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}
}
