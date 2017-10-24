import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';
import { Subscription } from 'rxjs/Subscription';
import { Moment } from 'moment/moment';

@Component({
	selector: 'line-chart',
	templateUrl: './line-chart.component.html',
	providers: [UserService]
})
export class LineChartComponent implements OnInit{
	// lineChart
	public lineChartData:Array<any> = [];
	public lineChartLabels:Array<any> = [];
	public lineChartType:string = 'line';
	public subscription: Subscription;
	public data;
	public token;
	public labels = [];
	public chartData;

	public chartHovered(e:any):void {
		console.log(e);
	}

	public lineChartColors:Array<any> = [
	{ // grey
		backgroundColor: 'rgba(130, 3, 51, 0.62)',
		borderColor: 'rgba(130, 3, 51, 0.92)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	}
	];

	constructor(
		private _userService: UserService,
		private _adminService: AdminService
		){}

	ngOnInit(){
		this.token = this._adminService.getToken();
		this._userService.listUsers(this.token).subscribe(
			response => {
				var data = response.data;
				data.forEach((item, index) => {
					if (!this.labels.find(x => x == item.createdDate)) {
						this.labels.push(item.createdDate);
					}
				});
				console.log(this.labels);
				this.lineChartLabels = this.labels;
			},
			error => {

			}
			);
		var date = new Date();
		console.log(date.getDay());

		this.chartData = {
			'labels': this.labels,
			'data': [23, 60, 45, 80, 91]
		}
		this.lineChartLabels = [23, 60, 45, 80, 91];
	}

	public randomize():void {
		let _lineChartData:Array<any> = new Array(this.lineChartData.length);
		for (let i = 0; i < this.lineChartData.length; i++) {
			_lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
			for (let j = 0; j < this.lineChartData[i].data.length; j++) {
				_lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
			}
		}
		this.lineChartData = _lineChartData;
	}

}