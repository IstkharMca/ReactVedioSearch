import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VedioList from './VideoList';
import VideoDetail from './VideoDetails';

class App extends React.Component {

    componentDidMount() {
        this.onTermSubmit('dil chahta hai');
    }
    state = { videos : [] ,selectedVideo : null}
    onTermSubmit = async term => {
       const response = await youtube.get('/search',{
           params : {
               q : term
           }
       });
     
       this.setState({
           videos : response.data.items,
           selectedVideo : response.data.items[0]
        });
       console.log(this.state.videos);
    }

    onVedioSelect = video => {
     this.setState({selectedVideo : video});
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit ={this.onTermSubmit} />
                <div className='ui grid' >
                    <div className='ui row'>

                <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo} />
                </div>
                  <div className='five wide column'>
                  <VedioList onVedioSelect={this.onVedioSelect} videos={this.state.videos} />
                  </div>
              </div>
          </div>
        </div>
        )
    }
}

export default App