//Link CSS

//Cách 1
// import Profile from "./Profile.css"

//Cách 2
import "../css/Profile.css";

function App() {
  let name = "Thành Nam"

  let x= 15;
  let y = 23;

  let arrayFruit = ["lemon", "mango", "apple"];

  
  //1 thành phần
  // return <h1>Hello {name}</h1>
  
  
  // Hàm map: lọc qua từng phần tử
  // Thêm class trong Reactjs dùng className

  //2 thành phần trở lên phải có dấu ngoặc tròn
  return (
    <div>
      <h1 className="test">{x}</h1>
      <h1>Tong: {x + y}</h1>
      <h1>Hello {name}</h1>

      <ul>
        {arrayFruit.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

    </div>
  );

}

export default App;
