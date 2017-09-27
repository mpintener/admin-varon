import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';
import { Admin } from '../../models/admin';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';


@Component({
	selector: 'edit-user',
	templateUrl: './edit.component.html',
	providers: [UserService]
})
export class EditComponent implements OnInit{
	public title = 'Agregar usuario';
	public admin: Admin;
	public userToEdit: User;
	public token;
	public url;
	public id;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _adminService: AdminService
	){
		this.userToEdit = new User('','','','');
		this.token = this._adminService.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit(){
		this._route.params.forEach((params: Params) => {
			this.id = params['id'];
		});
		this._userService.getUserToEdit(this.token, this.id).subscribe(
			response => {
				if (response.status === 'success') {
					this.userToEdit = response.data;
				} else {
					console.log(response);
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}

	onSubmit(){
		this._userService.editUser(this.token, this.userToEdit, this.id).subscribe(
			response => {
				if (response.status === 'success') {
					this._router.navigate(['/user']);
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}
}
