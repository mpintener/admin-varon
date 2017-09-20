import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class AdminService{
	public url: string;
	public token;
	public admin;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	login(admin, token = null){
		let params = JSON.stringify(admin);
		let headers = new Headers({'Content-Type': 'application/json'});
		console.log(params);
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

	getAdmin(){
		let admin = JSON.parse(localStorage.getItem('admin'));

		if (admin != undefined) {
			this.admin = admin;
		} else {
			this.admin = null;
		}

		return this.admin;
	}

	listAdmins(token){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});
		return this._http.get(this.url+'admin', {headers: headers})
			.map(res => res.json());
	}

	// Obtener usuario por id
	getAdminToEdit(token, id){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});

		return this._http.get(this.url+'admin/'+id, {headers: headers})
			.map(res => res.json());
	}

	editAdmin(token, admin){

	}
}