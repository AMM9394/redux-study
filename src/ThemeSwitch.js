import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "./connect";

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
  };

  /*
    constructor() {
      super();
      this.state = {themeColor: ''};
    }

    componentWillMount() {
      const {store} = this.context;
      this._updateThemeColor();
      store.subscribe(() => this._updateThemeColor());
    }

    _updateThemeColor() {
      const {store} = this.context;
      const state = store.getState();
      this.setState({themeColor: state.themeColor});
    }*/

  handleSwitchColor(color) {
    if (this.props.dispatch) {
      this.props.dispatch({type: 'CHANGE_COLOR', themeColor: color});
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleSwitchColor.bind(this, 'red')}
          style={{color: this.props.themeColor}}>Red
        </button>
        <button
          onClick={this.handleSwitchColor.bind(this, 'blue')}
          style={{color: this.props.themeColor}}>Blue
        </button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({type: 'CHANGE_COLOR', themeColor: color});
    }
  }
};

ThemeSwitch = connect(mapStateToProps)(ThemeSwitch);

export default ThemeSwitch
