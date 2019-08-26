import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor(private router: ActivatedRoute,
              private navCtrl: NavController,
              private placeService: PlacesService,
              private  modalCtrl: ModalController) { }
    place: Place;

    ngOnInit() {
      this.router.paramMap.subscribe(paramMap => {
        if (!paramMap.has('placeId')) {
          this.navCtrl.navigateBack('/place/tabs/discover');
          return;
        }
        this.place = this.placeService.getPlaceInUrl(paramMap.get('placeId'));
      });

      // })
    }
  onBook() {
    // this.router.navigate(['/places/tabs/discover']);
    // this.navCtrl.navigateBack(['/places/tabs/discover']);
    // this.navCtrl.pop();

    // DO not forget to add into place-details.module
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    })
      .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
      }).then (resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('Booked !!');
        }
      })
      ;

  }
}
