import { useEffect, useRef, useState } from "react";
import "./blogs.css";
//Blogging App using Hooks
export default function Blog() {
  const [blogData, setBlogData] = useState({ title: "", content: "" });
  const [blogs, setBlog] = useState([]);
  const focusTitleRef = useRef(null);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    setBlog([...blogs, { title: blogData.title, content: blogData.content }]);
    setBlogData({ title: "", content: "" });
    //we use ref to focus again title box after click on add button
    focusTitleRef.current.focus();
  }

  function removeBlogs(i) {
    setBlog(blogs.filter((item, index) => i !== index));
  }

  useEffect(() => {
    focusTitleRef.current.focus();
  }, []);

  useEffect(() => {
    console.log(document.title, "Check the title of our page--->");
    if (blogs.length && blogs[0].title) {
      console.log(document.title, "Check the title of our page");
      document.title = blogs[0].title;
    } else {
      document.title = "No Blogs!!";
    }
  }, [blogs]);

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
      {/* <h3>Blog Title: {blogData.title}</h3> */}
      {/* <p>{blogData.content}</p> */}

      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h2>{blog.title}</h2>
          <span className="blog-content">
            <p>{blog.content}</p>
            <button className="remove" onClick={() => removeBlogs(i)}>
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
