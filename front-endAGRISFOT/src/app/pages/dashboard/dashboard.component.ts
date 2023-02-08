import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  intervalId: any;
  subscription: Subscription;
  public chart1: any;
  public chart2: any;
  public chart3: any;
  public chart4: any;
  public chart5: any;
  constructor() { this.subscription = new Subscription(); }

  ngOnInit() {

    //*Para inicializar las graficas
    this.createChart();
    this.createChart2();
    this.createChart3();
    this.createChart4();
    this.createChart5();



    //*esto es para que la grafica se actualice cada 60 segundos
    this.subscription = interval(50000).subscribe(() => {
      this.destroyChart3();
      this.createChart3();
    });


    //*esto es para que la barra de navegacion cambie de color

    const nav = document.querySelector('nav')!;

    window.addEventListener('scroll', (): void => {
      if (window.pageYOffset > 20) {
        nav.classList.add('bg-light', 'shadow');
      } else {
        nav.classList.remove('bg-light', 'shadow');
      }
    });

  }

  //*Para destruir las graficas y no consuma recursos

  private destroyChart3() {
    if (this.chart3) {
      this.chart3.destroy();
      this.chart3 = null;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroyChart3();
  }

  //*Creacion de graficas

  //*Grafica de barras
  createChart() {

    //? Generar datos aleatorios

    let data = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.floor(Math.random() * 50));
    }

    this.chart1 = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['10-15', '15-20', '20-25', '25-30', '30-35', '40-45', '45-50'],
        datasets: [
          {
            label: "Usuarios Edades",
            data: data,
            backgroundColor: ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }


  //*Grafica de torta
  createChart2() {
    this.chart2 = new Chart("MyChart2", {
      type: 'pie', //* tipo de grafica

      data: {// values on X-Axis
        labels: ['Sierra', 'Costa', 'Oriente', 'Galapagos'],
        datasets: [
          {
            label: "Usuarios",
            data: [467, 576, 572, 79],
            backgroundColor: ['red', 'green', 'blue', 'yellow']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  //*Grafica de lineas

  createChart3() {
    let data1: number[] = [];
    let data2: number[] = [];

    const updateData = () => {
      data1 = [];
      data2 = [];
      for (let i = 0; i < 8; i++) {
        data1.push(Math.floor(Math.random() * 180));
        data2.push(Math.floor(Math.random() * 180));
      }

      this.chart3.data.datasets[0].data = data1;
      this.chart3.data.datasets[1].data = data2;
      this.chart3.update();
    };

    this.chart3 = new Chart("MyChart3", {
      type: 'line',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Jovenes",
            data: data1,
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
            borderColor: 'limegreen'
          },
          {
            label: "Adultos",
            data: data2,
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
            borderColor: 'tomato'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });

    updateData();
    this.subscription = interval(60000).subscribe(updateData);
  }


  //*Grafica de dona
  createChart4() {
    this.chart4 = new Chart("MyChart4", {
      type: 'doughnut',//* tipo de grafica

      data: {//* valores en el eje X
        labels: ['Kichwa',
          'Shuar',
          'Huaorani',
          'Achuar',
          'Zapara',
          'Siona',
          'Secoya',
          'Cofán'],
        datasets: [
          {
            label: "Nacionalidad",
            data: ['100', '162', '120', '90', '92',
              '139', '124', '176'],
            backgroundColor: ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey']
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
      }

    });
  }

  //*Grafica de barras cuartiles

  createChart5() {
    this.chart5 = new Chart("MyChart5", {
      type: 'bar', //* tipo de grafica

      data: {// values on X-Axis
        labels: ['Q1 = 25%', 'Q2 = 50%', 'Q3 = 75%'],
        datasets: [
          {
            label: "Usuarios Cuartiles",
            data: [45.25, 91, 136],
            backgroundColor: ['green', 'blue', 'yellow']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });

  }

}
