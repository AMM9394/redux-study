import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red',
  };
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor};
    default:
      return state
  }
};
const store = createStore(themeReducer);

class Index extends Component {

  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {store};
  }

  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  dispatch({}); // 初始化state
  return {getState, dispatch, subscribe};
}


/*function renderApp(newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return;
  renderTitle(newAppState.title, oldAppState.title);
  renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return;
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = newTitle.text;
  titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) return;
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = newContent.text;
  contentDOM.style.color = newContent.color;
}

function stateChanger(state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      },
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text,
        }
      };
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color,
        }
      };
    default:
      return state;
  }
}

const store = createStore(stateChanger);
let oldState = store.getState();
store.subscribe(() => {
  const newState = store.getState();
  renderApp(newState, oldState);
  oldState = newState;
});
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'}); // 修改标题文本
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'}); // 修改标题颜色
// renderApp(store.getState()); // 把新的数据渲染到页面上


function userReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      //在数组末尾加一个元素
      return [...state, action.user];
    case  'DELETE_USER': {
      const newState = [...state];
      // 删除指定下标的元素
      newState.splice(action.index, 1);
      return newState;
    }
    case 'UPDATE_USER': {
      const newState = [...state];
      const modifyItem = {...newState[action.index]};
      Object.keys(action.user).forEach(key => {
        modifyItem[key] = action.user[key];
      });
      newState[action.index] = modifyItem;
      return newState;
    }
    default:
      return state;
  }
}*/
