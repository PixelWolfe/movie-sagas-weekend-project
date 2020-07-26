import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Fade} from 'react-reveal';
import {Button, Card, CardHeader, CardContent, Grid, Typography} from '@material-ui/core';



class Details extends Component{

    state = {
        id: null,
        title: '',
        description: '',
        poster: '',
        genres: [],
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

    historyHome = ()=>{
        this.props.history.push('/');
    }

    historyEdit = ()=>{
        this.props.history.push('/edit/'+this.state.id);
    }

    render(){
        const cardStyle = {
            background: 'linear-gradient(135deg, coral, darkgray )'
        }

        const yMargin = {
            margin: '10px 0px 0px 0px'
        }
        const yPadding = {
            padding: '10px 0px 0px 0px'
        }
        return(
            <>
               { this.state.id != null ?
                <Grid container justify='center'>
                        <Grid item xs={12} sm={10} md={8} align='center'>
                            <Fade duration={500}>
                                <Card style={cardStyle}>
                                    <CardHeader title={this.state.title} style={yPadding}/>
                                    <CardContent>
                                        <img src={this.state.poster}></img>
                                        <Typography>
                                            <h3 style={yMargin}>Description</h3>
                                            {this.state.description}
                                        </Typography>
                                        <h4 style={yMargin}>Genres</h4>
                                        <p style={yMargin}>{this.state.genres.map(genre=><button variant='outlined'>{genre}</button>)}</p>
                                        <br></br>
                                        {/*Links to go back to home page or edit page*/}
                                        <Button variant='contained' color="secondary" onClick={this.historyHome}>Back</Button>  
                                        <Button variant="contained" color="primary" onClick={this.historyEdit}>Edit</Button>  
                                    </CardContent>
                                </Card>
                            </Fade>
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