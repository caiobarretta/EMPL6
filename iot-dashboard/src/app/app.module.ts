import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './dashboard/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './dashboard/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './dashboard/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './dashboard/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './dashboard/scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
