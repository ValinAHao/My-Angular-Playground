import { ActionReducerMap } from '@ngrx/store';
import * as fromSample from '../stores/sample-store/sample.reducers';

export interface AppState {
  sample: fromSample.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  sample: fromSample.sampleReducer,
};
