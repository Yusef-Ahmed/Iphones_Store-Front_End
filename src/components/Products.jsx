import { Cards } from "./Cards";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Slider from "@mui/material/Slider";

const maxValue = 20000;

export function Products() {
  const products = useLoaderData();
  const [searchTerm, setSearchTerm] = useState(null);
  const [value, setValue] = useState([0, maxValue]);

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
    <>
      <header className="mt-40">
        <div className="flex items-center justify-between w-11/12 ml-14">
          <section className="w-1/4">
            <input
              className="w-full rounded-lg isolate"
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
              max={maxValue}
              step={50}
            />
          </section>
        </div>
        <Cards products={items} />
      </header>
    </>
  );
}
