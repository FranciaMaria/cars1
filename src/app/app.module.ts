import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';

const appRoutes:Routes = [
 { path: 'cars', component: CarsComponent },
 { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
	)
  ],
  exports: [
    LayoutComponent
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
