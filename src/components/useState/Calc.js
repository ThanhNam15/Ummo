import React, {useState} from 'react';

export default function Calc() {
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [year, setYear] = useState("");
const [text, setText] = useState("");
// arrow function ES6
const handle_keyDown = (e) => {
    if (e.key === "Enter") {
      setAge(new Date().getFullYear() - year); 
      setName(text); 
    }
  };

// Spread Operator 
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];
const a1 = {name: "cat", age: 3};
const a2 = {name: "dog", age: 2};
const list = [...q1, ...q2, ...q3, ...q4]; // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(list);

var newObject = {...a1, ...a2}; // {name: "cat", age: 3, name: "dog", age: 2}
console.log(newObject);
console.log({id: 4, name: "cat", age: 3, name: "dog", age: 2, gender: "male"});

newObject = {...a1, name: "chicken"}; // {name: "cat", age: 3, name: "chicken"}
console.log(newObject);

  return (
    //Bài toán nhập tên và năm sinh (hiển thị tên và tuổi)
    <div>
      {/* Tên */}
      <h2>Nhập tên</h2>
      <input 
      type = "text" 
      value = {text} 
      onChange = {(e) => setText(e.target.value)}
      onKeyDown={handle_keyDown}
      /><br/>

      {/* Năm sinh */}
      <h2>Nhập năm sinh</h2>
      <input 
      type = "number" 
      value = {year} 
      onChange = {(e) => setYear(e.target.value)}
      onKeyDown={handle_keyDown}
      /><br/>

      {/* Kết quả */}
      <p>{name && "Tên: " + name}</p>
      <p>{age && "Tuổi: " + age}</p>
         
    </div>
  )
};

//Bài toán cộng trừ nhân chia
    // <div>
    //     <input placeholder = "nhập a"  type = "number" value = {a} onChange={(e) => setA(e.target.value)}/><br/>
    //     <input placeholder = "nhập b" type = "number" value = {b} onChange={(e) => setB(e.target.value)}/><br/>
    //     <button onClick={() => setKq(`${a} + ${b} = ${a*1 + b*1}`)}>Cộng</button>
    //     <button onClick={() => setKq(`${a} - ${b} = ${a*1 - b*1}`)}>Trừ</button>
    //     <button onClick={() => setKq(`${a} x ${b} = ${a*1 * b*1}`)}>Nhân</button>
    //     <button onClick={() => setKq(`${a} : ${b} = ${a*1 / b*1}`)}>Chia</button>
    //     <p>{kq}</p>
    // </div>
  
    // console.log("2" === 2); false, 3 dấu bằng so sánh giá trị và kiểu dữ liệu 
    // console.log("2" == 2); true, 2 dấu bằng so sánh giá trị
  
  