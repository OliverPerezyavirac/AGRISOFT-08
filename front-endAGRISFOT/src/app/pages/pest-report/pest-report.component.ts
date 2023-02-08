import { Plaga } from './../../entities/plaga.entities';
import { ReportsServicesService } from 'src/app/services/reports.services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pest-report',
  templateUrl: './pest-report.component.html',
  styleUrls: ['./pest-report.component.css']
})
export class PestReportComponent implements OnInit {

  constructor(private _pestReport: ReportsServicesService) { }

  pestReport: Plaga[] = [];

  ngOnInit(): void {
    this.getPlaga();
  }
  getPlaga(): void {
    this._pestReport.getReports()
      .subscribe(
        res => this.pestReport = res,
        err => console.log(err)
      )
  }

}
