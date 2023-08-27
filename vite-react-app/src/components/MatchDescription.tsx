// ***3/4
function MatchDescription({ children, link, ratings, timestamp }) {
  return (
    <>
      <h2>{children}</h2>
      <p>
        <a href={link}>NJPW World Link</a>
      </p>
      {timestamp && <p>Timestamp: {timestamp} </p>}
      <p>WON Rating: {ratings.WON}</p>
      <p>CageMatch: {ratings.cagematch}</p>
    </>
  );
}

export default MatchDescription;
