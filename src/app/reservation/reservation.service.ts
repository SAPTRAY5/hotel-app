import { Reservation } from './../models/reservation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations):[];
  }
  
  //CRUD
  getReservations():Reservation[] { 
    return this.reservations;
  }

  getReservation(id:string):Reservation | undefined{
    return this.reservations.find(res=> res.id === id);
  }

  addReservation(reservation:Reservation):void{
    reservation.id = Date.now().toString(); //to create an uuid
    this.reservations.push(reservation);
    console.log(this.reservations);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }
  
  deleteReservation(id:string): void{
    let index = this.reservations.findIndex(res=>res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updateReservation: Reservation): void{
    let index = this.reservations.findIndex(res=> res.id === updateReservation.id);
    this.reservations[index] = updateReservation;
  }
}
