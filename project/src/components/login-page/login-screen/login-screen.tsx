import Logo from '../../general/logo/logo';
import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../../store/api-actions';
import Footer from '../../general/footer/footer';
import {getAuthorizationStatus} from '../../../store/user-data/selector';
import {AuthorizationStatus} from '../../../const';
import {useHistory} from 'react-router-dom';

export type FieldProps = {
  hasError: boolean;
  type: string;
  onChange: (value: string) => void;
  value: string;
  name: string;
}

function Field({hasError, onChange, type, value, name}: FieldProps) {
  const handleChangeField = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt.target.value);

  return (
    <div className={`sign-in__field ${hasError ? 'sign-in__field--error' : ' '}`}>
      <input className="sign-in__input" type={type} placeholder={name} name={`user-${name}`} id={`user-${name}`} onChange={handleChangeField}/>
      <label className="sign-in__label visually-hidden" htmlFor={`user-${name}`}>{name}</label>
    </div>
  );
}

export const validateEmail = (email: string): boolean => email.length > 0
  && /.+?@.+?\..+/.test(email);


export const validatePassword = (password: string): boolean => password.length > 2
  && /[a-z]+?/i.test(password)
  && /\d+?/.test(password);

function LoginScreen(): JSX.Element {
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      history.push('/');
    }
  }, [authorizationStatus, history]);

  const dispatch = useDispatch();

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();

    if (email !== null && password !== null) {
      dispatch(loginAction({
        login: email,
        password: password,
      }));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" action="">
          <div className="sign-in__fields">
            <Field type="email" value={email} onChange={setEmail} hasError={!validateEmail(email)} name={'email'}/>
            <Field type="password" value={password} onChange={setPassword} hasError={!validatePassword(password)} name={'password'}/>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleClick} disabled={!validateEmail(email) || !validatePassword(password)}>Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginScreen;
