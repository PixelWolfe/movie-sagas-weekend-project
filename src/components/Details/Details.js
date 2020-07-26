import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Slide from 'react-reveal/Slide';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';

class Details extends Component{

    state = {
        id: null,
        title: '',
        description: '',
        poster: '',
        genres: []
    }
    componentDidMount(){
        //on load grab all the movies from the database to make sure nothing has been updated
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    componentDidUpdate(previousProps){
        //when reduxState changes with the FETCH_MOVIES GET, run this conditional
        if(this.props.reduxState !== previousProps.reduxState){

            //grab the id param from the url in the match object on props
            const id = Number(this.props.match.params.id);

            //search the movies array in redux with the index of id - 1 
            let movie = this.props.reduxState.movies[id-1];
            this.setState({
                ...this.state,
                id: movie.id,
                title: movie.title,
                poster: movie.poster,
                description: movie.description,
                genres: movie.array_agg
            })
        }
    }

    render(){
        let cardStyle = {
            background: 'linear-gradient(135deg, coral, darkgray )'
        }

        return(
            <>
               { this.state.id != null ?
                <Grid container justify='center'>
                        <Grid item xs={12} sm={10} md={8} align='center'>
                        <Slide bottom>
                            <Card style={cardStyle}>
                                <CardHeader title={this.state.title}/>
                                <CardContent>
                                    <img src={this.state.poster}></img>
                                    <Typography>
                                        <h3>Description</h3>
                                        {this.state.description}
                                    </Typography>
                                    <h4>Genres</h4>
                                    <p>{this.state.genres.map(genre=><button variant='outlined'>{genre}</button>)}</p>
                                </CardContent>
                            </Card>
                        </Slide>
                        </Grid>
                </Grid>
                
                  :
                <>
                </>
               }
            </>
        )
    }
}

const mapStateToProps = (reduxState)=>({
    reduxState
})

export default connect(mapStateToProps)(withRouter(Details));