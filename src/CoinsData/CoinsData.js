import Headers from "../Headers/Headers";
import MainContent from "../MainContent/MainContent";
import Axios from "axios";
import { useEffect, useState } from "react";
import Prices from "../Prices/Prices";
import "./SearchStyles/SearchBar.scss";

function CoinsData() {
  let ind = 1;
  const link =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [minPriceValue, setminPriceValue] = useState("");
  const [maxPriceValue, setmaxPriceValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [orderPlaceHolder, setOrderPlaceHolder] = useState("ORDER");


  useEffect(() => {
    Axios.get(link)
      .then((res) => {
        const data = res.data;
        setCoins(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // DESC ASC

  const sortData = (col) => {
    if (selectedValue === "ASC") {
      const sorted = [...coins].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setCoins(sorted);
      setSelectedValue("");
      setOrderPlaceHolder("ASC")
    }
    if (selectedValue === "DESC") {
      const sorted = [...coins].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setCoins(sorted);
      setSelectedValue("");
      setOrderPlaceHolder("DESC")
    }
  };

  const rendCoin = coins
    .filter((data) => {
      if (searchByName === "") {
        return data;
      }
      if (
        data.name.toLowerCase().includes(searchByName.toLowerCase()) ||
        data.symbol.toLowerCase().includes(searchByName.toLowerCase())
      ) {
        return data;
      }
      return 0;
    })
    .filter((data) => {
      if (minPriceValue === "") {
        return data;
      }
      if (minPriceValue <= data.current_price) {
        return data;
      }
      return 0;
    })
    .filter((data) => {
      if (maxPriceValue === "") {
        return data;
      }
      if (maxPriceValue >= data.current_price) {
        return data;
      }
      return 0;
    })
    .map((data) => {
      return <MainContent index={ind++} key={data.id} data={data} />;
    });

  return (
    <div>
      <Prices coins={coins} />
      <div className="searchBar">
        <select
          id="sorting"
          value={selectedValue}
          onChange={(event) => {
            setSelectedValue(event.target.value);
          }}
        >
          <option value="" disabled>
            {orderPlaceHolder}
          </option>
          <option value="ASC" onClick={sortData("name")}>
            ASC
          </option>
          <option value="DESC">DESC</option>
        </select>
        <input
          type="search"
          name="name"
          placeholder="Search by coin"
          onChange={(event) => {
            setSearchByName(event.target.value);
          }}
        />
        <input
          type="number"
          name="name"
          placeholder="Price from"
          onChange={(event) => {
            setminPriceValue(event.target.value);
          }}
        />
        <input
          type="number"
          name="name"
          placeholder="Price to"
          onChange={(event) => {
            setmaxPriceValue(event.target.value);
          }}
        />
      </div>
      <Headers />
      {rendCoin}
    </div>
  );
}
export default CoinsData;
