import { Component, OnInit } from '@angular/core';
import { HistoricalService } from 'src/app/services/historical.service';
import { Record } from 'src/app/models/Record';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss']
})
export class RecordsListComponent implements OnInit {

  constructor(private historicalSrv: HistoricalService) {}

  historical: Record[];

  ngOnInit(): void {
    this.historical = this.historicalSrv.getHistorical();
  }

}
