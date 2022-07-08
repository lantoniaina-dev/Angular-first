import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { hotelHttpService } from 'src/app/shared/service/hotelService';
import { IHotel } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  public hotelForm: FormGroup;
  public _id: any;
  private _httpHotels;
  MonHotel: any = {};
  hotel: IHotel;
  public errorMsg: any;

  constructor(public fb: FormBuilder, private hotels: hotelHttpService, private route: ActivatedRoute) {
    this._httpHotels = hotels
  }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      hotelPrice: ['', Validators.required],
      starRating: [''],
      description: ['']
    })

    const id = this.route.snapshot.paramMap.get('id');
    this._id = id;
    console.log(id)
    this.gethttpHotels();
  }

  async gethttpHotels() {
    await this._httpHotels.getHotelsById(this._id).subscribe({
      next: hotels => {
        this.MonHotel = hotels;
        console.log("my hotel", hotels);
        this.displayHotel(hotels)
      },
      error: err => this.errorMsg = err
    });

  }

  public displayHotel(hotel: IHotel): void {   //Valeur par default des formulaire
    this.hotel = hotel;

    this.hotelForm.patchValue({
      hotelName: this.hotel.hotelName,
      hotelPrice: this.hotel.price,
      starRating: this.hotel.rating,
      description: this.hotel.description
    })
  }

  public saveHotel(): void {
    console.log(this.hotelForm.value);
  }

}
