export const FIRST_GENRE = 'All genres';
export const FIRST_COUNT_FILM = 8;

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
  FavouriteFilm='/favorite',
  ChangeFavouriteFilm='/favorite/:id/:status',
  Film = '/films/:id',
  Promo = '/promo',
  Comments = 'comments/:id',
  SimilarFilm = 'films/:id/similar',
  Login = '/login',
  Logout = '/logout',
}
