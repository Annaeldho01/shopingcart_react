import axios from 'axios'
import React, { useState } from 'react'

const ViewProduct = () => {
    const [data, changeData] = useState(
        {
  "products":[]
 
}
    )
const fetchData=()=>{
    axios.get("https://dummyjson.com/products").then(
        (response)=>{
            changeData(()=>fetchData(),[])
        }
    ).catch().finally()
}
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {data.products.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card">
                                        <img src={value.images} className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="card-title"><value className="id"></value></h5>
                                            <p className="card-text">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                                }
                                    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct