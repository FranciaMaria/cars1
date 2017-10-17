import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsService } from './share/services/cars.service';
import { CarFormComponent } from './components/cars/car-form/car-form.component';

const appRoutes:Routes = [
 { path: 'cars', component: CarsComponent },
 { path: 'add', component: CarFormComponent },
 { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
