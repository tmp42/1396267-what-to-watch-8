import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-data/selector';

function LoginButton(): JSX.Element {
  const dispath = useDispatch();
  const authStatus = useSelector(getAuthorizationStatus);

  const onClick = () => {
    dispath(logoutAction());
  };

  return (
    <ul className="user-block">
      {authStatus === AuthorizationStatus.Auth ?
        <li className="user-block__item">
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </Link>
        </li>
        :
        <>
        </>}
      <li className="user-block__item">
        {authStatus === AuthorizationStatus.Auth ?
          <p className="user-block__link" onClick={onClick}>Sign out</p>
          :
          <Link className="user-block__link" to="/login/"> Sign in</Link>}
      </li>
    </ul>
  );
}

export default LoginButton;
