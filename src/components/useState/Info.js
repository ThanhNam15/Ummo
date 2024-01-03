import React, { useState } from "react";
import "../../css/UseState.css"

export default function Info() {
const [name, setName] = useState(" ");
const [age, setAge] = useState(" ");
const [date, setDate] = useState(" ");
function handle_name(e) {
    setName(e.target.value); //name = e.target.value
}

function handle_age(e) {
  setAge(e.target.value); //age = e.target.value
}

function handle_date(e) {
  setDate(e.target.value); //date = e.target.value
}
  return (
      <div className="list">
          <h1>Nhập tên:</h1>
          <input type = "text" value = {name} onChange={handle_name} />
          <p>Name: {name}</p>
          <h1>Nhập tuổi</h1>
          <input type = "text" value = {age} onChange={handle_age} />
          <p>Age: {age}</p>
          <h1>Nhập ngày tháng năm:</h1>
          <input type = "date" value = {date} onChange={handle_date} />
          <p>Date: {date}</p>
      </div>
  )
}
