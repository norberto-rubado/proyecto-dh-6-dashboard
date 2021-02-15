import React from "react"
import logo from '../logo-reegalo-blue.png'


import "../App.css"

function PageHeader() {
return (

    <header class="navigation">
    <div class="container-header">
        <div class="container-header-der">
            <a href="/" class="logo">
                <div className="image-container">
					<img src={logo} alt="Reegalo" class="logo-navigation"/>
                </div>
				</a>
				<div className="container-title">
				<h1 className="title-dash h3 text-gray-800">Dashboard</h1>
				</div>
            
		</div>
	</div>    
	</header> 

    )}

export default PageHeader