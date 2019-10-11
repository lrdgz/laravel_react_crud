import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {

    constructor(){
        super();
        this.state = {
            category_name: ''
        };

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeCategoryName(e){
        this.setState({
            category_name: e.target.value
        })
    }

    
    onSubmit(e){
      e.preventDefault();
      const category = {
          category_name: this.state.category_name
      };

      axios.post('http://laravel.react.test/api/category', category)
      .then(result => {
        console.log(result.data);
      });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Category Name</label>
                        <input type="text" 
                            className="form-control"
                            placeholder="Enter Category" 
                            value={this.state.category_name}
                            onChange={this.onChangeCategoryName}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}