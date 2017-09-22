import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'line-chart',
	templateUrl: './line-chart.component.html',
	providers: [ChartService]
})
export class LineChartComponent implements OnInit{
	// lineChart
	public lineChartData:Array<any> = [];
	public lineChartLabels:Array<any> = [];
	public lineChartType:string = 'line';
	public subscription: Subscription;
	public data;

	public chartHovered(e:any):void {
		console.log(e);
	}

	constructor(
		private _chartService: ChartService
	){}

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

	ngOnInit(){
		this.data = this._chartService.getLineChartData();
		this.lineChartData = this.data.data;
		this.lineChartLabels = this.data.labels;
	}

}