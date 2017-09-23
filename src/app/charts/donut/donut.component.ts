import { Component, OnInit, OnChanges, DoCheck, SimpleChanges, ViewChild } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { AdminService } from '../../services/admin.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
	selector: 'donut-chart',
	templateUrl: './donut.component.html',
	providers: [ChartService]
})
export class DonutChartComponent implements OnInit {
	@ViewChild(BaseChartDirective) chart: BaseChartDirective;
	public pieChartLabels:string[] = [];
 	public pieChartData:number[] = [];
	public pieChartType:string = 'pie';
	public data:any;
	public labels:any;
	public token;

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

	public donutChartColors:Array<any> = [
    { // grey
      backgroundColor: ['#820333', '#C9283E', '#540032'],
      borderColor: [],
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

	ngOnInit(){
		this._chartService.getDonutChartData(this.token).subscribe(
			response => {
				let result = response.data;
				let data = [];
				let labels = [];
				result.forEach((item, index) => {
					// console.log(item.cant);
					// console.log(item.wine.name);
					data[index] = item.cant;
					labels[index] = item.wine.name;
					}
				);
				this.pieChartData = data;
				this.pieChartLabels = labels;
				this.chart.chart.update();
				this.chart.chart.update();
			}, error => {
				console.log(<any>error);
			}
		);
	}
}