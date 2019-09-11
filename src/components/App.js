import React,{Component} from 'react';

import Pagination from './Pagination.js'
import './App.css'
class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				<Pagination defaultCurrent={3} total={80}></Pagination>
            </div>
        )
    }
}

export default App;

