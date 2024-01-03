import React, { useState } from 'react'

export default function Object() {
const [sv, setSv] = useState({id: 1, name: "Thành Nam", age: "20"});
const [age, setAge] = useState("");
const [text, setText] = useState("");
function handle_load() {
    let x = localStorage.getItem("info");
    console.log(x);
}
  return (
    
    <div>
        <button onClick={handle_load}>Load</button><br/>
    {/* Name */}
        <input type="text" placeholder="Nhập tên" value={text} onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                setSv({...sv, text});
            }
        }
    }/><br/>

    {/* Age */}
        <input type="number" placeholder="Nhập tuổi" value={age} onChange={(e) => setAge(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                setSv({...sv, age});
                // cú pháp lưu trữ
                localStorage.setItem("info", text + " " + age, age)
            }
        }
    }/><br/>
    
    <p>Name: {sv.name}</p>
    <p>Tuổi: {sv.age}</p>    
    </div>
  )
}
