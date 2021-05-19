import logo from "../logo.svg";

function Header(props) {
  // const city = "Seoul";

  console.log(props);
  const myCity = props.cityName;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>도시는: {myCity} </p>
      <a
        className="App-link"
        href="https://kr.leagueoflegends.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        리그 오브 레전드
      </a>
    </header>
  );
}

export default Header;
