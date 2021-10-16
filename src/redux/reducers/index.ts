import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {cardsReducer} from './cards';
import {profileReducer} from './profile';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkingAccountReducer} from './checking-account';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['cards', 'checkingAccount'],
};

const reducers = combineReducers({
  auth: authReducer,
  cards: cardsReducer,
  profile: profileReducer,
  checkingAccount: checkingAccountReducer,
});
export const persistReducers = persistReducer(persistConfig, reducers);

export type State = ReturnType<typeof reducers>;
