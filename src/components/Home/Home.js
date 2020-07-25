import React, {Component} from 'react';
import {connect} from 'react-redux';    
import {Link, useParams} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


class Home extends Component{
    componentDidMount(){
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    // goToDetails = (details)=>{
    //     this.props.history.push(`/details/${details}`)
    // }

    render(){
        return(
            <>
                <p>Home Component</p>
                {
                    this.props.reduxState.movies.map((movie)=>
                        <div key={movie.id}>
                            <Link to={'/details/'+movie.id}>
                                <img src={movie.poster}></img>
                            </Link>
                                
                            <p>{movie.title}</p>
                            <p>{movie.array_agg.map((genre, index)=>
                                <span key={index}>
                                 {genre}, {'\u00A0'} 
                                </span>
                            )}</p>
                        </div>
                    )
                 
                }
            </>
        )
    }
}
const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(Home);