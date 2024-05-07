import { useState } from "react";
import { seats } from "../data/data.json";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tripToBook } from "../redux/actions/actions";

const SeatLayout = (props) => {
  const [loading, setLoading] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectSeats = (e) => {
    setLoading(true);
    e.preventDefault();

    // const formValues = {};
    // const formData = new FormData(e.target);

    // formData.forEach((value) => {
    //   if (value !== "") {
    //     if (!formValues["seats"]) {
    //       formValues["seats"] = [];
    //     }
    //     formValues["seats"].push(value);
    //   }
    // });

    const bookingData = { ...props, selectedSeats };

    dispatch(tripToBook(bookingData));
    navigate("/payment");
    setLoading(false);
  };

  const resetSeatSelection = () => {
    const form = document.getElementById("selectSeats");
    form.reset();
  };

  const handleSelect = (event) => {
    let current = event.target.value;
    if (selectedSeats.includes(current)) {
      setSelectedSeats((selectedSeats) =>
        selectedSeats.filter((item) => item != current)
      );
    } else {
      setSelectedSeats((selectedSeats) => [current, ...selectedSeats]);
    }
  };
  return (
    <section className="border p-4 rounded-md space-y-4 bg-white">
      <div className="flex items-center justify-between">
        <h2 className="w-full">Select seats</h2>
        <Button
          text="Clear Selection"
          onClick={resetSeatSelection}
          className="max-w-max text-xs bg-red-500"
        />
      </div>
      <hr />
      <form id="selectSeats" onSubmit={selectSeats} className="space-y-4">
        <ul className="flex items-center justify-between flex-wrap gap-4">
          {seats.map(({ value }) => (
            <li key={value}>
              <Checkbox
                id={value}
                value={value}
                htmlFor={value}
                label={value}
                name={value}
                onClick={handleSelect}
              />
            </li>
          ))}
        </ul>
        <Button text="Proceed To Book" type="submit" loading={loading} />
      </form>
    </section>
  );
};

export default SeatLayout;
