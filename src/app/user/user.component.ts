import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
	providers: [AdminService]
})

export class UserComponent{
	public title = 'Usuarios';
	public token;

	constructor(
		private _adminService: AdminService,
		private _router: Router
	){}

	ngOnInit(){
		this.token = this._adminService.getToken();
		console.log(this.token);
		if (this.token == null) {
			this._router.navigate(['/login']);
		}
	}
}