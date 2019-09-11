/**
 * Created by apple on 2019/9/11.
 */

import React,{Component} from 'react';

class Pagination extends Component{
    constructor(){
        super();
        this.state = {
			currentPage:1//记录的是当前页码
        };
    }
    handleClick = (page)=>{
        if(page >0 && page <= Math.ceil(this.props.total/10))
        this.setState({
            currentPage: page
        })
    };
    componentDidMount(){
        this.setState({
            currentPage: this.props.defaultCurrent
        })
    }
    render(){

        //获取当前页面页码,总数据
        var pages = Math.ceil(this.props.total/10);
        var arr = [];
        for(var i = 0;i < pages;i++)
        {
            arr.push(i+1);
        }
        return (
            <div className="pagination">
                <span onClick={()=>{ this.handleClick(this.state.currentPage-1) }}>&lt;</span>
                {
                    arr.map((item,index)=>{
                        return (
                            <span key={index} className={this.state.currentPage == item?'active':''} onClick={()=>{ this.handleClick(item) }}>{item}</span>
                        )
                    })
                }
                <span onClick={()=>{ this.handleClick(this.state.currentPage+1) }}>&gt;</span>
            </div>
        )
    }
}

export default Pagination;