import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import * as TYPES from './types'


const App = (props) => {

  useEffect(() => {
    props.fetchItems()
  },[])

  return <div className="App">
    <ul>
    {props.items.map(item => {
      return <li key={item.id}>{item.text}</li>
    })}
    </ul>
  </div>
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () =>
      dispatch({
        type: TYPES.FETCH_ITEMS_REQUEST
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
