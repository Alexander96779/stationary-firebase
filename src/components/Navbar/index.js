import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/modules/Login/actions';
import './style.scss';

class Navbar extends Component {
    render() {
        return(
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container">
  <a href="/home" className="navbar-brand"><b className="h3">Stati<span>onery</span></b></a>
            <div id="navNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#h" className="nav-link" onClick={() => this.props.signOut()}>
                            <i className="fa fa-power-off" aria-hidden="true"></i> Logout</a>
                    </li>
                </ul>
            </div>
  </div>
</nav>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps) (Navbar);