import React, { Component } from 'react';
import Counter from './counter';
import navbar from './nav'
class Counters extends Component {
    state = {
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
      }

    handledlt= dltid =>{
        const counters = this.state.counters.filter(c=> c.id!== dltid);
        this.setState({counters});
        
    };

    handleinc=counter=>{
        console.log(counter);
        const cnters=[...this.state.counters];
        const index=cnters.indexOf(counter);
        cnters[index]={...counter};
        cnters[index].value++;
        this.setState({counters:cnters});
    }
    resethandled=()=>
    {
        const counters=this.state.counters.map(c=>{
            c.value=0;
            return c;
        })
        this.setState({counters})
    };
    render() { 
        return ( 
            <div>
                <navbar/>
               
                <button className="btn btn-primary btn-sm m-2" onClick= {this.resethandled}>Reset</button>
                { this.state.counters.map(cnt=>
                <Counter 
                key={cnt.id} 
                counter={cnt} 
                dlthandler={()=>this.handledlt(cnt.id)}
                incrementhandler={()=>this.handleinc(cnt)}
                />)}
            </div>
        );
    }
}
 
export default Counters;