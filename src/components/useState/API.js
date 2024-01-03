import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function API() {
    const [list, setList] = useState([])
    const link = "https://658c2835859b3491d3f5996e.mockapi.io/list";
    useEffect(() => {
        axios.get(link).then(function(res) {
        console.log(res.data);
        setList(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
  return (
    <div>
        {list.map((item, index) => (
            <div key={index}>{item.id}, {item.name}, {item.country}</div>
        ))}
    </div>
  )
}
