import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, SmileOutlined } from "@ant-design/icons";
import SurveyTable from "./SurveyTable"

import "antd/dist/antd.css";
import "./index.css";


export default class App extends React.Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    function Home() {
      return <SurveyTable />
    }

    function About() {
      return <div style={{padding: "40px 65px 50px 65px", width: "50%", margin: "auto"}} >
              <div><h3>Towards a Science of Human-AI Decision Making: A Survey of Empirical Studies</h3></div>
              <div style={{paddingBottom: "15px"}}><h4>
                <a href="https://vivlai.github.io/" target="_blank">Vivian Lai</a>, <a href="https://chacha-chen.github.io/" target="_blank">Chacha Chen</a>, <a href="http://qveraliao.com/" target="_blank">Q. Vera Liao</a>, <a href="https://alisonmsmith.github.io/" target="_blank">Alison Smith-Renner</a>, <a href="https://chenhaot.com/" target="_blank">Chenhao Tan</a>
              </h4></div>

              <p style={{textAlign: "justify", marginBottom: "15px"}}>
                As AI systems demonstrate increasingly strong predictive performance, their adoption has grown in numerous domains.  
                However, in high-stakes domains such as criminal justice and healthcare, full automation is often not desirable due to safety, ethical, and legal concerns, yet fully manual approaches can be inaccurate and time consuming. 
                As a result, there is growing interest in the research community to augment human decision making with AI assistance. 
                Besides developing AI technologies for this purpose, the emerging field of human-AI decision making must embrace empirical approaches to form a foundational understanding of how humans interact and work with AI to make decisions.  
                To invite and help structure research efforts towards a science of understanding and improving human-AI decision making, we survey recent literature of empirical human-subject studies on this topic. 
                We summarize the study design choices made in over 100 papers in three important aspects:  (1) decision tasks, (2) AI models and AI assistance elements, and (3) evaluation metrics.
                For each aspect, we summarize current trends, discuss gaps in current practices of the field, and make a list of recommendations for future research.
                Our survey highlights the need to develop common frameworks to account for the design and research spaces of human-AI decision making, so that researchers can make rigorous choices in study design, and the research community can build on each other's work and produce generalizable scientific knowledge. 
                We also hope this survey will serve as a bridge for HCI and AI communities to work together to mutually shape the empirical science and computational technologies for human-AI decision making.
                <br /><br />

                Read the full survey <a href="https://arxiv.org/abs/2112.11471" target="_blank">here.</a>
                <br /><br />

                To add a paper to this interactive table, please follow the instructions and
                submit a pull request <a href="https://github.com/haidecisionmaking/haidecisionmaking.github.io" target="_blank">here</a>.
                If you have any questions, feel free to drop us an email at haidecisionmaking (at) gmail (dot) com.
              </p>
             </div>
    }

    const { current } = this.state;

    return (
      <Router>
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{padding: "15px 50px 0px 50px"}} 
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="app" icon={<SmileOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route path="/https://haidecisionmaking.github.io/home"><Home /></Route>
          <Route path="/https://haidecisionmaking.github.io/about"><About /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

