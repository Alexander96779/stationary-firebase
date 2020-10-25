import React, { Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import useProtectedRoute from '../../routes/ProtectedRoute';

class Dashboard extends Component {
    render() {
        useProtectedRoute();
        return (
    <div>
        <div className="main-content">
            <Navbar />
        </div>
        <Sidebar {...this.props}/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9 ml-auto">
                    <table className="table table-striped table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>jodoe12@gmail.com</td>
                                <td>
                                    <a href="#details" className="btn btn-dark btn-sm">
                                        <i className="fa fa-arrow-right"></i> Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Joey</td>
                                <td>Francis</td>
                                <td>jfrancis@gmail.com</td>
                                <td>
                                    <a href="#details" className="btn btn-dark btn-sm">
                                        <i className="fa fa-arrow-right"></i> Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Will</td>
                                <td>Johnson</td>
                                <td>jhwill22@gmail.com</td>
                                <td>
                                    <a href="#details" className="btn btn-dark btn-sm">
                                        <i className="fa fa-arrow-right"></i> Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Terrence</td>
                                <td>Howard</td>
                                <td>thoward@gmail.com</td>
                                <td>
                                    <a href="#details" className="btn btn-dark btn-sm">
                                        <i className="fa fa-arrow-right"></i> Details
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ml-auto">
                    <div className="card text-center bg-dark text-white mb-3">
                        <div className="card-body">
                            <h4>All Products</h4>
                            <h1 className="display-4">
                                <i className="fa fa-database"> 10</i>
                            </h1>
                            <a href="/allproducts" className="btn btn-light btn-sm">View All</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ml-auto">
                    <div className="card text-center bg-light text-dark mb-3">
                        <div className="card-body">
                            <h4>All Orders</h4>
                            <h1 className="display-4">
                                <i className="fa fa-shopping-cart"> 5</i>
                            </h1>
                            <a href="/allorders" className="btn btn-dark btn-sm">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.loginUser,
});

export default connect( mapStateToProps, null) (Dashboard);
