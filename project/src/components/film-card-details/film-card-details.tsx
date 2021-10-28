type FilmCardDetailsProps = {
  name: string
  value: any
}

function FilmCardDetails({name, value}: FilmCardDetailsProps): JSX.Element {
  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{name}</strong>
      <span className="film-card__details-value">{value}</span>
    </p>
  );
}

export default FilmCardDetails;
