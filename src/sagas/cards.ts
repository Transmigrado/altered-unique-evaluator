import { takeLatest, all, call } from 'redux-saga/effects';
import { collection, addDoc } from 'firebase/firestore';
import * as ReducerCards from '@/lib/features/cards';
import { getCard } from '@/services/cards';
import { Card } from '@/interfaces/card';
import { firebaseFirestore } from '@/lib/firebase';


function* addCard(action: {type: string, payload: {code: string}}) {
  try {
    const { code } = action.payload

    
  
    const result: Card = yield call(getCard, code);
    const cardsCollection = collection(firebaseFirestore!, "Cards")

    const newCard = {
      card: result,
      user: {
        name: "Jorge Acosta",
        email: "transmigrado@gmail.com"
      },
      createdAt: new Date(),
      updatedAt: new Date(),
  };

    yield call(addDoc, cardsCollection, newCard)

    console.log('result', result)
  
  } catch (e) {
    console.log('Error fetching card', e);
  }
}

function* addCardAction() {
  yield takeLatest(ReducerCards.addCard.type, addCard);
}

export default function* cardsActions() {
  yield all([
    addCardAction(),
  ]);
}