import React from "react"

import LastProduct from './LastProduct'
import Categories from './Categories'

import "../App.css"

function LastProductCategories() {
return (

    <div className="lastproduct_categories_1">

        <div className="row">
{/* 		<!-- Last Product in DB --> */}
            <LastProduct/>

{/* 		<!-- Categories in DB --> */}
            <Categories/>
        </div>
    </div>
)}

export default LastProductCategories