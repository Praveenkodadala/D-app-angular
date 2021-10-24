import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router'


import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';



import { DashboardComponent } from './dashboard.component';
import { ProfileListComponent } from './profile-list/profile-list.component';


const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: '',
        redirectTo: '/form',
        pathMatch: 'full',
      },
      {
        path: '/form',
        data: { title: 'Create Form' },
        component: FormComponent,
      },
      {
        path: 'profiles',
        data: { title: 'Profile List' },
        component: ProfileListComponent,
      }
    ]

  },
]


@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    ProfileListComponent
  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),  
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    
  ]
})
export class DashboardModule { }
