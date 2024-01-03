import React, { useState } from 'react'
import { useEffect } from 'react';
//JSON.stringify(): lấy ra kiểu chuỗi
// localStorage.setItem("info", JSON.stringify({...account, name, pass}));

export default function Account() {
const [account, setAccount] = useState({id: 1, name: "", pass: ""});
const [name, setName] = useState("");
const [pass, setPass] = useState("");

useEffect(() => {
    if (localStorage.getItem("info")){
        let x = JSON.parse(localStorage.getItem("info"));
        setAccount(x);
    }
}, []);

function handle_save() {
    setAccount({...account, name, pass});
    localStorage.setItem("info", JSON.stringify({...account, name, pass}))
}

  return (
    <div>
        <h2>Account</h2>
        <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} 
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                setAccount({...account, name});
            }
        }
    }
    /><br/>
        <input placeholder="Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                setAccount({...account, pass});
            }
        }
    }
    /><br/>
    <p>Name: {account.name}, Password: {account.pass}</p>
    <button onClick={handle_save}>Save</button>
    </div>
  )
}
