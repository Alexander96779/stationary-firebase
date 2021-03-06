/* eslint-disable no-undef */
import React, { Component } from 'react';
import './style.scss';

class Sidebar extends Component {
    render() {
       const { location } = this.props;
       const dashboardClass = location.pathname.match(/^\/home/) ? 'active' : '';
       const newProductClass = location.pathname.match(/^\/newproduct/) ? 'active' : ''; 
       const viewProductClass = location.pathname.match(/^\/allproducts/) ? 'active' : ''; 
       const newOrderClass = location.pathname.match(/^\/neworder/) ? 'active' : ''; 
       const viewOrderClass = location.pathname.match(/^\/allorders/) ? 'active' : ''; 
       const reportsClass = location.pathname.match(/^\/reports/) ? 'active' : ''; 

        return(
<div className="sidebar-wrapper">
 
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Dashboard</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className={`${dashboardClass}`}>
                        <a href="/home" ><i className="fa fa-home"></i> HOME</a>   
                    </li>
                    <li>
                        <a href="/allproducts" className="dropdown-toggle" data-toggle="dropdown">PRODUCTS</a>
                        <div className="dropdown bg-dark text-center">
                            <a href="/newproduct" className={`${newProductClass} dropdown-item`}><i className="fa fa-product-hunt"></i> Add New</a>
                            <a href="/allproducts" className={`${viewProductClass} dropdown-item`}><i className="fa fa-database"></i> View All</a>
                        </div>
                        
                    </li>
                    <li>
                        <a href="/allorders" className="dropdown-toggle" data-toggle="dropdown">ORDERS</a>
                        <div className="dropdown bg-dark text-center" id="dropdown">
                            <a href="/neworder" className={`${newOrderClass} dropdown-item`}><i className="fa fa-shopping-cart"></i> New Order</a>
                            <a href="/allorders" className={`${viewOrderClass} dropdown-item`}><i className="fa fa-database"></i> View All</a>
                        </div> 
                    </li>
                    <li className={`${reportsClass}`}>
                        <a href="/reports"><i className="fa fa-folder"></i> REPORTS</a>
                    </li>    
                </ul>      
            </nav>

            <div id="content">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <button id="sidebarCollapse" className="btn btn-dark">
                            <i className="fa fa-bars"></i>
                            </button>
                        </div>

                    </div>
                </nav>
            
            </div>
</div>

        );
    }
}
export default Sidebar;