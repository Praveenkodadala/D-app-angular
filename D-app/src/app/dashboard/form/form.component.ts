import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli andDaman & Diu',
    'The Government of NCT of Delhi',
    'Jammu & Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ];
  gender: string[] = ['male', 'female', 'others'];

  profileForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private services: HttpService, 
              private router: Router,
              ) {
    console.log('praveen ...');
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [''],
      pnumber: [''],
      email: [''],
      state: [''],
      age: [''],
      gender: [''],
      qualification: [''],
      occupation: [''],
      goals: [''],
      motivation: [''],
      date: [''],
    });
  }

  onSubmit() {
    console.log('checking submiting');
    console.log('this.profileForm.value', this.profileForm.value);
    this.services.profilePosts(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
      if(res.status){
        this.profileForm.reset()
        alert("User Profile Saved")
      }
    })

  }

  formHidden = false
  tableHidden = true
  openProfiles() {
    this.formHidden = true
    this.tableHidden = false
    this.getPosts()
  }

  profiles:any
  getPosts() {
    this.services.getPosts().subscribe((res) => {
      this.profiles = res;
      console.log(res);
    })
  }


  headers :string[] = [
    "date",
    "Name",
    "Phone",
    "mail",
    "state",
    "age",
    "gender",
    "qualification",
    "occupation",
    'goals',
    "motivation",
    

 ]

 backToForm(){
  this.formHidden = false
  this.tableHidden = true
 }

}
