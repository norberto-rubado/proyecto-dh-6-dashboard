import React from "react"

import "../App.css"

function ProductRow(props) {

return (

    <div className="product_row_1">

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th className="table-center">Precio</th>
                <th className="table-center">Categoria</th>
                <th className="table-center">Stock</th>
            </tr>
        </thead>
       
        <tbody>
            {props.products_list.map(function(product,i) { 
                return (
                    <tr>
                        <td >{product.name}</td>
                        <td>{product.description}</td>
                        <td className="table-center">${product.price}</td>
                        <td className="table-center">{product.category}</td>
                        <td className="table-center">{product.stock}</td>
                    </tr>
                )
            })}
        </tbody>

    </div>
)}

export default ProductRow