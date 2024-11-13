import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
form!: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private http:HttpClient,
    private router:Router

  ){

  }

ngOnInit(): void{
  this.form = this.formBuilder.group({
    name: '',
    email: '',
    password:''
  })
}

submit(): void{
console.log(this.form.getRawValue());
this.http.post('http://127.0.0.1:8000/api/register', this.form.getRawValue()).subscribe( () => {
  this.router.navigate(['/login']);
})
}

}
