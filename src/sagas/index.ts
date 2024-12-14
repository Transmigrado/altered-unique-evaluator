import { all } from 'redux-saga/effects';
import cardsActions from './cards';
import connectActions from './connect';

export default function* rootSaga() {
    yield all([
        cardsActions(),
        connectActions()
    ]);
}
