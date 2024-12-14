import { takeLatest, all, call } from 'redux-saga/effects';
import * as ReducerCards from '@/lib/features/cards';
import { getCard } from '@/services/cards';
import { Card } from '@/interfaces/card';

function* fetchCard() {
  try {

    const result: Card = yield call(getCard, "ALT_CORE_B_LY_14_U_2674");

    console.log('result', result)
  
  } catch (e) {
    console.log('Error fetching card', e);
  }
}

function* fetchCardAction() {
  yield takeLatest(ReducerCards.fetch.type, fetchCard);
}

export default function* cardsActions() {
  yield all([
    fetchCardAction(),
  ]);
}