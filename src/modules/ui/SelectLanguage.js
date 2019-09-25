import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { setApp } from '../../redux/actions';
import { LANGUAGES } from '../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  ${({ color }) => color && `background-color: ${color}`};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SelectLanguage = () => {
  /* eslint-disable react/prop-types */

  const { t } = useTranslation(`language`);
  const dispatch = useDispatch();
  const { language } = useSelector(
    state => ({
      language: state.App.language,
    }),
    shallowEqual,
  );

  const [selected, setSelected] = useState(language);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setSelected(value);
      dispatch(setApp({ language: value }));
    },
    [dispatch],
  );

  return (
    <Container>
      <Body>
        <FormControl fullWidth>
          <InputLabel htmlFor="language">{t(`choose_language`)}</InputLabel>
          <Select
            value={selected}
            onChange={handleChange}
            inputProps={{
              name: `language`,
              id: `language`,
            }}
          >
            {LANGUAGES.map(item => (
              <MenuItem key={item.label} selected={selected === item.value} value={item.value}>
                {t(item.label)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Body>
    </Container>
  );
};

export default SelectLanguage;
