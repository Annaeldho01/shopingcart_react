import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>fetchData(),[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card">
                                        <img height="300px" src={value.image} className="card-img-top" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.id}</h5>
                                                <p className="card-text">{value.title}</p>
                                                <p className="card-text">{value.price}</p>
                                                <p className="card-text">{value.rating.rate}</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                            </div>
                        </div>
                        }

                    )
                       
                    }
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}


export default ViewAll