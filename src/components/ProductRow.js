import React from "react"

import "../App.css"

function ProductRow(props) {

return (

    <div className="product_row_1">

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Descuento</th>
                <th>Categoria</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Descuento</th>
                <th>Categoria</th>
                <th>Stock</th>
            </tr>
        </tfoot>
        <tbody>
            {props.products_list.map(function(product,i) { 
                return (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.discount + "%"}</td>
                        <td>{product.category}</td>
                        <td>{product.stock}</td>
                    </tr>
                )
            })}
        </tbody>

    </div>
)}

export default ProductRow