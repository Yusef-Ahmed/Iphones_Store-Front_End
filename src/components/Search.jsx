import { useState } from "react";
import { Cards } from "./Cards";
import Slider from "@mui/material/Slider";

export function Search({ products }) {
  const [searchTerm, setSearchTerm] = useState(null);
  const [value, setValue] = useState([0, 1500]);

  const items = products.filter(
    (item) =>
      (!searchTerm ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        item.price <= value[1] &&
        item.price >= value[0]
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function valuetext(value) {
    return `${value}`;
  }

  function handleChangeSlider(event) {
    setValue(event.target.value);
  }

  return (
    <header className="mt-40">
      <div className="ml-14 w-11/12 flex justify-between items-center">
        <section className="w-1/4">
          <input
            className="rounded-lg w-full isolate"
            placeholder="Search"
            onChange={handleChange}
          ></input>
        </section>
        <section className="w-1/4">
          <label>
            <strong>Price</strong> <br /> {value[0]} USD – {value[1]} USD
          </label>
          <Slider
            className="mt-5"
            value={value}
            onChange={handleChangeSlider}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            max={1500}
            step={50}
          />
        </section>
      </div>
      <Cards products={items} />
    </header>
  );
}
