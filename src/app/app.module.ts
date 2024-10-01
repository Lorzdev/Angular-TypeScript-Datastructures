import { Component, NgModule } from "@angular/core"
import { AppComponent } from "./app.component"
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import {StudentlistComponent} from "./components/studentlist/studentlist.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";


const routes: Routes = [
  {path: '', component: StudentlistComponent},
  {path: 'employee-list', component: EmployeeListComponent},


]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeeListComponent
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
