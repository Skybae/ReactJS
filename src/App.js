// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import CounterApp from './CounterApp.js'
import { store } from './redux/store.js';
// import Counter from './Counter';
// import CrudOp from './CrudOp';
// import PostList from './PostList';
// import List from './List';
// import ToDo from './ToDo';

function App() {
  return (
    <>
    <Provider store={store}>
     {/* <PostList/> */}
     {/* <List/> */}
     {/* <CrudOp/> */}
     {/* <ToDo/> */}
     {/* <Counter/> */}
     <div className='App'>
      <CounterApp/>
     </div>
     </Provider>

     </>
  );
}

export default App;
