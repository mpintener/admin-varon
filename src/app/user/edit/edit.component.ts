import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
	selector: 'edit-user',
	templateUrl: './edit.component.html',
	providers: [UserService]
})
export class EditComponent implements OnInit{
	public title = 'Agregar usuario';
	public user: User;
	public userToEdit: User;
	public token;
	public url;
	public id;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.user = new User('','','','');
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit(){
		console.log('edit component cargado');
		console.log(this._route.params);
		this._route.params.forEach((params: Params) => {
			this.id = params['id'];
			console.log(this.id);
		});
		this._userService.getUserToEdit(this.token, this.id).subscribe(
			response => {
				console.log(response.status === 'success');
				console.log(response.data);
				if (response.status === 'success') {
					this.userToEdit = response.data;
					console.log(this.userToEdit);
				} else {
					console.log(response);
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}

	onSubmit(){
		// this._userService.editUser(this.token, this.user).subscribe(
		// 	response => {
		// 		console.log(response);
		// 	}, error => {
		// 		console.log(error);
		// 	}
		// );
	}
}
