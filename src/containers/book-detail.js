import React, {Component} from "react";

import {connect} from "react-redux";

class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return <div>Please select a book from the list !</div>
        }
        return(
                <div>
                    <h4>Details for : </h4>
                    <div>title : {this.props.book.title}</div>
                    <div>pages : {this.props.book.pages}</div>
                </div>
        );
    };
}

const mapStateToProps= (state) =>{
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToProps) (BookDetail);