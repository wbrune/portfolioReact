import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './Components/main';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main></Main>
        </Content>
    </Layout>

    </div>
  );
}

export default App;
