

import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  s: string;
  t: any[]=[];
  seats: number;
  m: number;
  bookForm: FormGroup;


  constructor(private r: ActivatedRoute, private router: Router, private service: DatabaseService) { }

  ngOnInit() {
    this.r.paramMap.subscribe(params => {
      this.s = params.get('name');
    });
    this.getSeats(this.s);
    this.bookForm = new FormGroup({
      'bname': new FormControl(null,
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      'bemail': new FormControl(null,
        [Validators.required, Validators.email]),
      'bnumber': new FormControl(null, [
        Validators.required, Validators.max(9999999998), Validators.min(1000000001)]),
      'bseats': new FormControl(0,
        [Validators.required, Validators.max(this.seats), Validators.min(1)]),
        'names': new FormArray([])
    });  
  }
  onSubmit() {
    if (this.seats >= this.bookForm.value.bseats) {
    this.seats = this.seats - this.bookForm.value.bseats;
    }
    this.bookForm.reset();
  }

onAdd() {
  const s=this.bookForm.get('bseats').value;
  console.log(s);
  for (let index = 0; index < s; index++) {
    (this.bookForm.get('names') as FormArray).push(new FormControl(null, Validators.required));
  }
  }



  toEvents() {
    this.router.navigate(['listing']);
  }
  getSeats(r) {
    this.service.getData().subscribe(res => {
      this.t = res;

      for (const iterator of this.t) {
          if (iterator.name == r) {
            this.seats = iterator.seats;
          }
      }

    });
  }
  updateSeats(i) {
    this.service.getData().subscribe(res => {
      this.t = res;
      this.t.forEach(element => {
        if (element.name == this.s) {
          this.seats = element.seats - i;
        }
      });

    });
  }


}
