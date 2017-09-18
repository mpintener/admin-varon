import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
	providers: [UserService]
})

export class UserComponent{
	public title = 'Usuarios';
	public token

	constructor(
		private _userService: UserService,
		private _router: Router,
	){}

	ngOnInit(){
		this.token = this._userService.getToken();
		if (this.token == null) {
			this._router.navigate(['/login']);
		}
	}
}