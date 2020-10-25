import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { productsPdf } from '../../store/modules/Reports/actions';
import useProtectedRoute from '../../routes/ProtectedRoute';

class Reports extends Component {

    render(){
        useProtectedRoute();
        return(
            <div>
                <div className="main-content">
                    <Navbar />
                </div>
                <Sidebar {...this.props} />
                <section className="py-5">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4 ml-auto">
                        <button className="btn btn-dark btn-block" onClick={() => {this.props.productsPdf()}}>
                            <i className="fa fa-files-o"></i> Products
                        </button>
                            </div>
                            <div className="col-md-4 ml-auto">
                        <button className="btn btn-dark btn-block">
                            <i className="fa fa-files-o"></i> Orders
                        </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    productsReport: state.productsReport,
});

const mapDispatchToProps = (dispatch) =>({
    productsPdf: () => dispatch(productsPdf()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Reports);