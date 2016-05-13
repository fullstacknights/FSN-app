import React, { View } from 'react-native';
import Profile from '../SpeakerProfile/components/profile';

export default Component =>
  class SpeakerModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: false,
        speaker: {}
      };
    }

    updateSpeaker = (speaker) => {
      this.setState({ display: true, speaker });
    };

    dismiss = () => {
      this.setState({ display: false });
    };

    render() {
      return (
        <View style={{flex: 1}}>
          <Component {...this.props} updateSpeaker={this.updateSpeaker}/>
          <Profile
            dismiss={this.dismiss}
            displayProfile={this.state.display}
            fullname={this.state.speaker.fullname}
            profileImg={this.state.speaker.profileImg}
            about={this.state.speaker.about}
            githubUrl={this.state.speaker.githubUrl}
            dribbbleUrl={this.state.speaker.dribbbleUrl}
            twitterUrl={this.state.speaker.twitterUrl}
          />
        </View>
      );
    }
  }
