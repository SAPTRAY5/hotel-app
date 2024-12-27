import { Reservation } from './../models/reservation';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService

 } from '../reservation/reservation.service';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService){

  }
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      guestName: ['',Validators.required],
      guestEmail: ['',[Validators.required,Validators.email]],
      roomNumber: ['',Validators.required]
    })
  }

  onSubmit()  {
    if(this.reservationForm.valid)
    {
      console.log("valid");
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation)
    }
  }
}
