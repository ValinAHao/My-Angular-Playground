import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import lozad from 'lozad';
import { Subscription } from 'rxjs';
import * as fromApp from './stores/app.reducer';
import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sampleSub: Subscription;
  errorImage = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage = 'https://www.placecage.com/1000/1000';

  images = [
    'https://images.unsplash.com/photo-1468413922365-e3766a17da9e?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
    'https://images.unsplash.com/photo-1488388373205-a134c1cc7e4e?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
    'https://images.unsplash.com/photo-1422257986712-4f02edc298ce?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80'
  ];

  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {

    // this.store.dispatch(new SampleActions.GetSample());
    // this.sampleSub = thiKs.store.select('sample').subscribe(result => {
    //   if (result) {
    //     this.images = result.sample;
    //     console.log('test', this.images);
    //   }
    // });
  }

}
