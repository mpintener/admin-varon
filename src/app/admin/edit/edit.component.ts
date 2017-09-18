import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
	selector: 'edit-admin',
	templateUrl: './edit.component.html',
	providers: [UserService]
})
export class EditComponent{
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
}
