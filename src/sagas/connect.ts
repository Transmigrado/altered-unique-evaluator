import { takeLatest, all, call } from 'redux-saga/effects';
import * as ReducerConnect from '@/lib/features/connect';
import { signInWithEmailAndPassword, UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '@/lib/firebase';

function* connectEmail(action: {type: string, payload: {email: string, password: string}}) {
  try {

    const { email, password } = action.payload;

    const userCredential: UserCredential = yield call(signInWithEmailAndPassword, firebaseAuth!, email, password);


    const user = userCredential.user;
    console.log('Usuario autenticado:', user);


   
  } catch (e) {
    console.log('Error fetching card', e);
  }
}



function* createAccountByEmail(action: {type: string, payload: {email: string, password: string}}) {
  try {

    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(createUserWithEmailAndPassword, firebaseAuth!, email, password);

    const user = userCredential.user;
    console.log('Usuario autenticado:', user);

   
  } catch (e) {
    console.log('Error fetching card', e);
  }
}

function* createAccountByEmailAction() {
  yield takeLatest(ReducerConnect.createAccount.type, createAccountByEmail);
}

function* connectEmailAction() {
  yield takeLatest(ReducerConnect.signIn.type, connectEmail);
}

export default function* connectActions() {
  yield all([
    connectEmailAction(),
    createAccountByEmailAction()
  ]);
}