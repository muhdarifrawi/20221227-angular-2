import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ang-reactive-form',
  templateUrl: './ang-reactive-form.component.html',
  styleUrls: ['./ang-reactive-form.component.css']
})
export class AngReactiveFormComponent implements OnInit {
  
  addreactf!: FormGroup;
  
  constructor(private formb:FormBuilder){}

  ngOnInit(): void {
    // this.addreactf=new FormGroup({
    //   "fn":new FormControl(),
    //   "ln":new FormControl(),
    // })

    // this.addreactf=this.formb.group({
    //     "fn":new FormControl("value number one"),
    //     "ln":new FormControl("value number two"),
    // })

    this.addreactf=this.formb.group({
      "fn":new FormControl(),
      "ln":new FormControl(),
    })

    const objreactf = {
      "fn":"value number one",
      "ln":"value number two",
    }
    this.addreactf.setValue(objreactf)
  }

  

  func1(){
    console.log(this.addreactf.value);
  }
}
