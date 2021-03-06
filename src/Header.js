import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "./connect";

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
  };

  /*constructor() {
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

  render() {
    return (
      <h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
    )
  }
}

const mapStateProps = (state) => {
  return {
    themeColor: state.themeColor,
  }
};
export default Header = connect(mapStateProps)(Header);
