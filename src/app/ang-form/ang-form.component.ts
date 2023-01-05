import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ang-form',
  templateUrl: './ang-form.component.html',
  styleUrls: ['./ang-form.component.css']
})
export class AngFormComponent implements OnInit {
  val=""
  val2=""
  chk1=true
  slt1="1"
  rdoMain=""


  func1(f:NgForm){
    console.log(f.value)
  }

  func2(f:NgForm){
    f.reset()
  }

  preloadval(f:NgForm){
    let loadobj={
      "val":"ABC",
      "val2":"DEF",
      "chk1":true,
      "slt1":"2",
      "rdoMain":"3"
    }

    f.setValue(loadobj)
  }
  
  constructor(){}

  ngOnInit(): void {
      
  }
}

