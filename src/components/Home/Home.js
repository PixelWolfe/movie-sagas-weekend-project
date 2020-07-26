import React, {Component} from 'react';
import {connect} from 'react-redux';    
import {Link, useParams} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Grid} from '@material-ui/core';
import Fade from 'react-reveal/Fade'

class Home extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    render(){

        const cardStyle = {
            background: 'linear-gradient(135deg, lightgrey, grey)',
            marginTop: '5px',
            marginRight: '5px',
            padding: '12px',
            paddingBottom: '8px'
        }

        const topMarginOnly = {
            margin: '3px 0px 0px 0px'
        }

        const cardContentPadding = {
            margin: '3px 0px 0px 0px',
            padding: '5px 0px'
        }

        const genreText = {
            fontSize: '12px'
        }
        return(
            <>
                <h1>Home Component</h1>
                <Grid container justify='center'>
                    {
                    this.props.reduxState.movies.map((movie)=>
                        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} align='center'>
                            <Fade>
                            <Card style={cardStyle}>
                                <CardContent style={cardContentPadding}>
                                        <Link to={'/details/'+movie.id}>
                                            <img src={movie.poster}></img>
                                        </Link>
                                        <h4 style={topMarginOnly}>
                                            {movie.title}
                                        </h4>
                                        <p style={topMarginOnly}>{movie.array_agg.map((genre, index)=>
                                            <span key={index} style={genreText}>
                                                {genre}
                                                {/*Only include a comma if it is not the last genre in array*/}
                                                {index < movie.array_agg.length - 1 && ', '}
                                            </span>)}
                                        </p>
                                </CardContent>
                            </Card>
                            </Fade>
                        </Grid>
                        )
                    }
                </Grid>
                
                
            </>
        )
    }
}
const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(Home);