import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, loginAction, fetchFilmsAction, logoutAction} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {State} from '../types/state';
import {requireAuthorization, redirectToRoute, requireLogout, loadFilms} from './action';
import {AuthData} from '../types/auth';
import {createMockFilms} from '../utils/mocks';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      redirectToRoute(AppRoute.MainContent),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('guess-melody-token', 'secret');
  });

  it('should dispatch Load_Questions when GET /questions', async () => {
    const mockFilms = createMockFilms();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilms);

    const store = mockStore();
    await store.dispatch(fetchFilmsAction());

    expect(store.getActions()).toEqual([
      loadFilms(mockFilms),
    ]);
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('guess-melody-token');
  });
});
