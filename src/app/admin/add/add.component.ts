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
		this.adminToAdd = new Admin('','','');
		this.token = this._adminService.getToken();
		this.url = GLOBAL.url;
	}

	onSubmit(){
		this._adminService.addAdmin(this.token, this.adminToAdd).subscribe(
			response => {
				if (response.status === 'success') {
					this._router.navigate(['/admin']);
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}
}
