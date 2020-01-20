import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
           <div className="container">
               <div className="jumbotron">
                   <header className="text-center my-4"></header>
                   <h1 className="titleheader mb-4">The windList</h1>
               </div>
           </div>
        )
    }
}

export default Header