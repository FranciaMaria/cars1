import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsService } from './share/services/cars.service';
import { CarFormComponent } from './components/cars/car-form/car-form.component';
import { CarRowComponent } from './components/cars/car-row/car-row.component';
import { FilterPipe } from './share/pipes/filter.pipe';


const appRoutes:Routes = [
 { path: 'cars', component: CarsComponent },
 { path: 'add', component: CarFormComponent },
 { path: 'cars', component: CarFormComponent },
 { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent,
    CarRowComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    RouterModule.forRoot(
      appRoutes
	)
  ],
  exports: [
    LayoutComponent
	],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
