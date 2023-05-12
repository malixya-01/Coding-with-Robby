import React, { Component } from 'react'
import axios from 'axios';

export default class GetClass extends Component {
  constructor(props){
    super(props);

    this.state={
      get:{}
    };
  }

  componentDidMount(){
    
    const id = this.params.id;

    axios.get().then((res) =>{
      if(res.data){
        this.setState({
          get:res.data.get
        });
      }
    });
  }
  render() {
    const {classname,grade} = this.state.get;
    return (
      <div style={{margin:'20px'}}>
        <h4>Get Class</h4>
        <hr/>

        <dl className="row">
          <dt className="col-sm-3">name</dt>
          <dd className="col-sm-9">{classname}</dd>

          <dt className="col-sm-3">grade</dt>
          <dd className="col-sm-9">{grade}</dd>

        </dl>
      </div>
    )
 
  }
}
