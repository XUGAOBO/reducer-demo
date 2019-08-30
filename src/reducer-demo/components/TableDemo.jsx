import React, { useContext } from 'react';
import { Table } from 'antd';
import context from '../context';
import  * as types from '../actionTypes';

function TableDemo(props) {
  const { data } = props;

  const { dispatch } = useContext(context);

  function _handleAddData() {
    const key = Math.round(Math.random() * 100);
    dispatch({ 
      type: types.ADD_ROW_DATA,
      payload: {
        key,
        name: 'demo' + key,
        age: 26,
        address: '恒电大厦B座2层',
        email: 'demo@meituan.com',
      }
    })
  }

  function _handleRemove(rowIndex) {
    dispatch({
      type: types.REMOVE_ROW_DATA,
      payload: {
        rowIndex
      }
    })
  }

  const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (text, row, index) => (
      <span>
        <a onClick={_handleAddData}>添加</a>
        &nbsp;|&nbsp;
        <a onClick={() => _handleRemove(index)}>删除</a>
      </span>
    )
  },
];

  return (
    <Table rowKey="key" dataSource={data} columns={columns} />
  )
}
export default TableDemo;