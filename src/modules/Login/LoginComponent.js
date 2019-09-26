import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import {
  Paper,
  TextField,
  InputAdornment,
  Icon,
  Button,
  FormHelperText,
  FormControl,
} from '@material-ui/core';
import { Formik } from 'formik';
import SelectLanguage from '../ui/SelectLanguage';
import { setApp } from '../../redux/actions';
import { ROUTE } from '../Routes/RoutesMapper';
import { HTTP_STATUS } from '../../constants';

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Login = styled.div`
  width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 20px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Action = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 0 20px;
`;

const MessageError = styled(FormHelperText)`
  && {
    align-self: flex-start;
  }
`;

const validationSchema = () =>
  Yup.object().shape({
    user: Yup.string().required(`required_user`),
    password: Yup.string()
      .min(6, `required_more_than_6`)
      .required(`required_password`),
  });

const RenderMessageError = ({ t, label, errors }) => {
  if (errors[label]) {
    const message = t(`error:${errors[label]}`);
    return <MessageError error>{message}</MessageError>;
  }
  return <></>;
};

RenderMessageError.propTypes = {
  t: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const LoginComponent = ({ history }) => {
  const { t } = useTranslation(`login`);
  const dispatch = useDispatch();

  return (
    <Container>
      <Login id="drag" className="draggable">
        <Body elevation={3}>
          <Formik
            initialValues={{ user: ``, password: `` }}
            validationSchema={validationSchema()}
            onSubmit={async values => {
              const { status } = await fetch(`http://localhost:8002/login`, {
                method: `POST`,
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': `application/json`,
                },
              });
              const isAuth = status === HTTP_STATUS.ACCEPTED;
              dispatch(setApp({ isAuth }));
              if (isAuth) {
                history.push(ROUTE.HOME.PATH);
              }
            }}
            render={({ values, handleSubmit, handleChange, errors }) => (
              <Form>
                <SelectLanguage />

                <FormControl fullWidth>
                  <TextField
                    id="user"
                    label={t(`user`)}
                    value={values.user}
                    onChange={handleChange(`user`)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>call</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <RenderMessageError t={t} label="user" errors={errors} />
                  <TextField
                    id="password"
                    label={t(`password`)}
                    type="password"
                    value={values.password}
                    onChange={handleChange(`password`)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>perm_identity</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <RenderMessageError t={t} label="password" errors={errors} />
                </FormControl>
                <Action>
                  <Button
                    type="button"
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                    fullWidth
                  >
                    Login
                  </Button>
                </Action>
              </Form>
            )}
          />
        </Body>
      </Login>
    </Container>
  );
};

LoginComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginComponent;
