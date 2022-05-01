import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

function BlogApp() {
  const currentUser = true;
  return (
    <Router >
    <TopBar />
    <Switch>
    <Route exact path="/">
    <Homepage />
    </Route>
    <Route path="/posts">
    <Homepage />
    </Route>
    <Route path="/register">
    {currentUser ? <Homepage /> : <Register /> }
    </Route>
    <Route path="/login">
    {currentUser ? <Homepage /> : <Login /> }
    </Route>
    <Route path="/post/:id">
      <Single/>
    </Route>
    <Route path="/write">
      {currentUser ? <Write /> : <Login />}
    </Route>
    <Route path="settings">
      {currentUser ? <Settings /> : <Login />}
    </Route>
    </Switch>
    </Router>
  );
}

export default BlogApp;