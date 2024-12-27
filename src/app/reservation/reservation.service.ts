import { Reservation } from './../models/reservation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  
  //CRUD
  getReservations():Reservation[] { 
    return this.reservations;
  }

  getReservation(id:string):Reservation | undefined{
    return this.reservations.find(res=> res.id === id);
  }

  addReservation(reservation:Reservation):void{
    this.reservations.push(reservation);
    console.log(this.reservations);
  }
  
  deleteReservation(id:string): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations.splice(index,1);
  }

  updateReservation(updateReservation: Reservation): void{
    let index = this.reservations.findIndex(res=> res.id === updateReservation.id);
    this.reservations[index] = updateReservation;
  }
}
