import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {createAccountAction} from '../../redux/walletActions';
import AccountsList from './accountsList';
import Toolbar from '../Toolbar';
import {AddIcon} from '../Icons';
export class Wallet extends React.Component {

  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 36000 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }


  render() {
    const {accounts, balances} = this.props;
    return (
      <div>
        <Toolbar
          title="BETTING BOARD"
          actionButtons={
            <FlatButton
              onClick={this.props.onCreateAccount}
              label="NEW BET"
              icon={<AddIcon />}/>}
        />
 {/* <button onClick={this.startTimer}>Start</button>
        h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s} */}
        <AccountsList accounts={ accounts } balances={  balances }/>
      </div>);
  }
}

Wallet.propTypes = {
  accounts: PropTypes.array.isRequired,
  balances: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    accounts: state.wallet.accounts,
    balances: state.balances
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateAccount: () => {
      dispatch(createAccountAction());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
