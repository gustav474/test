import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bdsm',
  templateUrl: './bdsm.component.html',
  styleUrls: ['./bdsm.component.css']
})
export class BdsmComponent implements OnInit {
  id: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params.id;
  }



  ngOnInit() {
  }

}
