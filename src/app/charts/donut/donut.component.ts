import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { AdminService } from '../../services/admin.service';

@Component({
	selector: 'donut-chart',
	templateUrl: './donut.component.html',
	providers: [ChartService]
})
export class DonutChartComponent implements OnInit {
	// lineChart
	public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
	public pieChartData:number[] = [300, 500, 100];
	public pieChartType:string = 'pie';
	public data:any;
	public token;
	public fav1;

	constructor(
		private _chartService: ChartService,
		private _admintService: AdminService
	){
		this.token = this._admintService.getToken();
	}

	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}

	ngOnInit(){
		this._chartService.getDonutChartData(this.token).subscribe(
			response => {
				var results = response.data;
				this.fav1 = response.data;
				// console.log(this.fav1);
				response.data.forEach((item, index) => {
				    this.pieChartLabels.push(item.wine.name);
				    this.pieChartData.push(item.cant);
				});
				console.log(this.pieChartLabels);
				console.log(this.pieChartData);
			}, error => {
				console.log(<any>error);
			}
		);
	}

}