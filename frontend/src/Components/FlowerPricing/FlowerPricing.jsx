import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../../Context/Context'
import "./_FlowerPricing.scss"
import { AiFillDelete } from "react-icons/ai"
const FlowerPricing = () => {
    const { data, search, deleteData,sortData } = useContext(mainContext)
    return (
        <div className='flowerPricing'>
            <div className="container-fluid">
                <div className="flowerPricingTitle col-6">
                    <h3>Devoted to wonderful beauty</h3>
                    <h1>Flowers Pricing</h1>
                    <button onClick={sortData} >Filter for price</button>
                </div>
                <div className="row">
                    {data && data
                        .filter((product) => (
                            search.trim().toUpperCase() ? product : product.name.toLowerCase().includes(search.toLowerCase())
                        ))
                        .map((e, index) => (
                            <div className="col-3 card" key={index}>
                                <div className='cardImage'>
                                    <img src={e.url} alt="" />
                                </div>
                                <h3>{e.name}</h3>
                                <h4>{e.price}</h4>
                                <div className='deleteButton'>
                                    <AiFillDelete onClick={() => deleteData(e._id)} />
                                </div>
                            </div>
                        ))}
                </div>


            </div>
        </div>
    )
}

export default FlowerPricing