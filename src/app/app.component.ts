import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day3Task';
  //  dataFromRegister:Object = {name:""};
  // dataList = [];
  personData:{name:string,email:string, age:number}[]=[];
  getData(data:{name:string,email:string,age:number}){
    //console.log(data)
    //console.log(data.name)
    // let dataFromRegister = data;
    //  console.log(dataFromRegister)
    // console.log(this.dataFromRegister.name)
   let person:{name:string,email:string, age:number} = {name:data.name,email:data.email, age:data.age};
   //console.log(person)
   this.personData.push(person);
   //console.log(this.personData)
  }
}
