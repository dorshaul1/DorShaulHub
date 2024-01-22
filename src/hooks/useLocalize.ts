import { globalAtoms } from "../state/globalAtoms";

export const useLocalize = (messages: any) => {
  const { systemLanguage }: any = globalAtoms;
  console.log(
    "🚀 ~ file: useLocalize.ts:5 ~ useLocalize ~ systemLanguage:",
    systemLanguage
  );

  // const systemLanguageValue: TLanguages = systemLanguage.read();

  // const localizeMessages = (messages: any): any => {
  //   const localizedMessages: Record<string, any> = {};
  //   Object.keys(messages).forEach((key) => {
  //     const message = messages[key];
  //     if (typeof message === "object") {
  //       localizedMessages[key] = localizeMessages(message);
  //     } else {
  //       localizedMessages[key] = message[systemLanguageValue] || message.en;
  //     }
  //   });
  //   return localizedMessages;
  // };

  // return localizeMessages(messages);
};
