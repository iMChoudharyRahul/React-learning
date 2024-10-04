import { useEffect, useReducer, useRef, useState } from "react";
import "../../../Projects/BlogApp/blogs.css";

function blogReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }

    case "REMOVE": {
      return state.filter((item, index) => action.payload != index);
    }
    default:
      return [];
  }
}

//Blogging App using Hooks
export default function BlogUsingReducer() {
  const [blogData, setBlogData] = useState({ title: "", content: "" });
  const [blogState, dispatch] = useReducer(blogReducer, []);
  const focusTitleRef = useRef(null);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: { title: blogData.title, content: blogData.content },
    });
    setBlogData({ title: "", content: "" });
    //we use ref to focus again title box after click on add button
    focusTitleRef.current.focus();
  }

  useEffect(() => {
    focusTitleRef.current.focus();
  }, []);

  useEffect(() => {
    if (blogState.length && blogState[0].title) {
      document.title = blogState[0].title;
    } else {
      document.title = "No Blogs!!";
    }
  }, [blogState]);

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={blogData.title}
              ref={focusTitleRef}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={blogData.content}
              required
              onChange={(e) =>
                setBlogData({ ...blogData, content: e.target.value })
              }
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>
      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogState.map((blog, i) => (
        <div className="blog" key={i}>
          <h2>{blog.title}</h2>
          <span className="blog-content">
            <p>{blog.content}</p>
            {/* <button className="remove" onClick={() => removeBlogs(i)}> */}
            <button
              className="remove"
              onClick={() => dispatch({ type: "REMOVE", payload: i })}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
