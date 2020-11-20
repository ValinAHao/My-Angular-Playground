import { Action } from '@ngrx/store';

export const GET_SAMPLE = '[Sample] Get Sample';
export const SET_SAMPLE = '[Sample] Set Sample';


export class GetSample implements Action {
  readonly type = GET_SAMPLE;
}

export class SetSample implements Action {
  readonly type = SET_SAMPLE;

  constructor(public payload: any[]) { }
}

export type SampleActionsType =
GetSample |
SetSample;

