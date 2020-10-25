import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import './style.scss';
import { viewAll } from '../../store/modules/Orders/ViewAll/actions';
import { deleteOrder } from '../../store/modules/Orders/Delete/actions';
import useProtectedRoute from '../../routes/ProtectedRoute';

class AllOrders extends Component {

        constructor(props){
            super(props);
            this.state = {
                reqOrder: 0,
            };
        }

        foundOrder(index) {
            this.setState({
                reqOrder: index,
            });
        }

    async componentDidMount(){
        await this.props.viewAll();
    }

    async cancelOrder(id) {
        const { deleteOrder } = this.props;
        await deleteOrder(id);
    }

    render() {
        useProtectedRoute();
        const { displayOrders } = this.props;
        const reqOrder = this.state.reqOrder;
        let foundData = displayOrders.orders[reqOrder];
        console.log(foundData);
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
                                <p className="text-right small">Date: {moment(order.created.toDate()).format('LL')}</p>
                                <div className="row">
                                    <div className="col">
                                    <button className="btn btn-small btn-dark" data-toggle="modal" data-target="#updateModal"
                                    onClick={() => this.foundOrder(index)}>
                                    <i className="fa fa-edit"></i> Edit</button>
                                    </div>
                                    <div className="col">
                                    <button className="btn btn-small btn-danger" onClick={() => {this.cancelOrder(order.id)}}>
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

    <div className="modal fade " id="updateModal">
    <div className="modal-dialog modal-md">
        <div className="modal-content">
        <div className="modal-header bg-dark text-white">
        <h5 className="modal-title">Update Order</h5>
        <button className="close text-white" data-dismiss="modal"><span>&times;</span></button>
    </div>
<div className="modal-body">
    <form>
    <div className="form-row">
        <div className="col mb-3 input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
            </div>
                <input 
                type="text"
                name="name"
                placeholder="Customer name"
                className="form-control"
                
                />
        </div>
        <div className="col mb-3 input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-phone"></i></span>
            </div>
                <input 
                type="text"
                name="phone_number"
                placeholder="Phone number"
                className="form-control"

                />
        </div>
    </div>
        <h4><u><b>Products</b></u></h4>
        <div className="form-row">
            <div className="col mb-3 form-check">
                <input 
                type="checkbox"
                name="product1"
                className="form-check-input ml-1 mt-3"
 
                />
                <label className="form-check-label ml-4 mt-2">
                    Big blue book
                </label>
            </div>
            <div className="col mb-3">
                <input 
                type="number"
                name="quantity1"
                placeholder="Quantity"
                className="form-control"

                />
            </div>
        </div>
    <div className="form-row">
        <div className="col mb-3 form-check">
            <input 
            type="checkbox"
            name="product3"
            className="form-check-input ml-1 mt-3"

            />
            <label className="form-check-label ml-4 mt-2">
                Book
            </label>
        </div>
        <div className="col mb-3">
            <input 
            type="number"
            name="quantity2"
            placeholder="Quantity"
            className="form-control"

            />
        </div>
    </div>
    <div className="form-row">
        <div className="col mb-3 form-check">
            <input 
            type="checkbox"
            name="product3"
            className="form-check-input ml-1 mt-3"

            />
            <label className="form-check-label ml-4 mt-2">
                Chalk
            </label>
        </div>
        <div className="col mb-3">
            <input 
            type="number"
            name="quantity3"
            placeholder="Quantity"
            className="form-control"

            />
        </div>
        </div>
    </form>
</div>
    <div className="modal-footer">
        <button className="btn btn-dark" data-dismiss="modal">Close</button>
        <button className="btn btn-light text-dark" data-dismiss="modal">Save Changes</button>
    </div>
</div>   
</div>
</div>
</div>
        );
    }
}

const mapStateToProps = (state) =>({
    displayOrders: state.displayOrders
});

const mapDispatchToProps = (dispatch) =>({
    viewAll: () => dispatch(viewAll()),
    deleteOrder: (id) => dispatch(deleteOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps) (AllOrders);   