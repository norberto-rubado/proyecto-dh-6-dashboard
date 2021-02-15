import {React, useState, useEffect} from "react"


import Summary from './Summary'
import PageHeader from './PageHeader'
import LastProductCategories from './LastProductCategories'
import ProductTable from './ProductTable'
import logo from '../logo-reegalo-blue.png'



import "../App.css"

function Body() {

	let [productsCount, setProductsCount] = useState(0)
	let [usersCount, setUsersCount] = useState(0)
	let [categoriesCount, setCategoriesCount] = useState(0)

    useEffect(function () {

        fetch("http://localhost:3001/api/productos")
        .then(response => response.json())
        .then(json => setProductsCount(json.count))
		.catch(error => console.log(error))

		fetch("http://localhost:3001/api/usuarios")
        .then(response => response.json())
        .then(json => setUsersCount(json.meta.count))
		.catch(error => console.log(error))

		fetch("http://localhost:3001/api/categorias")
        .then(response => response.json())
        .then(json => setCategoriesCount(json.meta.count))
		.catch(error => console.log(error))

    } , [])

	let info_summary = [
		{titulo:"Cantidad de Productos",cifra:productsCount,color:"card border-left-primary shadow h-100 py-2",icono:"fas fa-clipboard-list fa-2x text-gray-300"},
		{titulo:"Cantidad de Usuarios",cifra:usersCount,color:"card border-left-success shadow h-100 py-2",icono:"fas fa-clipboard-list fa-2x text-gray-300"},
		{titulo:"Cantidad de Categorias",cifra:categoriesCount,color:"card border-left-warning shadow h-100 py-2",icono:"fas fa-clipboard-list fa-2x text-gray-300"}
	]
	
return (

    <div className="body_1">

		<body>
			<div id="wrapper">

	

	{/* 		<!-- Content Wrapper --> */}
				<div id="content-wrapper" className="d-flex flex-column">

	{/* 			<!-- Main Content --> */}
					<div id="content">

	<header class="navigation">
    <div class="container-header">
        <div class="container-header-izq">
            <a href="/" class="logo">
                <div>
					<img src={logo} alt="Reegalo" class="logo-navigation"/>
                </div>
            </a>
		</div>
	</div>    
	</header> 


	{/* 				<!-- Begin Page Content --> */}
						<div className="container-fluid">

	{/* 					<!-- Page Heading --> */}
							<PageHeader/>

	{/* 					<!-- Content Row --> */}
							<Summary info_summary={info_summary}/>

	{/* 					<!-- Content Row --> */}
							<LastProductCategories/>

	{/* 					<!-- PRODUCTS LIST --> */}
						
							<ProductTable/>
	{/* 					<!-- DataTales Example --> */}
						</div>
	{/* 				<!-- /.container-fluid --> */}
					</div>
	{/* 			<!-- End of Main Content --> */}
				</div>
	{/* 		<!-- End of Content Wrapper --> */}
			</div>
	{/* 	<!-- End of Page Wrapper --> */}

		</body>

    </div>
)}

export default Body