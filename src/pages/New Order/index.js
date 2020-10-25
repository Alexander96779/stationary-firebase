import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { addNewOrder } from '../../store/modules/Orders/New/actions';
import  useProtectedRoute from '../../routes/ProtectedRoute';

class NewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone_number: '',
            product1: '',
            product2: '',
            product3: '',
            quantity1: '',
            quantity2: '',
            quantity3: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangep1 = this.onChangep1.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onChangep1 = (event) => {
        if(event.target.checked){
        this.setState({
          product1: 'Big blue book',
        });
    } else {
        this.setState({
            product1: '',
          });
    }
}

onChangep2 = (event) => {
    if(event.target.checked){
    this.setState({
      product2: 'Book',
    });
} else {
    this.setState({
        product2: '',
      });
}
}

onChangep3 = (event) => {
    if(event.target.checked){
    this.setState({
      product3: 'Chalk',
    });
} else {
    this.setState({
        product3: '',
      });
}
}
    handleSubmit(e){
        e.preventDefault();
        const {
            name, phone_number, product1, product2, product3, quantity1, quantity2, quantity3
        } = this.state;
        const {addNewOrder } = this.props;
        addNewOrder(name, phone_number, product1, product2, product3, quantity1, quantity2, quantity3);
    }
    render() {
        useProtectedRoute();
        const {name, phone_number, product1, product2, product3,
        quantity1, quantity2, quantity3} = this.state; 
        const { newOrder } = this.props;
        return(
 <div>
     <div className="main-content">
         <Navbar/>
     </div>
     <Sidebar {...this.props}/>
     <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card bg-light my-2 mt-5 card-product">
                            <h3 className="display 4 text-center text-dark mt-3">Make new order</h3>
                            <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
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
                                    value={name}
                                    onChange={this.handleChange}
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
                                    value={phone_number}
                                    onChange={this.handleChange}
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
                                    value={product1}
                                    onChange={this.onChangep1}
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
                                    value={quantity1}
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-row">
                                <div className="col mb-3 form-check">
                                    <input 
                                    type="checkbox"
                                    name="product3"
                                    className="form-check-input ml-1 mt-3"
                                    value={product2}
                                    onChange={this.onChangep2}
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
                                    value={quantity2}
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-row">
                                <div className="col mb-3 form-check">
                                    <input 
                                    type="checkbox"
                                    name="product3"
                                    className="form-check-input ml-1 mt-3"
                                    value={product3}
                                    onChange={this.onChangep3}
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
                                    value={quantity3}
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                                {
                                    newOrder.isLoading ?
                                        <input 
                                         type="submit"
                                         value="Making order...."
                                         className="btn btn-dark btn-block"
                                        />
                                    : <input 
                                        type="submit"
                                        value="Make order"
                                        className="btn btn-dark btn-block"
                                       />
                                }
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 </div>
        );
    }
}

const mapStateToProps = (state) => ({
    newOrder: state.makeOrder,
});

const mapDispatchToProps = (dispatch) =>({
addNewOrder: (name, phone_number, product1, product2, product3,
    quantity1, quantity2, quantity3) => dispatch(addNewOrder(name, phone_number, product1, product2, 
    product3, quantity1, quantity2, quantity3)),
})
export default connect(mapStateToProps, mapDispatchToProps) (NewOrder);