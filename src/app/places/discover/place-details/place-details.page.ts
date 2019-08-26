import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage {

  constructor(private router: Router,
              private navCtrl: NavController,
              private placeService: PlacesService,
              private  modalCtrl: ModalController) { }
    place: Place;

    ionViewWillEnter() {
      // this.place = this.placeService.getPlaceInUrl(parmMap.get('placeID') => {

      // })
    }
  onBook() {
    // this.router.navigate(['/places/tabs/discover']);
    // this.navCtrl.navigateBack(['/places/tabs/discover']);
    // this.navCtrl.pop();

    // DO not forget to add into place-details.module
    this.modalCtrl.create({component: CreateBookingComponent}).then(modalEl => {
      modalEl.present();
    });
  }
}
