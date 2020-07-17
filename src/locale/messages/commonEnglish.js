import en from "./en-us";
import mainEn from "../../components/main/main.en-us";
import { LOCALES } from "../locales";

export default {
  [LOCALES.english]: { ...mainEn[LOCALES.english], ...en[LOCALES.english] },
};
