import { Injectable } from '@angular/core';
import { Record } from '../models/Record';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  records: Record[];

  constructor() { }

  /**
   * Tries to recover the historical data from localStorage, if it's empty, it initialise it
   * @returns Record[] historical data
   */
  getHistorical() {
    if (localStorage.getItem('visit_records')) {
        this.records = JSON.parse(localStorage.getItem('visit_records'));
    } else {
        this.records = [];
    }
    return this.records;
  }

  /**
   * Adds a record to the historical if the last item is not the same
   * @param record Record to save
   */
  addRecord(title, url) {
      const record: Record = { title, url };
      if (Array.isArray(this.records) && this.records.length) {
        if (this.records[this.records.length - 1].url !== record.url) {
          this.records.push(record);
          localStorage.setItem('visit_records', JSON.stringify(this.records));
        }
      } else {
        this.records.push(record);
        localStorage.setItem('visit_records', JSON.stringify(this.records));
      }
  }

}
