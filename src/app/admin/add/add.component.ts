import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { Admin } from '../../models/admin';
import { AdminService } from '../../services/admin.service';


@Component({
	selector: 'add-admin',
	templateUrl: './add.component.html',
	providers: [AdminService]
})
export class AddComponent{
	public title = 'Agregar Administrador';
	public user: Admin;
	public adminToAdd: Admin;
	public token;
	public url;
	public id;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _adminService: AdminService
	){
		this.user = new Admin('','','');
		this.token = this._adminService.getAdmin();
		this.url = GLOBAL.url;
	}

	onSubmit(){
		
	}
}
