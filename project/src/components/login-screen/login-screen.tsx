import Logo from '../logo/logo';
import {useRef, MouseEvent} from 'react';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/api-actions';

function LoginScreen(): JSX.Element {
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

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" action="">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleClick}>Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isFooter={false}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginScreen;
