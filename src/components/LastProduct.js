import {React, useState, useEffect} from "react"

import "../App.css"

function LastProduct() {

    let [lastProduct, setLastProduct] = useState({})

    useEffect(function () {

        fetch("http://localhost:3001/api/productos/1")
        .then(response => response.json())
        .then(json => setLastProduct(json))
		.catch(error => console.log(error))

    } , [])

return (

    <div className="lastproduct_1 container-card">



        <div className="card shadow mb-4 " >
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto Actualizado</h6>
                </div>
                <div className="card-body card-props">
                    <img className="img-last-product"  src={lastProduct.image} alt="dummy"/>
                    <div className="lastproduct-detail">
                        <p className="lastproduct-name">{lastProduct.name}</p>
                        <p className="lastproduct-description">{lastProduct.description}</p>
                        <p className="lastproduct-price">${lastProduct.price}</p>
                        <p>Fecha de creacion: {lastProduct.created_at}</p>
                    </div>
                </div>

        </div>

       

    </div>
)}

export default LastProduct