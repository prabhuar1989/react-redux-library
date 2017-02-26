import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux"

class BookList extends Component{

    renderList(){
        return this.props.books.map(book => {
            return (
                <li 
                className = "list-group-item" 
                onClick = {() => this.props.selectBook(book)}
                key={book.title}> <h7>{book.title}</h7></li>
            );
        });
    }

    render(){
        return(
            <ul className = "list-group col-sm-3">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books : state.books
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectBook : selectBook},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);