import {
  AuthActionType,
  VideoCardsType,
  ProfileActionType,
} from '../action-types';
import {Dispatch} from 'redux';
import {AuthAction} from '../actions';
import {ProfileType} from '../reducers/profile';

export const signInActionCreator = (
  email: string,
  password: string,
  signInService: (email: string, password: string) => Promise<string>,
) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionType.LOGGING});
    const res = await signInService(email, password);
    dispatch({type: AuthActionType.SIGNIN, payload: res});
  };
};

export const signOutActionCreator = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: AuthActionType.SIGNOUT});
  };
};

export const playActionCreator = (videoCardIndex: number) => {
  return {type: VideoCardsType.PLAY, payload: videoCardIndex};
};

export const pauseActionCreator = (videoCardIndex: number) => {
  return {type: VideoCardsType.PAUSE, payload: videoCardIndex};
};

export const updateProfileDataActionCreator = (newData: ProfileType) => {
  return {type: ProfileActionType.UPDATE, payload: newData};
};
