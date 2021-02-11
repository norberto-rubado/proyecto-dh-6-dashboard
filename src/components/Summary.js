import React from "react"
import PropTypes from "prop-types"

import "../App.css"

function Summary(props) {
return (

    <div className="summary_1">

        <div className="row">

            {props.info_summary.map(info => 

                <div className="col-md-4 mb-4">
{/*                     <div className="card border-left-primary shadow h-100 py-2"> */}
                    <div className= {info.color}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {info.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{info.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className= {info.icono} ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

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