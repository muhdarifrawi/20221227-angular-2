import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newfour',
  templateUrl: './newfour.component.html',
  styleUrls: ['./newfour.component.css']
})
export class NewfourComponent implements OnInit {
  valParam1=0
  valParam2=0
  valParam3=0
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(
      p=>{
        console.log(p)
        this.valParam1=p['param1']
        this.valParam2=p['param2']
        this.valParam3=p['param3']
      }
    )
  }
  ngOnInit(): void {

  }
}
