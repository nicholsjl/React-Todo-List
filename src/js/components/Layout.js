import React from 'react';

import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <TodoList />
                <Footer/>
            </div>
        );
    }
}