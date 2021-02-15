import React from "react"

import "../App.css"

function Category(props) {
    
return (

    <div className="category_1">

        <div className="row">

                {props.categories.map((category,i) => 

                    
                        <div className="card bg-info text-white shadow card-category ">
                            <div className="card-body" id={category.id + i}>
                                {/* {category.name + " (" + category.count + ")"}  */}
                                <div className="category-numbers">{category.count} </div>
                                <div className= "category-name">{category.name} </div>

                            
                        </div>
                    </div>

                )}    

        </div>
    </div>
)}

export default Category