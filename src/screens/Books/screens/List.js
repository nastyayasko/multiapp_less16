import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {likeBook,disLikeBook} from '../../../redux/actions';


class List extends React.Component{
    

    handleLike = (bookId)=>{
        this.props.likeBook(bookId);
    }
    handleDisLike = (bookId)=>{
        this.props.disLikeBook(bookId);
    }
    render(){
        const {books} = this.props;
        
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Подробнее</th>
                        <th scope="col">Рейтинг</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book)=>{
                            return (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price} BYN</td>
                                    <td><Link to={`/books/books/${book.id}`}className='btn btn-danger'>Подробнее</Link></td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{this.handleLike(book.id)}}>Like</button> {book.likes}
                                        <button className='btn btn-dark ml-3' onClick={()=>{this.handleDisLike(book.id)}}>Dislike</button> {book.disLikes}
                                    </td>
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
        books:state.books.books
    };
}

const actions = {likeBook,disLikeBook};

export default connect(mapStateToProps, actions)(List);