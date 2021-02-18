
import {React, useState, useEffect} from "react"
import PropTypes from "prop-types"

import "../App.css"

function Summary(props) {

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
		{titulo:"Productos",cifra:productsCount,color:"card border-left-primary shadow h-100 py-2",icono:"fas fa-gifts fa-2x text-gray-500"},
		{titulo:"Usuarios",cifra:usersCount,color:"card border-left-success shadow h-100 py-2",icono:"fas fa-users fa-2x text-gray-500"},
		{titulo:"Categorias",cifra:categoriesCount,color:"card border-left-warning shadow h-100 py-2",icono:"fas fa-clipboard-list fa-2x text-gray-500"}
	]

return (

     <div>

    <div className= "boton-actualizar">
    <a href="/"><i class="fas fa-sync-alt"></i></a>
</div> 
        
         <div className="summary_1">
         
        <div className="row">

            {info_summary.map(info => 

                <div className="col-md-4 mb-4">
{/*                     <div className="card border-left-primary shadow h-100 py-2"> */}
                    <div className= {info.color}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className= {info.icono} ></i>
                                </div>
                                <div className="col mr-2">
                                   
                                    <div className="cantidades mb-0 font-weight-bold text-gray-800">{info.cifra}</div>
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {info.titulo}</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </div>

    </div>
    </div>
   


)};

Summary.propTypes = {
    titulo: PropTypes.string,
    cifra: PropTypes.string,
    color: PropTypes.string,
    icono: PropTypes.string
};

Summary.defaultProps = {
    titulo: "N/A",
    cifra: "0",
    color: "card border-left-primary shadow h-100 py-2",
    icono: "fas fa-clipboard-list fa-2x text-gray-300"
};

export default Summary