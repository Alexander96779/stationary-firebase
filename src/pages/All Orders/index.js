import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import './style.scss';
import { viewAll } from '../../store/modules/Orders/ViewAll/actions';

class AllOrders extends Component {

    async componentDidMount(){
        await this.props.viewAll();
    }

    render() {
        const { displayOrders } = this.props;
        return (
<div>
    <div className="main-content">
            <Navbar />
    </div>
    <Sidebar {...this.props} />
    <section className="py-5" id="orders">
        <div className="container">
            {
                displayOrders.isLoading ?
                <Spinner />
                :
            <div className="row">
            { displayOrders && displayOrders.orders.length > 0 ?
                    displayOrders.orders.map((order, index) =>(
                <div className="col-md-3 col-md-3 mt-3" key={order.id}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="h5">Name: {order.customer_name}</h3>
                            <h6 className="text-muted">Tel no: {order.phone_number}</h6>
                                <table className="table table-borderless table-sm">
                                    <thead>
                                        <tr>
                                            <th>Products</th>
                                            <th className="mr-3">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.products.map((product, index) =>(
                                        <tr key={index}>
                                            <td>{ product.product_name !== '' ?
                                                    product.product_name :
                                                null }</td>
                                            <td>{ product.quantity !== '' ?
                                                    product.quantity :
                                                null}</td>
                                        </tr>         
                                                ))
                                            }
                                    </tbody>
                                </table>
                                <h6 className="text-muted text-center">Total: {order.Total}</h6>
                                <p className="text-right small">Done on: {moment(order.created.toDate()).format('LL')}</p>
                                <div className="row">
                                    <div className="col">
                                    <button className="btn btn-small btn-dark">
                                    <i className="fa fa-edit"></i> Edit</button>
                                    </div>
                                    <div className="col">
                                    <button className="btn btn-small btn-danger">
                                    <i className="fa fa-trash"></i> Delete</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                ))
                :
                    <h3 className="text-center">No orders made yet!!!!</h3>
                }
            </div>
        }
        </div>
    </section>
</div>
        );
    }
}

const mapStateToProps = (state) =>({
    displayOrders: state.displayOrders,
});

const mapDispatchToProps = (dispatch) =>({
    viewAll: () => dispatch(viewAll()),
});

export default connect(mapStateToProps, mapDispatchToProps) (AllOrders);   