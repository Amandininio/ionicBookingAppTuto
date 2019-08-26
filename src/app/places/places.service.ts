import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable(
    {providedIn: 'root'}
)
export class PlacesService {
    // tslint:disable-next-line: max-line-length
    private places: Place[] = [
                                new Place(
                                    'p1',
                                    'Manhattan Mansion',
                                    'In the hearth of NYC',
                                    // tslint:disable-next-line: max-line-length
                                    'https://upload.wikimedia.org/wikipedia/commons/2/26/Midtown_Manhattan_and_Times_Square_district_2015.jpg',
                                    149.99
                                ),
                                new Place(
                                    'p2',
                                    'Lovely nights',
                                    'Au coeur de paris',
                                    'https://image.shutterstock.com/image-photo/summer-travel-vacation-holiday-paris-600w-428591566.jpg',
                                    189.99
                                ),
                                new Place(
                                    'p3',
                                    'Foggy Palace',
                                    'Not your average city trip',
                                    // tslint:disable-next-line: max-line-length
                                    'https://images.unsplash.com/photo-1481991990414-7802ae5de1e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1572&q=80',
                                    99.99
                                ),
                            ];

    getPlace() {
        return [...this.places];
    }
}
