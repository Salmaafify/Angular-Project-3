import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  validateForm = new FormGroup({
    name: new FormControl("name",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("username@mail.com",[Validators.required,Validators.email]),
    age: new FormControl(18,[Validators.required,Validators.min(18),Validators.max(50)])
  })
  ////////////////////////////////////////////////////////////////////////////////////
  // get name(){
  //   if(this.validateName){
  //     return this.validateForm.controls.name.value;
  //   }
  // }
  // get email(){
  //   if(this.validateEmail){
  //     return this.validateForm.controls.email.value;
  //   }
  // }
  // get age(){
  //   if(this.validateAge){
  //     return this.validateForm.controls.age.value;
  //   }
  // }
  
  /////////////////////////////////////////////////////////////////////////////
  get validateName(){
    return this.validateForm.controls.name.valid;
  }
  get validateEmail(){
    return this.validateForm.controls.email.valid;
  }
  get validateAge(){
    return this.validateForm.controls.age.valid;
  }
  //////////////////////////////////////////////////////////////////////////////
  // name:string = this.validateForm.controls.name.value;
  // email:string = this.validateForm.controls.email.value;
  // age:number = this.validateForm.controls.age.value;
  @Output() myEvent = new EventEmitter();
  //////////////////////////////////////////////////////////////////////////////
  sendData(){
    //console.log(this.validateForm);
    //console.log(this.validateForm.controls.name.value +" , "+this.validateForm.controls.email.value +" , "+this.validateForm.controls.age.value);
    if(this.validateName && this.validateEmail && this.validateAge &&
       this.validateForm.controls.name.value !== "name" &&
        this.validateForm.controls.email.value !== "username@mail.com"){
          let dataObject:{name:string,email:string,age:number}={
            name : this.validateForm.controls.name.value,
            email : this.validateForm.controls.email.value,
            age : this.validateForm.controls.age.value
          }
          //console.log(dataObject)
          this.myEvent.emit(dataObject);
        }
        
       }
  //   let dataObject:{name:string,email:string,age:number}={
  //     name : this.validateForm.controls.name.value,
  //     email : this.validateForm.controls.email.value,
  //     age : this.validateForm.controls.age.value
  //   }
  //   console.log(dataObject)
  //   this.myEvent.emit(dataObject);
  // }
  
}
