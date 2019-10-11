import React, { Component } from 'react';
import axios from 'axios';

export default class Listing extends Component {

    constructor(){
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount(){
        axios.get('http://laravel.react.test/api/category')
        .then(response => {
            this.setState({categories: response.data});
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category => {
                                return (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.active == 1 ? 'Active' : 'Inactive'}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
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