import { createContext, useState, useEffect } from "react";
import swal from 'sweetalert';
import axios from "axios";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    // const [show, setShow] = useState(true);
    // const [detail, setDetail] = useState(null);

    const getData = async () => {
        const url = 'https://658c2835859b3491d3f5996e.mockapi.io/Furniture';
        axios.get(url).then((res) => {
            setData(res.data);
        })
        .catch((error) => {
            if(error.response.status === "404") {}
        });
    }
    useEffect(() => {
        if (localStorage.getItem("cart_list")) {
            setCart(JSON.parse(localStorage.getItem("cart_list")));
        }
    }, []);
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {}, [cart]);
    
    const addCart = (id) => {
        let kq = data.find((item) => item.id === id);
        setCart([...cart, {...kq, qty: 1}]);
        localStorage.setItem("cart_list", JSON.stringify([...cart, {...kq, qty: 1}]));
        const index = cart.findIndex((item) => item.id === id);
        if (index >= 0) {
            let newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
            localStorage.setItem("cart_list", JSON.stringify(newList));
        } else {
            setCart([...cart, {...kq, qty: 1}]);
        }
        swal("Add to cart successfully", " ", "success");
    };
    console.log("cart");

    const changeQty = (id, num) => {
        const kq = cart.map((item) => (item.id === id && !(num === -1 && item["qty"] === 1) 
        ? {...item, qty: item["qty"] + num} :item ));
        setCart(kq);
        localStorage.setItem("cart_list", JSON.stringify(kq));
    };

    const removeItem = (id) => {
        const kq = cart.filter((item) => item.id !== id);
        setCart(kq);
        localStorage.setItem("cart_list", JSON.stringify(kq));
    };

    return <AppContext.Provider value={{ cart, data, addCart, changeQty, removeItem }}>{children}</AppContext.Provider>;
}

