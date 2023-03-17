import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./Components/BookingForm";
import bookingReducer from "./Reducer/bookingReducer";
import React from "react";
import { fetchAPI, submitAPI } from "./Utils/api";

test("renders Date, Time, Number of dinners and Occasion form labels", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(
    <BrowserRouter>
      <BookingForm availableTimes={availableTimes} />
    </BrowserRouter>
  );
  const date = screen.getByText(/Date/);
  const time = screen.getByText(/Time/);
  const dinners = screen.getByText(/Number of dinners/);
  const occasion = screen.getByText(/Occasion/);
  expect(date).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(dinners).toBeInTheDocument();
  expect(occasion).toBeInTheDocument();
});

test("Test updateTimes function", () => {
  //Get booking times base on a different date
  const updatedTimes = fetchAPI(new Date("2024-01-2"));
  expect(updatedTimes.length).toBeGreaterThan(0);
});

test("Test BookingForm submission", () => {
  const availableTimes = fetchAPI(new Date());
  const updateTimes = () => {
    return availableTimes;
  };
  const submitForm = () => {
    const formData = {
      date: "2023-03-29",
      dinner: "6 persons",
      occasion: "Other",
      request: "",
      seatOption: "Standard",
      time: "19:30",
    };
    return submitAPI(formData);
  };

  const handleFormSubmission = jest.fn();

  const { getByTestId } = render(
    <BrowserRouter>
      <BookingForm
        onSubmit={handleFormSubmission}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </BrowserRouter>
  );

  const dateInput = screen.getByLabelText(/Date/);
  const timeSelect = getByTestId("res-time");
  const dinnersSelect = screen.getByLabelText(/Number of dinners/);
  const occasionSelect = screen.getByLabelText(/Occasion/);
  const seatingRadio = screen.getByLabelText(/Outside/);
  const submitButton = screen.getByRole("button");

  fireEvent.change(dateInput, { target: { value: "2024-10-22" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.change(dinnersSelect, { target: { value: "4 persons" } });
  fireEvent.change(occasionSelect, { target: { value: "Engagement" } });
  fireEvent.click(seatingRadio);
  fireEvent.click(submitButton);

  expect(handleFormSubmission).not.toHaveBeenCalled();
  expect(submitButton).not.toHaveAttribute("disabled");
});

test("Write to localstorage", () => {
  const formData = {
    date: "2023-03-29",
    dinner: "6 persons",
    occasion: "Other",
    request: "",
    seatOption: "Standard",
    time: "19:30",
  };
  const result = submitAPI(formData);
  if (result === true) {
    //store data in loca storage
    let existingBookings = JSON.parse(
      localStorage.getItem("charles-little-lemon-bookings-data")
    );
    if (existingBookings) {
      existingBookings.unshiftl(formData);
      localStorage.setItem(
        "charles-little-lemon-bookings-data",
        JSON.stringify(existingBookings)
      );
    } else {
      localStorage.setItem(
        "charles-little-lemon-bookings-data",
        JSON.stringify([formData])
      );
    }
  }

  let existingBookings = JSON.parse(
    localStorage.getItem("charles-little-lemon-bookings-data")
  );
  expect(existingBookings.length).toBeGreaterThan(0);
});

test("Read from localstorage", () => {
  let existingBookings = JSON.parse(
    localStorage.getItem("charles-little-lemon-bookings-data")
  );
  expect(existingBookings.length).toBeGreaterThan(0);
});
