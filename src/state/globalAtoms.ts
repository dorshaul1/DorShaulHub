import { atom } from "jotai";

const storedTheme = localStorage.getItem("appTheme");

const systemLanaguage = atom<TLanguages>("eu");

const appTheme = atom<any>(storedTheme || "dark"); // TODO: set correct type

export const globalAtoms = { systemLanaguage, appTheme };
