import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { Admin } from '../../models/admin';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';


@Component({
	selector: 'edit-admin',
	templateUrl: './edit.component.html',
	providers: [UserService]
})
export class EditComponent implements OnInit{
	public admin: Admin;
	public adminToEdit: Admin;
	public token;
	public url;
	public id;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _adminService: AdminService
	){
		this.url = GLOBAL.url;
		this.adminToEdit = new Admin('','','');
	}

	ngOnInit(){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
		this._route.params.forEach((params: Params) => {
			this.id = params['id'];
		});

		this._adminService.getAdminToEdit(this.token, this.id).subscribe(
			response => {
				if (response.status === 'success') {
					this.adminToEdit = response.data;
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}

	onSubmit(){
		console.log(this.adminToEdit);
		this._adminService.updateAdmin(this.token, this.id, this.adminToEdit).subscribe(
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
