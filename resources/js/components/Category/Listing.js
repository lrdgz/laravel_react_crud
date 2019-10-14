import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Listing extends Component {

    constructor(){
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount(){
        axios.get('http://laravel.react.test/api/category/')
        .then(response => {
            this.setState({categories: response.data});
        });
    }


    onDelete(category_id){
        axios.delete('http://laravel.react.test/api/category/'+category_id)
            .then(response => {

                console.log('Category Id: ',category_id);
                console.log(response.data);
                var categories = this.state.categories;
                console.log('Length : ',categories.length);

                for(var i = 0; i < categories.length; i++){
                    if (categories[i].id == category_id){
                        console.log('SI ENCONTRADO Y ELIMINADO!');
                        categories.splice(i,1);
                        this.setState({categories:categories});
                    }
                }
            });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Category Name</td>
                            <td>Status</td>
                            <td>Created At</td>
                            <td>Updated At</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category => {
                                return (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.active == 1 ? ('Active') : ('Inactive')}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td>
                                            <Link to={`/category/edit/${category.id}`}>Edit</Link> | 
                                            <a href="#" onClick={this.onDelete.bind(this, category.id)}>Delete</a>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}