import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import { initReactI18next } from 'react-i18next';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';
import 'moment/locale/es';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

const I18nProvider = ({ children }) => {
  const xx = pt;
  const { language } = useSelector(
    state => ({ language: state.App.language, timezoneSTR: state.App.timezoneSTR }),
    shallowEqual,
  );
  i18next.use(initReactI18next).init({
    lng: language,
    fallbackLng: `xx`,
    resources: {
      pt_BR: pt,
      en_US: en,
      en,
      es,
      xx,
    },
  });
  moment.locale(language);
  return <>{children}</>;
};

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default I18nProvider;
