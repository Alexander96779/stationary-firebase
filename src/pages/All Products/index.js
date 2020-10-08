import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import { viewAll } from '../../store/modules/Products/ViewAll/actions';

class ViewAll extends Component {
    async componentDidMount(){
        await this.props.displayAll();
    }
render() {
    const { displayProducts } = this.props;
    const renderProducts = () => (
        displayProducts.products.length > 0
        ? displayProducts.products.map((product) => (
            <tr key={product.id}>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                <td>{product.supplier_name}</td>
                <td>{product.unit_price}</td>
                <td>{product.description}</td>
                <td>
                <button  className="btn btn-dark btn-small"><i className="fa fa-edit"></i></button> 
                <button  className="btn btn-danger btn-small ml-4"><i className="fa fa-trash"></i></button>
                </td>
            </tr>
        )) : <div className="text-center"><h2>No Products Found yet!!!</h2></div>
    );
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
        </div>
        );
    }
}

const mapStateToProps = (state) =>({
    displayProducts: state.displayProducts,
});

const mapDispatchToProps = (dispatch) => ({
    displayAll: () => dispatch(viewAll()),
});

export default connect(mapStateToProps, mapDispatchToProps) (ViewAll);
