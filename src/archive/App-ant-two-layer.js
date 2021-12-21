import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: "John Brown",
//     age: i + 1,
//     street: "Lake Park",
//     building: "C",
//     number: 2035,
//     companyAddress: "Lake Street 42",
//     companyName: "SoftLake Co",
//     gender: "M"
//   });
// }

const data = [
  {
    paper: 'Are Explanations Helpful? A Comparative Study of the Effects of Explanations in AI-Assisted Decision-Making',
    venue: 'IUI',
    year: 2021,
    authors: 'Xinru Wang, Ming Yin',
    ai_model: 'GAM',
    ai_prediction: 'no',
    actual_task: 'recidivism prediction; forest cover prediction',
    dataset_type: 'tabular',
  },
  {
    paper: 'Assessing the Local Interpretability of Machine Learning Models',
    venue: '',
    year: 2019,
    authors: 'Dylan Slack, Sorelle Friedler, Carlos Scheidegger, Chitradeep Roy',
    ai_model: 'rule-based methods; GAM; NN',
    ai_prediction: 'no',
    actual_task: 'synthetic dataset',
    dataset_type: 'tabular',
  },
  {
    paper: 'Interpretable Decision Sets: A Joint Framework for Description and Prediction',
    venue: 'KDD',
    year: 2016,
    authors: 'Himabindu Lakkaraju, Stephen H. Bach, Jure Leskovec',
    ai_model: 'rule-based methods',
    ai_prediction: 'no',
    actual_task: 'bail outcome prediction; medical diagnosis',
    dataset_type: 'tabular',
  },
  {
    paper: 'The effects of example-based explanations in a machine learning interface',
    venue: 'IUI',
    year: 2019,
    authors: 'Carrie J. Cai, Jonas Jongejan, Jess Holbrook',
    ai_model: 'DNN',
    ai_prediction: 'yes',
    actual_task: 'picture guessing',
    dataset_type: 'image',
  },
  {
    paper: 'What can AI do for me: Evaluating Machine Learning Interpretations in Cooperative Play',
    venue: 'IUI',
    year: 2019,
    authors: 'Shi Feng, Jordan Boyd-Graber',
    ai_model: 'linear model',
    ai_prediction: 'yes',
    actual_task: 'quiz bowl',
    dataset_type: 'text',
  },
]

export default class App extends React.Component {
  state = {
    searchText: "",
    searchedColumn: ""
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "Paper",
        dataIndex: "paper",
        key: "paper",
        width: 100,
        fixed: "left",
        ...this.getColumnSearchProps("paper")
        // filters: [
        //   {
        //     text: "Joe",
        //     value: "Joe"
        //   },
        //   {
        //     text: "John",
        //     value: "John"
        //   }
        // ],
        // onFilter: (value, record) => record.name.indexOf(value) === 0
      },
      {
        title: "Authors",
        dataIndex: "authors",
        key: "authors",
        width: 100,
        fixed: "left"
      },
      {
        title: "Types of AI Assistance",
        children: [
          {
            title: "AI model",
            dataIndex: "ai_model",
            key: "ai_model",
            width: 300
          },
          {
            title: "AI prediction",
            dataIndex: "ai_prediction",
            key: "ai_prediction",
            width: 400
          }
        ]
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        pagination={false}
        style={{padding: "100px 50px 50px 50px"}} 
        scroll={{ x: "calc(700px + 50%)", y: 500 }}
      />
    );
  }
}

