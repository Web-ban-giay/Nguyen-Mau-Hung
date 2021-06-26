import React, { Component } from 'react';
import Banner from './Banner';
import Grids from './Grids_bottom';
import Grids_sec from './Grids_sec_2';
import Mid from './Mid_slider';
import Newletter from '../Footer/Newletter';
import Footer from '../Footer/Footer';
class Index extends Component {
    render() {
        return (
            <div className='App'>
                <Banner />
                <Grids />
                <Grids_sec />
                <Mid />
                <Newletter />
                <Footer />
            </div>
        );
    }
}
export default Index;