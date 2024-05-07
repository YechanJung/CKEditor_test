import React from 'react'
import Editor from './components/Editor'
import PostList from './components/PostList'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBoardButton from './components/CreateBoardButton'
import UpdateBoardScreen from './components/UpdateBoardScreen';
import BoardList from './components/BoardList'
import GetBoardd from './components/GetBoardd';
import RadioGroupRating from './components/icon';
function App() {
  return (
    <div>
      {/* <Editor /> */}
      {/* <PostList /> */}
      {/* <BoardList  /> */}
{/*       

      <Router>
        <Routes>
          <Route path="/updateBoard/" element={<UpdateBoardScreen />} />
          <Route path="/" element={<CreateBoardButton />} />
        </Routes>
      </Router> */}
      {/* <GetBoardd /> */}
      <RadioGroupRating />

    </div>
  )
}

export default App
