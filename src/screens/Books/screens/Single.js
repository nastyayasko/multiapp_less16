import React from 'react';
import {connect} from 'react-redux';
import {deleteBook,updateBook,deleteFavBook} from '../../../redux/actions';
import {Link} from 'react-router-dom';



class Single extends React.Component{
    
    handleDelete = ()=>{
        const bookId = +this.props.match.params.id;
        this.props.deleteBook(bookId);
        this.props.deleteFavBook(bookId);
        this.props.history.push('/books/');
    }
    handleFav = ()=>{
        const bookId = +this.props.match.params.id;
        const {favoriteBooks} = this.props;
        if (!favoriteBooks.includes(bookId)){
            this.props.updateBook(bookId);
        }
        
    }
    render(){
        const bookId = +this.props.match.params.id;
        const {books} = this.props;
        const currentBook = books.find(book => book.id === bookId);
        console.log(currentBook);
        return (
            <div className='container'>
                <Link to='/books/' className='btn btn-danger mb-3'>
                    Вернуться к Списку книг
                </Link>
                <div className="card">
                    <h5 className="card-header">{currentBook.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{currentBook.author}</h5>
                        <p className="card-text"><b>Цена:</b> {currentBook.price} BYN</p>
                        <button href="#" className="btn btn-danger mr-3" onClick={this.handleDelete}>Удалить</button>
                        <button href="#" className="btn btn-danger mr-3" onClick={this.handleFav}>В избранное</button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    
    return {
        books:state.books.books,
        favoriteBooks:state.books.favoriteBooks
    };
}

export default connect(mapStateToProps, {deleteBook, updateBook,deleteFavBook})(Single);