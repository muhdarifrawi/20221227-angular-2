import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newfive',
  templateUrl: './newfive.component.html',
  styleUrls: ['./newfive.component.css']
})
export class NewfiveComponent implements OnInit {
  constructor(private activateRoute:ActivatedRoute){}

  ngOnInit(): void{
    console.log(this.activateRoute.snapshot.data)
  }
}
