import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class UserService{
	public url: string;
	public token;
	public user;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	login(user, token = null){
		let params = JSON.stringify(user);
		let headers = new Headers({'Content-Type': 'application/json'});

		return this._http.post(this.url+'admin/login', params, {headers: headers})
			.map(res => res.json());
	}

	getToken(){
		let token = JSON.parse(localStorage.getItem('token'));

		if (token != undefined) {
			this.token = token;
		} else {
			this.token = null;
		}

		return this.token;
	}

	getUser(){
		let user = JSON.parse(localStorage.getItem('user'));

		if (user != undefined) {
			this.user = user;
		} else {
			this.user = null;
		}

		return this.user;
	}
}