import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { setApp } from '../../redux/actions';

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

const SelectBox = styled(Select)`
  && {
    color: red;
  }
`;

const SelectLanguage = () => {
  /* eslint-disable react/prop-types */
  const languages = [
    {
      value: `pt_BR`,
      label: `portuguese`,
    },
    {
      value: `en_US`,
      label: `english`,
    },
    {
      value: `es_ES`,
      label: `spanish`,
    },
  ];
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
        <FormControl>
          <InputLabel htmlFor="language">{t(`choose_language`)}</InputLabel>
          <SelectBox
            value={selected}
            onChange={handleChange}
            inputProps={{
              name: `language`,
              id: `language`,
            }}
          >
            {languages.map(item => (
              <MenuItem key={item.label} selected={selected === item.value} value={item.value}>
                {t(item.label)}
              </MenuItem>
            ))}
          </SelectBox>
        </FormControl>
      </Body>
    </Container>
  );
};

export default SelectLanguage;
