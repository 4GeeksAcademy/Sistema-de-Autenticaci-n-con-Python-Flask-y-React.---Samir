import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Congrats = () => {
	const {store, actions}=useContext(Context)
	const navigate = useNavigate();

	return (
		<div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h2 className="card-title text-center">Felicidades!</h2>
              <p className="card-text text-center">¡Has iniciado sesión con éxito!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default Congrats;