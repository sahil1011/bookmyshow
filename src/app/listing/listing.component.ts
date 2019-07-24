import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  datas: any = [];
  status = '';
  constructor(private data: DatabaseService, private route: Router) { }

  ngOnInit() {
    this.onGet();
  }

  onGet() {
   this.data.getData().subscribe(res => {
     this.datas = res;
    });
  }
  bookticket(s){
    this.route.navigate(['booking', s]);
  }
}
