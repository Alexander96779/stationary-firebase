import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import { viewAll } from '../../store/modules/Products/ViewAll/actions';
import { deleteProduct } from '../../store/modules/Products/Delete/actions';
import { editProduct } from '../../store/modules/Products/Update/actions';

class ViewAll extends Component {

    constructor(props){
        super(props);
        this.state = {
            reqProduct: 0,
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

    foundProduct(index) {
        this.setState({
            reqProduct: index,
        });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
 
    handleSubmit(e) {
        e.preventDefault();
        const { name, quantity, supplier_name,
        supplier_email, description, price } = this.state;
        const { editProduct } = this.props;
        editProduct(name, quantity, supplier_name,
            supplier_email, description, price);
    }

    async componentDidMount(){
        await this.props.displayAll();
    }


    async deleteItem(id) {
        const { deleteProduct } = this.props;
        await deleteProduct(id);
    }

render() {
    const { displayProducts } = this.props;
    const renderProducts = () => (
        displayProducts.products.length > 0
        ? displayProducts.products.map((product, index) => (
            <tr key={product.id}>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                <td>{product.supplier_name}</td>
                <td>{product.unit_price}</td>
                <td>{product.description}</td>
                <td>
                <button className="btn btn-dark btn-small" data-toggle="modal" data-target="#updateModal"
                onClick={() => this.foundProduct(index)}>
                    <i className="fa fa-edit"></i>
                </button> 
                <button className="btn btn-danger btn-small ml-4" onClick={() => {this.deleteItem(product.id)}}>
                    <i className="fa fa-trash"></i>
                </button>
                </td>
            </tr>
        )) : <div className="text-center"><h2>No Products Found yet!!!</h2></div>
    );

    const reqProduct = this.state.reqProduct;
    let foundData = displayProducts.products[reqProduct];
    console.log(foundData);
    return(
        <div>
            <div className="main-content">
                <Navbar />
            </div>
            <Sidebar {...this.props} />
            <div className="container mt-5">
                <div className="row">
                    {
                        displayProducts.isLoading ?
                        <Spinner />
                        :
                    <div className="col-12 mx-auto">
                        <table className="table table-hover mt-5">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Supplier Name</th>
                                <th>Unit Price</th>
                                <th>Description</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderProducts()}
                            </tbody>
                        </table>
                    </div>
                    }
                </div>
            </div>
<div className="modal fade " id="updateModal">
    <div className="modal-dialog modal-md">
        <div className="modal-content">
        <div className="modal-header bg-dark text-white">
        <h5 className="modal-title">Update Product</h5>
        <button className="close text-white" data-dismiss="modal"><span>&times;</span></button>
    </div>
<div className="modal-body">
    <form>
        <div className="form-row">
            <div className="col mb-3 mt-4">
            <input 
            type="text"
            name="name"
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
            placeholder="Supplier Name"
            className="form-control"
            onChange={this.handleChange}
            />
            </div>
            <div className="col mb-3">
            <input 
            type="text"
            name="supplier_email"
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
            type="number"
            name="price"
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
            className="form-control"
            placeholder="Product description"
            onChange={this.handleChange}>
                                        
            </textarea>
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
    displayProducts: state.displayProducts,
});

const mapDispatchToProps = (dispatch) => ({
    displayAll: () => dispatch(viewAll()),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    editProduct: (id, name, quantity, supplier_name,
        supplier_email, description, price) => dispatch(editProduct(id, name, quantity, supplier_name,
            supplier_email, description, price)),
});

export default connect(mapStateToProps, mapDispatchToProps) (ViewAll);
