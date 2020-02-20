import VideoListEntry from '../../src/components/VideoListEntry.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';
import Search from '../../src/components/Search.js';
import searchYouTube from '../../src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    // searchYouTube()
  }
  //get youtube videos by query
  componentDidMount() {
    this.getYoutubeVideos('cats');
  }


  getYoutubeVideos(query) {
    console.log(this);
    // console.log(searchYouTube);
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    this.props.searchYouTube(options, data => {
      console.log('test2' + data);
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    });
  }



  //   searchYouTube(options, (videos) => {
  //   //   this.setState({
  //   //     videoListL: videos,
  //   //     currentVideoL: videoList[0]
  //   //   });
  //   // });
  // }
  // onCLick set currentVideo to clicked video
  handleClick(event, video) {
    event.preventDefault();
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em> <Search handleChange={this.getYoutubeVideos.bind(this)} /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videoList} handleClick={this.handleClick.bind(this)} /></em></h5></div>
          </div>
        </div>
      </div>
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
