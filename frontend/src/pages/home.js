/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Login from "./login";
import Register from "./signUp";

const Home = () => {
    const [page, setPage] = useState("login")
    const setComponent = (val) => {
        setPage(val)
    }
    return (
        <div className="home mx-2 mb-3">
            <div className="row d-flex flex-wrap justify-content-between m-0">
               
                <div className="col-lg-3 mx-auto mt-5">
                    {page === "login" ?
                        <Login setComponent={setComponent} />
                        : <Register setComponent={setComponent} />}
                </div>
            </div>
        </div>
    );
}

export default Home;