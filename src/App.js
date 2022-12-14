import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Dark from "./pages/Homepage3Dark";
// import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage3Dark />
        </Route>
        {/* <Route path="/blogs" component={Bloglist} exact /> */}
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
