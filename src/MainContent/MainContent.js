import CoinsChart from "./CoinsChart";
import "./MainContentStyles/MainContent.scss";
import star from "./MainContentStyles/star.png";

function MainContent(props) {
  return (
    <div className="mainContent">
      <div className="index">
        <p>{props.index}</p>
        <img src={star} alt="" width="10%" height="100%" />
      </div>
      <div className="name">
        <img src={props.data.image} alt="" />
        <p>{props.data.name}</p>
      </div>
      <div className="symbol">
        <p>{props.data.symbol}</p> <p>{props.data.total_supply ? "Buy" : ""}</p>
      </div>
      <div className="current_price">${props.data.current_price}</div>
      <div
        className="hourPrice"
        style={{
          color:
            Math.round((props.data.price_change_percentage_24h / 24) * 10) /
              10 >=
            0
              ? "#92C63B"
              : "#DC6969",
        }}
      >
        {Math.round((props.data.price_change_percentage_24h / 24) * 10) / 10}
      </div>
      <div
        className="hour_24Price"
        style={{
          color:
            Math.round(props.data.price_change_percentage_24h * 10) / 10 >= 0
              ? "#92C63B"
              : "#DC6969",
        }}
      >
        {Math.round(props.data.price_change_percentage_24h * 10) / 10}%
      </div>
      <div
        className="sevenDayPrice"
        style={{
          color:
            Math.round(props.data.price_change_percentage_24h * 7 * 10) / 10 >=
            0
              ? "#92C63B"
              : "#DC6969",
        }}
      >
        {Math.round(props.data.price_change_percentage_24h * 7 * 10) / 10}%
      </div>
      <div className="volume">${props.data.total_volume}</div>
      <div className="mktCap">${props.data.market_cap}</div>
      <CoinsChart data={props.data} />
    </div>
  );
}

export default MainContent;
