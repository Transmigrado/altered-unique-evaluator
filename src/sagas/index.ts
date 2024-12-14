import { all } from 'redux-saga/effects';
import cardsActions from './cards';

export default function* rootSaga() {
    yield all([
        cardsActions()
    ]);
}
