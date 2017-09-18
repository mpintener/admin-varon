import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
	selector: 'list-user',
	templateUrl: './list.component.html',
	providers: [UserService]
})
export class ListComponent implements OnInit{
	public title = 'Agregar usuario';
	public user: User;
	public users: User[];
	public token;
	public url;
	public hola;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.user = new User('','','','');
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.hola = false;
	}

	ngOnInit(){
		this._userService.listUsers(this.token).subscribe(
			response => {
				console.log(response.status === 'success');
				console.log(response.data);
				if (response.status === 'success') {
					this.users = response.data;
				} else {
					console.log(response);
				}
			}, error => {
				console.log(<any>error);
			}
		);
	}
}
