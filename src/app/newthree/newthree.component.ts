import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newthree',
  templateUrl: './newthree.component.html',
  styleUrls: ['./newthree.component.css']
})
export class NewthreeComponent implements OnInit {

  val=0
  val2=0

  headerRow="This is a title for the table"
  
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

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(p=>{
      console.log(p)
      this.val=p['val']
      this.val2=p['val2']
    })
  }

  ngOnInit(): void {

  }
}
