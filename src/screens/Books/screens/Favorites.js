import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteFavBook} from '../../../redux/actions';

class Favorites extends React.Component{

    handleDeleteFav = (bookId)=>{
        this.props.deleteFavBook(bookId);
    }
    render(){

        const {favoriteBooks, books} = this.props;
        let favBooks = favoriteBooks.map(id=>{
            let oneBook = {};
            books.forEach(book=>{
                if (book.id===id)
                oneBook = book;
            });
            return oneBook;
        });
        
        return (
            <div className='container'>
                <Link to='/books/' className='btn btn-danger mb-3'>
                    Вернуться к Списку книг
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Подробнее</th>
                        <th scope="col">Избранное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favBooks.map((book)=>{
                            return (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price} BYN</td>
                                    <td><Link to={`/books/${book.id}`}className='btn btn-danger'>Подробнее</Link></td>
                                    <td><button className='btn btn-danger' onClick={()=>{this.handleDeleteFav(book.id)}}>Удалить из Избранного</button></td>
                                </tr>
                            )
                        })}
                        
                        
                    </tbody>
                </table>

        
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

export default connect(mapStateToProps, {deleteFavBook})(Favorites);