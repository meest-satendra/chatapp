import React, { Component } from 'react'
import { Link, } from 'react-router-dom';
import Login from './Login';


const Headers = () => {
    const adminLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('tokens');
        this.props.history.push('/Admin');
    }
    localStorage.setItem(token, 'jlskdfjalskfjlksadfjlasjflkasdflksadjf')
    var token = localStorage.getItem('token')

    return (
        <div>
            {/* <div>
        <header class="navbar navbar-dark shadow-sm fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        
        </header>
      </div> */}
        </div>
    )
}

export default Headers;