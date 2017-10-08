import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Admin } from '../models/admin';


@Injectable()
export class NotificationService{
	public url: string;
	public token;
	public admin;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	sendPush(token, message){
		let params = JSON.stringify(message);
		let headers = new Headers({
			'Content-Type':'application/json',
			'token': token
		});

		return this._http.post(this.url+'user/push', params, {headers: headers})
			.map(res => res.json());
	}

}