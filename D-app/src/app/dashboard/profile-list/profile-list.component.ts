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
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private services: HttpService, 
    private router: Router,
    
    ) {
console.log('this is profile list');
}

  ngOnInit(): void {
    console.log("hkjhkjhkh")
  }

}
