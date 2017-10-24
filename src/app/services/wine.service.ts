import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class WineService{
	public url: string;
	public token;
	public user;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	listWines(token, page, cant){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});

		return this._http.get(this.url+'wine?page='+page+'&cant='+cant, {headers: headers})
			.map(res => res.json());
	}

	getFavoriteWines(token){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});
		console.log(this.url+'wine/favorites');

		return this._http.get(this.url+'wine/favorites', {headers: headers})
			.map(res => res.json());
	}

}