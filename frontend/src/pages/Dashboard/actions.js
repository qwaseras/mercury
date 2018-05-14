import {
  INCREASE,
  DECREASE,
} from './constants';

export function increase() {
  return (dispatch) => dispatch({type: INCREASE});
}

export function decrease() {
  return (dispatch) => dispatch({type: DECREASE});
}
