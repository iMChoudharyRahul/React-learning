import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./BasicLayout/header/Header";
import Footer from "./BasicLayout/footer/Footer";
import LeftAside from "./BasicLayout/manubar/LeftAside";
import RightAside from "./BasicLayout/manubar/RightAside";
import Home from "./components/Home/Home";
import StatePrev from "./FunctionComp/Hooks/useRef/StatePrev";
import BasicReducer from "./FunctionComp/Hooks/useReducer/Basic";
import TodoInput from "./FunctionComp/Hooks/useState/TodoList/TodoInput";
import Error from "./components/Error/Error";
import TakeInput from "./FunctionComp/Hooks/useReducer/Todos/TakeInput";
import Board from "./FunctionComp/Projects/TicTacToeGame/Board";
// import StopWatch from "./FunctionComp/Projects/StopWatch/StopWatch";
import BlogApp from "./FunctionComp/Projects/BlogApp/Blogs";
import BlogUsingReducer from "./FunctionComp/Hooks/useReducer/BlogApp/BlogUsingReducer";
import IndexForm from "./FunctionComp/Forms/LocalStroge/PasswordReset/IndexForm";
import CheckUser from "./FunctionComp/Forms/CheckOnlineUser/CheckUser";
import showData from "./Interview-Prap/VsCode-FileStructure/showData";
import ProductPage from "./Features/Pagination/ProductPage";

function App() {
  return (
    <>
      <div className="main-container">
        <Router>
          <Header />
          <div className="main-content">
            <LeftAside />
            <div className="list-item">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Error />} />
                <Route path="/ref" element={<StatePrev />}></Route>
                <Route path="/reducer" element={<BasicReducer />}></Route>
                <Route path="/blog" element={<BlogUsingReducer />}></Route>
                <Route path="/crud" element={<TodoInput />}></Route>
                <Route path="/todo" element={<TakeInput />}></Route>
                <Route path="/game" element={<Board />}></Route>
                {/* <Route path="/timer" element={<StopWatch />}></Route> */}
                <Route path="/blogs" element={<BlogApp />}></Route>
                <Route path="/resetPass" element={<IndexForm />}></Route>
                <Route path="/network" element={<CheckUser />}></Route>
                {/* <Route path="/vs-folder" element={<showData />}></Route> */}
                <Route path="/pagination" element={<ProductPage />}></Route>
              </Routes>
            </div>
            <RightAside />
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
