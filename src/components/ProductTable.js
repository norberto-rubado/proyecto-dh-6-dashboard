import {React, useState, useEffect} from "react"

import ProductRow from './ProductRow'

import "../App.css"

function ProductTable() {

    let [products, setProducts] = useState([])

    useEffect(function () {
        fetch("http://localhost:3001/api/productos")
        .then(response => response.json())
        .then(json => setProducts(json.products))
        .catch(error => console.log("1",error))
    } , [])
  
return (

    <div className="product_table_1">

        <h1 className="h3 mb-4 text-gray-800">Productos Habilitados</h1>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">

                            <ProductRow products_list = {products}/>

                        </table>
                    </div>
                </div>
            </div>
     
    </div>
)}

export default ProductTable