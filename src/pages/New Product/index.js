import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { addProduct } from '../../store/modules/Products/New/actions';
import './style.scss';

class NewProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            quantity: '',
            supplier_name: '',
            supplier_email: '',
            description: '',
            price: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, quantity, supplier_name,
        supplier_email, description, price } = this.state;
        const { addProduct } = this.props;
        addProduct(name, quantity, supplier_name,
            supplier_email, description, price);
    }
render() {
    const {name, quantity, supplier_name, supplier_email, description, price } = this.state;
return(
    <div>
        <div className="main-content">
            <Navbar />
        </div>
        <Sidebar {...this.props}/>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card bg-light my-2 mt-5 card-product">
                            <h3 className="display 4 text-center text-dark mt-3">Add new product</h3>
                            <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col mb-3 mt-4">
                                    <input 
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Product name"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                    <div className="col mb-3">
                                    <small className="form-text ml-2">Must be a number</small>
                                    <input 
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    placeholder="Quantity"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col mb-3">
                                    <input
                                    type="text"
                                    name="supplier_name"
                                    value={supplier_name}
                                    placeholder="Supplier Name"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                    <div className="col mb-3">
                                    <input 
                                    type="text"
                                    name="supplier_email"
                                    value={supplier_email}
                                    placeholder="Supplier Email"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col mb-3">
                                    <small className="form-text ml-2 mb-1">Must be in Rwf</small>
                                    <input 
                                    type="text"
                                    name="price"
                                    value={price}
                                    placeholder="Unit Price"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    />
                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col mb-3">
                                        <textarea 
                                        name="description"
                                        value={description}
                                        className="form-control"
                                        placeholder="Product description"
                                        onChange={this.handleChange}>
                                        
                                        </textarea>
                                    </div>
                                </div>
                                <input 
                                type="submit"
                                value="Add to stock"
                                className="btn btn-dark btn-block"
                                />
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

const mapStateToProps = (state) =>({
    newProduct: state.addProduct,
});

const mapDispatchToProps = (dispatch) =>({
    addProduct: (name, quantity, supplier_name,
        supplier_email, description, price) => dispatch(addProduct(name, quantity, supplier_name,
            supplier_email, description, price)),
});
export default connect(mapStateToProps, mapDispatchToProps) (NewProduct);
