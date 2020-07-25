import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    render(){
        return(
            <>
                <p>Home Component</p>
            </>
        )
    }
}

export default connect()(Home);