var React      = require('react');
var ReactDOM   = require('react-dom');
var Header     = require('./Header.react');
var Tweet      = require('./Tweet.react');


var StreamTweet = React.createClass({

  getInitialState: function() {
    console.log('[Snapterest] StreamTweet:1. Runinig getInitialState()');
    
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },

  componentWillMount: function() {
    console.log('[Snapterest] StreamTweet:2. Runinig getcomponentWillMountInitialState()');
        
  },

  render: function() {
    console.log('[Snapterest] StreamTweet: Running Render()');

    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet 
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection} />
      </section>
    );
  }
});

module.exports = StreamTweet;