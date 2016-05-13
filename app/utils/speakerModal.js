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
            github={this.state.speaker.github}
            dribbble={this.state.speaker.dribbble}
            twitter={this.state.speaker.twitter}
          />
        </View>
      );
    }
  }
