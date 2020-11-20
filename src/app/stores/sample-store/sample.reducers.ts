// import { ICrisprType } from 'src/app/shared/models/crispr-model';
import * as SampleActions from './sample.actions';

export interface State {
    sample: any;
}

const initialState: State = {
  sample: null,
};

export function sampleReducer(state = initialState, action: SampleActions.SampleActionsType) {
    switch (action.type) {
        case SampleActions.SET_SAMPLE:
            return {
                ...state,
                sample: action.payload
            };
        default:
            return state;
    }
}
