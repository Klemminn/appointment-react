import { locale, set as setLocale, t as translate } from "frenchkiss";
import icelandic from "./is-IS.json";

export type Translations = keyof typeof icelandic;

locale("is-IS");

setLocale("is-IS", icelandic);

export const t = (code: Translations) => translate(code);
