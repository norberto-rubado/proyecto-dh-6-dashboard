import React from "react"

import "../App.css"

function Category(props) {
    
return (

    <div className="category_1">

        <div className="row">

                {props.categories.map((category,i) => 

                    <div className="col-lg-4 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body" id={category.id + i}>
                                {category.name + " (" + category.count + ")"} 
                            </div>
                        </div>
                    </div>

                )}    

        </div>
    </div>
)}

export default Category