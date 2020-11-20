import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CrudService } from '../../shared-services/crud.service';
import * as SampleActions from './sample.actions';

@Injectable()
export class SampleEffects {

    constructor(private actions$: Actions, private crudService: CrudService, private sanitizer: DomSanitizer) { }

    @Effect()
    getSample = this.actions$.pipe(
        ofType(SampleActions.GET_SAMPLE),
        take(1),
        switchMap(() => {
            return this.crudService.get(`${environment.url}`, null);
        }),
        map(images => {
            const imageUrl = [];
            for (const image of Object.values(images)) {
                imageUrl.push(this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64, ' + image));
            }
            return new SampleActions.SetSample(imageUrl);
        })
    );

}
