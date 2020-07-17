import { call, put } from "redux-saga/effects";

export function* setLocalizeInfo(data) {
  console.log("hello", data);
  yield put({ type: "LANGUAGE_CHANGE", payload: data.payload });
}
