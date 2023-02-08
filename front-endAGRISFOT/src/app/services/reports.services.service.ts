import { Plaga } from './../entities/plaga.entities';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsServicesService {
  
  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3000';
  
  getReports(): Observable<any>{
    return this.httpClient.get(`${this.url}/reporte`)
  }

  getReport(id: string): Observable<any>{
    return this.httpClient.get(`${this.url}/reporte/${id}`)
  }

  createReport(report: Plaga): Observable<any>{
    return this.httpClient.post(`${this.url}/reporte/create`, report);
  }

  deleteReport(id: string){
    return this.httpClient.delete(`${this.url}/reporte/delete?reportID=${id}`)
  }
  
  updateReport(id: string, report: Plaga): Observable<any>{
    return this.httpClient.put(`${this.url}/reporte/update?reportID=${id}`, report )
  }

  
  
}
