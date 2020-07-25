import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Flip from 'react-reveal/Flip';

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
            const id = Number(this.props.match.params.id.slice(-1));
            let movie = this.props.reduxState.movies[id-1];
            console.log('movie.id', movie.id)
            console.log('State:', this.state);
            this.setState({
                ...this.state,
                id: movie.id,
                title: movie.title,
                poster: movie.poster,
                description: movie.description,
                genres: movie.array_agg
            })
            console.log('State:', this.state)
        }
    }

    render(){
        return(
            <>
               { this.state.id != null ?
                    <Flip left>
                        <div style={{width:'450px'}}>
                            <p>{this.state.title}</p>
                            <img src={this.state.poster}/>
                            <h3>Description</h3>
                            <p>{this.state.description}</p>
                            <h4>Genres</h4>
                            <p>{this.state.genres.map(genre=><button variant='outlined'>{genre}</button>)}</p>
                        </div>
                    </Flip>
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