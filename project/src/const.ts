export const FIRST_GENRE = 'All genres';
export const FIRST_COUNT_FILM = 8;
export const MAX_RATING = 10;
export const MAX_ITEM_SPINNER = 10;

export enum AppRoute {
  MainContent = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  FavoriteFilm = '/favorite',
  ChangeFavoriteFilm = '/favorite/:id/:status',
  Film = '/films/:id',
  Promo = '/promo',
  Comments = 'comments/:id',
  SimilarFilm = 'films/:id/similar',
  Login = '/login',
  Logout = '/logout',
}
