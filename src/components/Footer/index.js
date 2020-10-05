import React, { Component } from 'react';
import './style.scss';

class Footer extends Component {
    render() {
        return(
<footer id="main-footer" className="py-3 text-white">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6 mx-auto">
                <p className="lead"><small>Copyright Stationery &copy; 2020</small></p>
                </div>
            </div>
        </div>
</footer>
        );
    }
}

export default Footer;
