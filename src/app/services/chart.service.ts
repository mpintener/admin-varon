import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ChartService {
	public chartData;
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	getLineChartData(){
		this.chartData = {
			'labels': ['Enero', 'Feberero', 'Marzo', 'Abril', 'Mayo'],
			'data': [23, 60, 45, 80, 91]
		}
		return this.chartData;
	}

	getDonutChartData(token){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'token': token
		});

		return this._http.get(this.url+'wine/favorites', {headers: headers})
			.map(res => res.json());
	}
}