import React, { Component } from 'react';
import './style.css'
class AutoCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
    
    }
    render() { 
        return ( 
            <div className='auto__counter'>
                <section className='wave__now'>
                    <div class="center">
                        <h1>Loading........................</h1>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </div>
                </section>
                <section className='wave__now'>
                    <div class="ocean">
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default AutoCounter;