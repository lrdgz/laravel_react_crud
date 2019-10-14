import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            category_name: '',
            category_id: ''
        };

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('http://laravel.react.test/api/category/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                category_name: response.data.name,
                category_id: response.data.id
            });

            console.log(response.data);
        });
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

      axios.put('http://laravel.react.test/api/category/'+this.props.match.params.id, category)
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