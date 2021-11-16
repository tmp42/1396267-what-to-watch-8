import Logo from '../logo/logo';
import React, {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../store/api-actions';
import Footer from '../footer/footer';
import {getAuthorizationStatus} from '../../store/user-data/selector';
import {AuthorizationStatus} from '../../const';
import {useHistory} from 'react-router-dom';
import {validateEmail, validatePassword} from '../../utils/utils';

function LoginScreen(): JSX.Element {
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      history.push('/');
    }
  }, [authorizationStatus, history]);

  const [{isEmailError, isPasswordError}, setIsError] = useState({isEmailError: false, isPasswordError: false});
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setIsError((state) => ({
      ...state, isEmailError: false,
    }));
    const value = e.target.value.trim();
    const isEmailInvalid = !validateEmail(value);
    if (isEmailInvalid) {
      setIsError((state) => ({
        ...state, isEmailError: isEmailInvalid,
      }));
    }
  }

  function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setIsError((state) => ({
      ...state, isPasswordError: false,
    }));
    const value = e.target.value;
    const isPasswordInvalid = !validatePassword(value);
    if (isPasswordInvalid) {
      setIsError((state) => ({
        ...state, isPasswordError: isPasswordInvalid,
      }));
    }
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" action="">
          <div className="sign-in__fields">
            <div className={`sign-in__field ${isEmailError ? 'sign-in__field--error' : ' '}`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} onChange={onEmailChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${isPasswordError ? 'sign-in__field--error' : ' '}`}>
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} onChange={onPasswordChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleClick} disabled={isPasswordError || isEmailError}>Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginScreen;
