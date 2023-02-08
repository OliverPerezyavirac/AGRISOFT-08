import { Plaga } from './../../entities/plaga.entities';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsServicesService } from 'src/app/services/reports.services.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  reportForm: FormGroup;
  titulo: string = 'Enviar reporte';
  id: string | null;
  constructor(
    private form: FormBuilder,
    private router: Router,
    private _plagaService: ReportsServicesService,
    private aRouter: ActivatedRoute
  ) {
    this.reportForm = this.form.group({
      plaga: ['', Validators.required],
      description: ['', Validators.required],
      imageURL: ['', Validators.required],
      provincia: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditPlaga();
  }

  agregarPlaga() {
    const PLAGA: Plaga = {
      plaga: this.reportForm.get('plaga')?.value,
      description: this.reportForm.get('description')?.value,
      imageURL: this.reportForm.get('imageURL')?.value,
      provincia: this.reportForm.get('provincia')?.value,
    };
    if (this.id !== null) {
      this._plagaService.updateReport(this.id, PLAGA).subscribe(
        (data) => {
          this.router.navigate(['reportes']);
        },
        (error) => {
          console.log(error);
          this.reportForm.reset();
        }
      );
    } else {
      console.log(PLAGA);
      this._plagaService.createReport(PLAGA).subscribe(
        (data) => {
          this.router.navigate(['reportes']);
        },
        (error) => {
          console.log(error);
          this.reportForm.reset();
        }
      );
    }
  }

  esEditPlaga() {
    if (this.id !== null) {
      this.titulo = 'Editar reporte';
      this._plagaService.getReport(this.id).subscribe((data) => {
        this.reportForm.setValue({
          plaga: data.plaga,
          description: data.description,
          imageURL: data.imageURL,
          provincia: data.provincia,
        });
      });
    }
  }

  // EliminarPlaga(){
  //   if(this.id !==null){
  //     this.titulo='Eliminar reporte';
  //     this._plagaService.getReport(this.id).subscribe(data =>{
  //       this.reportForm.setValue({
  //         plaga: data.plaga,
  //         description: data.description,
  //         imageURL:data.imageURL,
  //         provincia: data.provincia,
  //       })
  //     })
  //   }
  //     }
      
}
