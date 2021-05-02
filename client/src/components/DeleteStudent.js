import { Component } from "react";




  
  export class DeleteStudent extends Component {
    componentDidUpdate(){
    }
    render(){
    return (
      <div>
        <p>Student ID is: {this.props.student}</p>
      </div>
    );
    };
  }

    // const response = fetch(`http://localhost:3001/students/${id}`, {
    //   method: 'DELETE',
    // })
    //   const dData = response.text();
    // console.log(dData);
    
