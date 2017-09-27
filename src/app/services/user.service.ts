import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { User } from '../models/user';


@Injectable()
export class UserService{
	public url: string;
	public token;
	public user;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	listUsers(token){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});
		return this._http.get(this.url+'user', {headers: headers})
			.map(res => res.json());
	}

	// Obtener usuario por id
	getUserToEdit(token, id){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});
		console.log(this.url+'user/'+id);
		return this._http.get(this.url+'user/'+id, {headers: headers})
			.map(res => res.json());
	}

	editUser(token, user: User, id){
		let params = JSON.stringify(user);
		let headers = new Headers({
			'Content-Type':'application/json',
			'token': token
		});
		console.log(params);
		return this._http.put(this.url+'user/'+id, params, {headers: headers})
			.map(res => res.json());
	}
}