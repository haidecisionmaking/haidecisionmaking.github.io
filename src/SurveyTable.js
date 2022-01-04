import React from 'react';
import { Alert, Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './index.css';

import data from './data'

export default class SurveyTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
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
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text => {
      if (dataIndex === "ai_model" || dataIndex === "ai_assistance_element" || dataIndex === "actual_task" || dataIndex === "task_eval_metric" || dataIndex === "ai_eval_metric") {
        const data = text.split(";").filter(item => item);
        if (data.length === 0) return null;
        if (data.length !== 1)
          {return this.state.searchedColumn === dataIndex ? (
            <ul style={{ padding: "0 0 0 20px" }}>{data.map((item) => {
              return <li key={item}>{<Highlighter
                                        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                                        searchWords={[this.state.searchText]}
                                        autoEscape
                                        textToHighlight={item ? item.toString() : ''}
                                      />}</li>
            })}</ul>
          ) : (<ul style={{ padding: "0 0 0 20px" }}>{data.map((item) => { return <li key={item}>{item}</li> })}</ul>);
        }
      }
      return this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (text)
    },
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleEntailmentRequest(e) {
    e.preventDefault();
  }

  render() {
    const columns = [
      {
        title: "#",
        key: "index",
        render: (text, record, index) => index
      },
      {
        title: "Paper",
        dataIndex: "paper",
        key: "paper",
        width: 250,
        fixed: "left",
        ...this.getColumnSearchProps("paper")
      },
      {
        title: "Paper link",
        dataIndex: "paper_link",
        key: "paper_link",
        width: 100,
        render: text => <a href={text} target="_blank">Link</a>
      },
      {
        title: "Authors",
        dataIndex: "authors",
        key: "authors",
        width: 200,
        ...this.getColumnSearchProps("authors")
      },
      {
        title: "Venue",
        dataIndex: "venue",
        key: "venue",
        width: 150,
        ...this.getColumnSearchProps("venue")
      },
      {
        title: "Year",
        dataIndex: "year",
        key: "year",
        width: 60,
        sorter: {
          compare: (a, b) => a.year - b.year,
          multiple: 1,
        },
      },
      {
        title: "Task",
        dataIndex: "actual_task",
        key: "actual_task",
        width: 200,
        ...this.getColumnSearchProps("actual_task"),
      },
      {
        title: "AI model",
        dataIndex: "ai_model",
        key: "ai_model",
        width: 200,
        ...this.getColumnSearchProps("ai_model"),
      },
      {
        title: "AI assistance element",
        dataIndex: "ai_assistance_element",
        key: "ai_assistance_element",
        width: 250,
        ...this.getColumnSearchProps("ai_assistance_element"),
      },
      // {
      //   title: "AI task type",
      //   dataIndex: "ai_task_type",
      //   key: "ai_task_type",
      //   width: 100,
      //   ...this.getColumnSearchProps("ai_task_type")
      // },
      // {
      //   title: "Dataset type",
      //   dataIndex: "dataset_type",
      //   key: "dataset_type",
      //   width: 100,
      //   filters: [
      //     { text: 'tabular', value: 'tabular' },
      //     { text: 'text', value: 'text' },
      //     { text: 'image', value: 'image' },
      //   ],
      // },
      {
        title: "Task evaluation metric",
        dataIndex: "task_eval_metric",
        key: "task_eval_metric",
        width: 250,
        ...this.getColumnSearchProps("task_eval_metric"),

      },
      {
        title: "AI evaluation metric",
        dataIndex: "ai_eval_metric",
        key: "ai_eval_metric",
        width: 250,
        ...this.getColumnSearchProps("ai_eval_metric"),
      },
    ];

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <div>
        <Alert
          message="Informational Notes"
          description='This interactive table allows you to search papers by keywords in various columns. For example, you are able to find papers with "explanations" in their title in the "Paper" column. To reset, click on the Reset button.'
          type="info"
          showIcon
          closable
          style={{margin: "30px 65px 0 65px"}}
        />

        <Button 
          style={{margin: "20px 65px 0 65px"}} 
          type="primary"
          onClick={refreshPage}>
            Reset
        </Button>
        <br />

        <div style={{margin: "20px 65px 0 65px"}} >
        There are currently <b>{data.length}</b> papers in the table.
        </div>

        <Table
          columns={columns}
          // rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
          dataSource={data}
          bordered
          size="middle"
          pagination={false}
          style={{padding: "40px 65px 50px 65px"}}
          scroll={{ x: "calc(700px + 50%)", y: 700 }} 
        />;
      </div>
    )
  }
}