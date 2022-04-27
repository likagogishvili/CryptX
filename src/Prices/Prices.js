import "./PriceStyles/Prices.scss";
import arrow from "./PriceStyles/up-arrow.png";
function Prices(props) {
  let values = [];
  let mktCap = [];
  props.coins.map((data) => {
    values.push(data.total_volume);
    mktCap.push(data.market_cap);
    return 0;
  });
  let valueSum = 0;
  let mktCapSum = 0;
  for (let i = 0; i < values.length; i++) {
    valueSum += values[i];
  }
  for (let i = 0; i < mktCap.length; i++) {
    mktCapSum += mktCap[i];
  }
  return (
    <div className="price">
      <p>Cryptocurrancy Prices By Market Cap</p>
      <div className="priceCont">
        <div>
          <div className="first">
            <p>{mktCapSum}</p>
            <p className="p2">2.3%</p>
            <img src={arrow} alt="" width="8%" height="50%" />
          </div>
          <p>Market Capitalization</p>
        </div>
        <div>
          <p>{valueSum}</p>
          <p>24h Tranding Volume</p>
        </div>
        <div>
          <p>{props.coins.length}</p>
          <p># of Coins</p>
        </div>
      </div>
    </div>
  );
}
export default Prices;
