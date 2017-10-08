import { Component, OnInit } from '@angular/core';
// import { TableData } from './table-data';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Admin } from '../models/admin';
import { LoaderService } from '../services/loader.service';
import { AdminService } from '../services/admin.service';
import { WineService } from '../services/wine.service';

@Component({
	selector: 'wine',
	templateUrl: './wine.component.html',
	providers: [AdminService, LoaderService, WineService]
})

export class WineComponent implements OnInit{
	// public admin: Admin;
	// public token;
	// public wines;
	// public objLoaderStatus: boolean;
	// public page = 0;
	// public cant = 50;

	// constructor(
	// 	private _route: ActivatedRoute,
	// 	private _router: Router,
	// 	private _loaderService: LoaderService,
	// 	private _adminService: AdminService,
	// 	private _wineService: WineService
	// 	){
	// 	this.objLoaderStatus = false;
	// 	this.token = this._adminService.getToken();
	// 	this.admin = this._adminService.getAdmin();
	// }

	// ngOnInit(){
	// 	if (this.token == null) {
	// 		this._router.navigate(['/login']);
	// 	} else {
	// 		// this._loaderService.loaderStatus.subscribe((val: boolean) => {
	// 		// 	this.objLoaderStatus = val;
	// 		// });

	// 		// this._wineService.listWines(this.token, this.page, this.cant).subscribe(
	// 		// 	response => {
	// 		// 		console.log(response.status === 'success');
	// 		// 		console.log(response.data);
	// 		// 		if (response.status === 'success') {
	// 		// 			this.wines = response.data;
	// 		// 		} else {
	// 		// 			console.log(response);
	// 		// 		}
	// 		// 	}, error => {
	// 		// 		console.log(<any>error);
	// 		// 	}
	// 		// 	);
	// 	}
	// }

	public rows:Array<any> = [];
	public columns:Array<any> = [
		{title: 'Nombre', name: 'name'},
		{title: 'Tipo', name: 'type'},
		{title: 'Uva', name: 'grape'},
		{title: 'Bodega', name: 'cellar'},
		{title: 'Precio', name: 'price'}
	];
	public page:number = 1;
	public itemsPerPage:number = 10;
	public maxSize:number = 5;
	public numPages:number = 1;
	public length:number = 0;
	private data;
	public token;
	public admin;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _loaderService: LoaderService,
		private _adminService: AdminService,
		private _wineService: WineService
		){
		// this.objLoaderStatus = false;
		this.token = this._adminService.getToken();
		this.admin = this._adminService.getAdmin();
		this.length = 10;
	}

	public config:any = {
		paging: false,
		sorting: {columns: this.columns},
		filtering: {filterString: ''},
		className: ['table-striped', 'table-bordered']
	};

	// private data = [{
	// 	'name': 'Victoria Cantrell',
	// 	'position': 'Integer Corporation',
	// 	'office': 'Croatia',
	// 	'ext': `<strong>0839</strong>`,
	// 	'startDate': '2015/08/19',
	// 	'salary': 208.178
	//   }, {
	// 	'name': 'Pearl Crosby',
	// 	'position': 'In PC',
	// 	'office': 'Cambodia',
	// 	'ext': `<strong>8262</strong>`,
	// 	'startDate': '2014/10/08',
	// 	'salary': 114.367
	//   }, {
	// 	'name': 'Colette Foley',
	// 	'position': 'Lorem Inc.',
	// 	'office': 'Korea, North',
	// 	'ext': '8968',
	// 	'startDate': '2015/07/19',
	// 	'salary': 721.473
	//   }, {
	// 	'name': 'Anastasia Shaffer',
	// 	'position': 'Dolor Nulla Semper LLC',
	// 	'office': 'Suriname',
	// 	'ext': '7980',
	// 	'startDate': '2015/04/20',
	// 	'salary': 264.620
	//   }, {
	// 	'name': 'Gabriel Castro',
	// 	'position': 'Sed Limited',
	// 	'office': 'Bahrain',
	// 	'ext': '0757',
	// 	'startDate': '2015/03/04',
	// 	'salary': 651.350
	//   }, {
	// 	'name': 'Cherokee Ware',
	// 	'position': 'Tincidunt LLC',
	// 	'office': 'United Kingdom (Great Britain)',
	// 	'ext': '3995',
	// 	'startDate': '2015/06/17',
	// 	'salary': 666.259
	//   }, {
	// 	'name': 'Barry Moss',
	// 	'position': 'Sociis Industries',
	// 	'office': 'Western Sahara',
	// 	'ext': '6697',
	// 	'startDate': '2015/08/13',
	// 	'salary': 541.631
	//   }, {
	// 	'name': 'Maryam Tucker',
	// 	'position': 'Elit Pede Malesuada Inc.',
	// 	'office': 'Brazil',
	// 	'ext': '5203',
	// 	'startDate': '2014/10/02',
	// 	'salary': 182.294
	//   }, {
	// 	'name': 'Constance Clayton',
	// 	'position': 'Auctor Velit Aliquam LLP',
	// 	'office': 'United Arab Emirates',
	// 	'ext': '4204',
	// 	'startDate': '2015/08/01',
	// 	'salary': 218.597
	//   }, {
	// 	'name': 'Rogan Tucker',
	// 	'position': 'Arcu Vestibulum Ante Associates',
	// 	'office': 'Jersey',
	// 	'ext': '0885',
	// 	'startDate': '2015/01/04',
	// 	'salary': 861.632
	//   }, {
	// 	'name': 'Emery Mcdowell',
	// 	'position': 'Gravida Company',
	// 	'office': 'New Zealand',
	// 	'ext': '3951',
	// 	'startDate': '2015/06/02',
	// 	'salary': 413.568
	//   }, {
	// 	'name': 'Yael Greer',
	// 	'position': 'Orci Limited',
	// 	'office': 'Madagascar',
	// 	'ext': '1416',
	// 	'startDate': '2014/12/04',
	// 	'salary': 121.831
	//   }, {
	// 	'name': 'Jared Burgess',
	// 	'position': 'Auctor Incorporated',
	// 	'office': 'Burundi',
	// 	'ext': '4673',
	// 	'startDate': '2015/01/12',
	// 	'salary': 62.243
	//   }, {
	// 	'name': 'Sharon Campbell',
	// 	'position': 'Elit Curabitur Sed Consulting',
	// 	'office': 'Comoros',
	// 	'ext': '6274',
	// 	'startDate': '2014/09/14',
	// 	'salary': 200.854
	//   }, {
	// 	'name': 'Yeo Church',
	// 	'position': 'Donec Vitae Erat PC',
	// 	'office': 'Saudi Arabia',
	// 	'ext': '0269',
	// 	'startDate': '2015/06/07',
	// 	'salary': 581.193
	//   }, {
	// 	'name': 'Kylie Barlow',
	// 	'position': 'Fermentum Risus Corporation',
	// 	'office': 'Papua New Guinea',
	// 	'ext': '2010',
	// 	'startDate': '2014/12/03',
	// 	'salary': 418.115
	//   }, {
	// 	'name': 'Nell Leonard',
	// 	'position': 'Vestibulum Consulting',
	// 	'office': 'Saudi Arabia',
	// 	'ext': '4839',
	// 	'startDate': '2015/05/29',
	// 	'salary': 466.201
	//   }, {
	// 	'name': 'Brandon Fleming',
	// 	'position': 'Donec Egestas Associates',
	// 	'office': 'Poland',
	// 	'ext': '0622',
	// 	'startDate': '2015/01/22',
	// 	'salary': 800.011
	//   }];

	public ngOnInit():void {
		this._wineService.listWines(this.token, 1, 10).subscribe(
			response => {
				console.log(response.status === 'success');
				console.log(response.data);
				var myData = [];
				if (response.status === 'success') {
					let collection = response.data.wines;
					collection.forEach(function (item, index) {
						console.log(item);
						var obj = {
					        name: item.name,
					        type: item.type.name,
					        grape: item.grape.name,
					        cellar: item.cellar.name,
					        price: '$'+item.price
					    };
					    console.log(obj);
					    myData.push(obj);
					});
					this.rows = myData;
				} else {
					console.log(response);
				}
			}, error => {
				console.log(<any>error);
			}
		);
		this.onChangeTable(this.config);
	}

	public changePage(page:any, data:Array<any> = this.data):Array<any> {
		let start = (page.page - 1) * page.itemsPerPage;
		let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
		return data.slice(start, end);
	}

	public changeSort(data:any, config:any):any {
		if (!config.sorting) {
			return data;
		}

		let columns = this.config.sorting.columns || [];
		let columnName:string = void 0;
		let sort:string = void 0;

		for (let i = 0; i < columns.length; i++) {
			if (columns[i].sort !== '' && columns[i].sort !== false) {
				columnName = columns[i].name;
				sort = columns[i].sort;
			}
		}

		if (!columnName) {
			return data;
		}

		// simple sorting
		return data.sort((previous:any, current:any) => {
			if (previous[columnName] > current[columnName]) {
				return sort === 'desc' ? -1 : 1;
			} else if (previous[columnName] < current[columnName]) {
				return sort === 'asc' ? -1 : 1;
			}
			return 0;
		});
	}

	public changeFilter(data:any, config:any):any {
		// let filteredData:Array<any> = data;
		// this.columns.forEach((column:any) => {
		// 	if (column.filtering) {
		// 		filteredData = filteredData.filter((item:any) => {
		// 			return item[column.name].match(column.filtering.filterString);
		// 		});
		// 	}
		// });

		// if (!config.filtering) {
		// 	return filteredData;
		// }

		// if (config.filtering.columnName) {
		// 	return filteredData.filter((item:any) =>
		// 		item[config.filtering.columnName].match(this.config.filtering.filterString));
		// }

		// let tempArray:Array<any> = [];
		// filteredData.forEach((item:any) => {
		// 	let flag = false;
		// 	this.columns.forEach((column:any) => {
		// 		if (item[column.name].toString().match(this.config.filtering.filterString)) {
		// 			flag = true;
		// 		}
		// 	});
		// 	if (flag) {
		// 		tempArray.push(item);
		// 	}
		// });
		// filteredData = tempArray;

		// return filteredData;
	}

	public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
		// if (config.filtering) {
		// 	Object.assign(this.config.filtering, config.filtering);
		// }

		// if (config.sorting) {
		// 	Object.assign(this.config.sorting, config.sorting);
		// }

		// // let filteredData = this.changeFilter(this.data, this.config);
		// let sortedData = this.changeSort(filteredData, this.config);
		// this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
		// this.length = sortedData.length;
	}

	public onCellClick(data: any): any {
		console.log(data);
	}
}