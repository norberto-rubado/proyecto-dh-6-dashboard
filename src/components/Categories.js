import {React, useState, useEffect} from "react"

import Category from './Category'

import "../App.css"

function Categories() {

    let [categories, setCategories] = useState([{}])

    useEffect(function () {

        fetch("http://localhost:3001/api/categorias")
        .then(response => response.json())
        .then(json => setCategories(json.data))
		.catch(error => console.log(error))

    } , [])

return (

    <div className="categories_1">

        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorias (Total de Productos)</h6>
                </div>
                <div className="card-body">
                        <Category categories={categories}/>
                </div>
            </div>
        </div>

    </div>
)}

export default Categories