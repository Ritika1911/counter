import React, { Component, Fragment } from 'react';

class Counter extends Component {
    
    render() { 
        
        
        return (
            <div>
                {this.props.children}
                <span style={{ fontSize:16}} className= {this.getBadgeClass()} >{ this.formatCount() }</span>
                <button onClick={ this.props.incrementhandler}   className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.dlthandler}   className="btn btn-danger btn-sm">Delete</button>
            </div>
        );
    }

    
    getBadgeClass() {
        let cla = "badge m-2 badge-";
        cla += this.props.value === 0 ? "primary" : "warning";
        return cla;
    }

    formatCount(){
        const {id,value}=this.props.counter;
        return value === 0? "Zero" : value;
    }
}
 
export default Counter;