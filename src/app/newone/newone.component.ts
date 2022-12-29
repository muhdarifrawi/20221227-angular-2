import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  // template:'<h1>hello this is the template</h1>',
  styleUrls: ['./newone.component.css','./style.css']
})
export class NewoneComponent {
  val=false
  obj =[
    {
      number: 1,
      name: "apple",
      age:21
    },
    {
      number: 2,
      name: "banana",
      age:24
    },
    {
      number: 3,
      name: "cashew",
      age:27
    },
    {
      number: 4,
      name: "durian",
      age:23
    },
  ]
  game="rugby"
  c="violet"
  bg="purple"
  fw=100
  colorVal=2
  classVal = "a b"
  classA = "a"
  classB="b"
  classCompare = 1


  classType(){
    return "a"
  }

  headerRow="This is a title for the table"

  imgSrc=""
  imgAlt="A picture of a cat"

  colSpan=3

  actionCall(){
    alert("Hey it works!")
  }

  withParams(a:any, b:any, c:any){
    alert("here are the results:" + a +", "+ b +", "+ c)
  }
}
