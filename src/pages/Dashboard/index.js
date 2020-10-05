import React, { Component} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class Dashboard extends Component {
    render() {
        return (
    <div>
        <div className="main-content">
            <Navbar />
        </div>
        <Sidebar {...this.props}/>
    </div>
        );
    }
}

export default Dashboard;
