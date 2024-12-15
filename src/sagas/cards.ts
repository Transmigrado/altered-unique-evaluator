import { takeLatest, all, call, put } from 'redux-saga/effects';
import { collection, addDoc, QuerySnapshot } from 'firebase/firestore';
import * as ReducerCards from '@/lib/features/cards';
import { getCard } from '@/services/cards';
import { Card, CardDb, CardDbResponse } from '@/interfaces/card';
import { firebaseFirestore, firebaseAuth } from '@/lib/firebase';
import { fetchMyCards } from '@/services/firebase/cards';
import { snapshotToArray } from '@/utils/firebase';

function* addCard(action: {type: string, payload: {code: string}}) {
  try {
    const { code } = action.payload

    const userId = firebaseAuth?.currentUser?.uid
    const result: Card = yield call(getCard, code);
    const cardsCollection = collection(firebaseFirestore!, "MyCards")

    const newCard: CardDb = {
      card: result,
      user: {
        name: "Jorge Acosta",
        email: "transmigrado@gmail.com"
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: userId!
  };

    yield call(addDoc, cardsCollection, newCard)

  
  } catch (e) {
    console.log('Error adding card', e);
  }
}

function* fetchCards() {
  try{
    const userId = firebaseAuth?.currentUser?.uid
    const result: QuerySnapshot = yield call(fetchMyCards, userId!)
    const myCards = snapshotToArray<CardDbResponse>(result);
    yield put(ReducerCards.fetchSuccessfull({list: myCards}))
  } catch(e) {

  }
}

function* fetchCardsAction() {
  yield takeLatest(ReducerCards.fetch.type, fetchCards);
}

function* addCardAction() {
  yield takeLatest(ReducerCards.addCard.type, addCard);
}

export default function* cardsActions() {
  yield all([
    addCardAction(),
    fetchCardsAction()
  ]);
}