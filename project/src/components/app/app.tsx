import MainContent from '../main-content/main-content';

type MainFilmProps={
  genre: string;
  release: number;
  promo: string;
}

function App({genre,release,promo}:MainFilmProps): JSX.Element {
  return (
    <MainContent genre={genre} release={release} promo={promo}/>);
}

export default App;
