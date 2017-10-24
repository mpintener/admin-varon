import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { LoaderService } from '../services/loader.service';
import { NotificationService } from '../services/notification.service';

@Component({
	selector: 'notification',
	templateUrl: 'notification.component.html',
	providers: [AdminService, LoaderService, NotificationService]
})

export class NotificationComponent{
	public admin;
	public token;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _adminService: AdminService,
		private _notificationService: NotificationService,
		private _loaderService: LoaderService
		){
		this.admin = this._adminService.getAdmin();
		this.token = this._adminService.getToken();
	}

	sendPush(){
		var message = {
			title: 'Hola',
			body: 'Probando..Probando..'
		}
		console.log('aca');
		this._notificationService.sendPush(this.token, message).subscribe(
			response => {
				console.log(response);
			}, error => {
				console.log(error);
			}
		);
	}
}