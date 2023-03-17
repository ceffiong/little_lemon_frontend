import "./BookingForm.css";
import TimeIcon from "../Images/time-icon.png";
import { useState } from "react";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [dinners, setDinners] = useState("2 persons");
  const [occasion, setOccasion] = useState("Birthday");
  const [seatOption, setSeatOption] = useState("Standard");
  const [request, setRequest] = useState("");
  const [msg, setMsg] = useState({ error: true, text: "" });

  /*const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);*/
  const [numDinners] = useState([
    "2 persons",
    "4 persons",
    "6 persons",
    "8 persons",
    "10 persons",
  ]);

  const [events] = useState(["Birthday", "Engagement", "Anniversary", "Other"]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (date === "") {
      setMsg({
        error: true,
        text: "Please select a valid date.",
      });
      return;
    }

    if (msg.error === true) {
      return;
    }

    //submit form
    const formData = {
      date: date,
      time: time,
      dinners: dinners,
      occasion: occasion,
      seatOption: seatOption,
      request: request,
    };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    if (e.target.value === "") {
      setMsg({
        error: true,
        text: "Please select a valid date.",
      });
    } else if (new Date(e.target.value) <= new Date()) {
      setMsg({
        error: true,
        text: "Booking date must be greater than current date.",
      });
    } else {
      setMsg({
        error: false,
        text: "",
      });
      updateTimes(e.target.value);
    }

    setDate(e.target.value);
  };

  return (
    <section className="wrapper">
      <div className="booking-form-heading">
        <h3>Book a Table</h3>
        <p>Step 1 of 2</p>
      </div>
      <form className="booking-form" onSubmit={handleFormSubmission}>
        <div>
          <div className="form-div">
            <label htmlFor="res-date">Date</label>
            <input
              data-testid="res-date"
              type="date"
              id="res-date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
            {msg.error === true && (
              <small data-testid="res-time-msg">{msg.text}</small>
            )}
          </div>

          <div className="form-div">
            <label htmlFor="res-time">Time</label>
            <select
              data-testid="res-time"
              id="res-time "
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {/*<small>Time field is required</small>*/}
          </div>
        </div>
        <div>
          <div className="form-div">
            <label htmlFor="res-dinners">Number of dinners</label>
            <select
              id="res-dinners"
              name="dinners"
              value={dinners}
              onChange={(e) => setDinners(e.target.value)}
            >
              {numDinners.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {/*<small>Dinners field is required</small> */}
          </div>
          <div className="form-div">
            <label htmlFor="res-occasion">Occasion</label>
            <select
              id="res-occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              {events.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {/*<small>Occasion field is required</small> */}
          </div>
        </div>

        <div>
          <div className="form-div seating-option">
            <label htmlFor="res-seat">Seating option</label>
            <div>
              <input
                checked
                type="radio"
                id="standard"
                name="seat"
                value="Standard"
                onChange={(e) => setSeatOption(e.target.value)}
              />
              <label htmlFor="standard">Standard</label>
            </div>
            <div>
              <input
                type="radio"
                id="outside"
                name="seat"
                value="Outside"
                onChange={(e) => setSeatOption(e.target.value)}
              />
              <label htmlFor="outside">Outside</label>
            </div>
            {/*<small>Seating option is required</small> */}
          </div>
          <div className="form-div">
            <label htmlFor="res-comment">
              Request <span>(request)</span>
            </label>
            <textarea
              rows="10"
              id="res-comment"
              placeholder="Type in additional request here"
              onChange={(e) => setRequest(e.target.value)}
            />
          </div>
        </div>

        <input
          className={msg.error ? "submit-btn-disabled" : "submit-btn"}
          type="submit"
          value="Submit"
          disabled={msg.error}
          aria-label="On Click"
        />
      </form>
    </section>
  );
}

export default BookingForm;
