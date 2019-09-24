export const getBrowserLanguage = () => {
  const currentLocale = navigator.language || navigator.userLanguage;
  const convertedLocale = currentLocale.startsWith(`es`) ? `es` : currentLocale.replace(`-`, `_`);
  return convertedLocale;
};
