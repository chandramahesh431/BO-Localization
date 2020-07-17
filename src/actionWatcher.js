import { takeLatest } from "redux-saga/effects";
import { setLocalizeInfo } from "./sagas/localizeSaga";

export default function* actionWatcher() {
  yield takeLatest("LOCALIZE_INFO", setLocalizeInfo);
}
