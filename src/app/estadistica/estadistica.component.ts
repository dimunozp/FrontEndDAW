import { Component, ViewChild, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit{
  
/*

  //Gráfico de líneas
  onSubmit(queryForm:NgForm):void{
    var user = queryForm.value;
    
    this.httpClient.post(`http://192.168.0.24:3000/api/objetosFecha`,{
      fecha:"2019-08-16"
    
  })
    .subscribe(
      (data:any[]) => {
        
        console.log(data);
        if(data.length) {
          data.forEach(element => {
            this.nombre.push(element.nombre);
            this.color.push(element.color);
            this.descripcion.push(element.descripcion);
            this.lugar.push(element.lugar);
            this.fechaRegistro.push(element.fechaRO);
            this.horaRegistro.push(element.horaRegistro);
                        
          });
        }
        
        
        

  })
}
*/
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Objetos Perdidos' },
    
  ];
  loadData1(){
    
    for(let i=1;i<10;i++){
      
      this.httpClient.post(`http://192.168.0.24:3000/api/objetosMes`,{
        mes:"0"+i
      })
      .subscribe(
        (data:any[]) => {
          this.lineChartData[0].data.push(data.length);
        })
        this.delay(3000);

        
    }
    for(let i=9;i<12;i++){
      
      this.httpClient.post(`http://192.168.0.24:3000/api/objetosMes`,{
        mes:i+""
      })
      .subscribe(
        (data:any[]) => {
          this.lineChartData[0].data.push(data.length);
        })
      this.delay(3000);
    }

  }

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'electronico' },
    { data: [], label: 'accesorios' },
    { data: [], label: 'otros' }
  ];

  loadData2(){
    var categorias=[]
    var cantidadCategorias=[]
    console.log("About to exe loadData2")
    this.httpClient.get(`http://192.168.0.24:3000/api/subcategorias`)
    .subscribe(
      (data:any[]) => {
        data.forEach(element => {
          if(!categorias.includes(element.idcategoria)){
            categorias.push(element.idcategoria);
            console.log('agregando')
            console.log();

            cantidadCategorias.push(1);
          }else{
            var indice=categorias.indexOf(element.idcategoria);
            cantidadCategorias[indice]+=1;
          }
          this.delay(3000);
        
      });
    });
    this.httpClient.get(`http://192.168.0.24:3000/api/categorias`)
    .subscribe(
      (data:any[]) => {
        data.forEach(element => {
             
          var indice=categorias.indexOf(element.idcategoria);
          if(indice>=0){
            categorias[indice]=element.nombre;
          }
          this.delay(3000);
        
      });/*
      for(var i=0;i<categorias.length;i++){
        console.log("prueba")
        this.barChartData.push({data:[cantidadCategorias[i],7,0],label:categorias[i]});      
      };*/
      
      this.barChartData[0].data.push(cantidadCategorias[0]);
      this.barChartData[0].data.push(0);
      this.barChartData[0].data.push(7);
      
      this.barChartData[1].data.push(cantidadCategorias[1]);
      
      this.barChartData[2].data.push(cantidadCategorias[2]);
      
      
    });
      

  };

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];

  loadData3(){
    var calificaciones=[]
    var cantidadCalificaciones=[]
    this.httpClient.get(`http://192.168.0.24:3000/api/calificaciones`)
    .subscribe(
      (data:any[]) => {
        console.log(data);
        data.forEach(element => {
          
          if(!calificaciones.includes(element.calificacion)){
            calificaciones.push(element.calificacion);
            console.log('agregando')
            console.log();

            cantidadCalificaciones.push(1);
          }else{
            var indice=calificaciones.indexOf(element.calificacion);
            cantidadCalificaciones[indice]+=1;
          }
        
        });

        for(let i=0;i<calificaciones.length;i++){
          this.pieChartLabels.push(calificaciones[i]+" estrellas");
          this.pieChartData.push(cantidadCalificaciones[i]);
          this.delay(3000);
        }
        this.delay(3000);
        console.log(calificaciones);
        console.log(cantidadCalificaciones);

    });



    
  }
  
  

 
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';

  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


  //Gráfico de barras

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  


  //Gráfico pastel

   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.loadData1();
    this.loadData2();
    this.loadData3();

  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }







  

}
