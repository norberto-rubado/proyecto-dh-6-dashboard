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

    <div className="lastproduct_1">

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto Actualizado</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={lastProduct.image} alt="dummy"/>
                    </div>
                    <p>{lastProduct.description}</p>
                    <a target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>

    </div>
)}

export default LastProduct