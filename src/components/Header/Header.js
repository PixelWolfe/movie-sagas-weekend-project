import React, {Component} from 'react';

class Header extends Component{
   
    render(){
         let headerStyle = {
        backgroundColor: 'darkslategray'
        }
        return(
            <header style={headerStyle}>
                <h1>Popular Movies</h1>
            </header>
        )
    }
}

export default Header;