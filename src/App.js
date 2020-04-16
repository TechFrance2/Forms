import React from 'react';


class App extends React.Component {
  constructor () {
    super ()
      this.state = {
        firstName: " ",
        lastName: " ",
        isFriendly: false
      
      }
  this.handleChange = this.handleChange.bind(this)    
      
  } 
    handleChange (event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState ({[name]: checked}) : this.setState ({[name]: value })
  }
  render () {
    return (

      <form>
        <input type = "text" 
               value = {this.state.value}
               name ="firstName" 
               placeholder = "First Name" 
               onChange = {this.handleChange}
         />
           <br/>    
        <input type = "text" 
               value = {this.state.value}
               name = "lastName"
               placeholder = "Last Name" 
               onChange = {this.handleChange}
          />
          <br/>
          <textarea value = {"Please check box below"} 
                    onChange = {this.handleChange}/>
          <label>
            <br/>
            
              <input
                  type = "checkbox" 
                  name = {"isFriendly"}
                  checked = {this.state.isFriendly }
                  onChange = {this.handleChange}
              /> 
              Is friendly?
              <br/>
              
        </label>
          <h1>{this.state.firstName} {this.state.lastName} </h1>
      </form>
      

    )
  }
}

export default App

