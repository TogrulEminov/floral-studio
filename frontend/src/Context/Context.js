import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const mainContext = createContext(null)
function Context({ children }) {
    const [data, setData] = useState(null)
    const [search, setSearch] = useState('')
    const [input, setInput] = useState({
        name: "",
        price: "",
        url: ""
    })
    const [open, setOpen] = useState(false)
    const [sorted, setSorted] = useState({ sorted: "price", reversed: false })

    const openInput = () => {
        setOpen(!open)
    }

    const sortData = () => {
        setSorted({ sorted: "price", reversed: !sorted.reversed })
        const dataCopy = [...data]
        dataCopy.sort((a, b) => {
            if (sorted.reversed) {
                return a.price - b.price
            }
            return b.price - a.price
        })
        setData(dataCopy)
    }

    const searchData = (e) => {
        setSearch(e.target.value)
    }
    const url = `http://localhost:8080/flowers${search}`
    const getData = async () => {
        const response = await axios.get(url)
        setData(response.data)
    }
    useEffect(() => {
        getData()
    }, [])

    const changeInput = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }
    console.log(input);


    const postData = () => {
        if (input.name.trim()=="" || input.price.trim()=="" || input.url.trim()=="") return
        axios.post("http://localhost:8080/flowers", input)
        setInput({
            name: "",
            price: "",
            url: ""
        })
        getData()
    }

    console.log(postData);


    console.log(data);
    const deleteData = (index) => {
        axios.delete(`http://localhost:8080/flowers/${index}`)
        getData()
    }

    const values = {
        data, setData, input, setInput, deleteData, postData, changeInput, searchData, open, openInput, sortData, search
    }

    return (
        <mainContext.Provider value={values}>
            {children}
        </mainContext.Provider>
    )
}

export default Context