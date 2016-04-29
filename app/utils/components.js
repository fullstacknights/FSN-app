import Home from '../Home/Container';
import Schedule from '../Schedule/Container';
import Venue from '../Venue/Container';
import PastEvents from '../PastEvents/Container';
import Information from '../Information/Container';
import SubmitTalk from '../SubmitTalk/Container';
import OpenMic from '../OpenMic/Container';

export default [{
  name: 'home',
  headerText: 'Home',
  component: Home
}, {
  name: 'schedule',
  headerText: 'Schedule',
  component: Schedule
}, {
  name: 'venue',
  headerText: 'Venue',
  component: Venue
}, {
  name: 'past-events',
  headerText: 'Past Events',
  component: PastEvents
}, {
  name: 'information',
  headerText: 'Information',
  component: Information
}, {
  name: 'submit-talk',
  headerText: 'Submit a Talk',
  component: SubmitTalk
}, {
  name: 'open-mic',
  headerText: 'Open Mic',
  component: OpenMic
}];
