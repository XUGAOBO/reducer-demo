import React, { useReducer } from "react";
import TableDemo from "./components/TableDemo";
import reducer from "./reducer";
import context from "./context";

const data = []; // 造初始数据
for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    name: "Jhon Black " + i,
    age: 26,
    address: "恒电大厦B座2层",
    email: "John@sina.com"
  });
}

function Demo() {
  const [dataSource, dispatch] = useReducer(reducer, data);

  return (
    <context.Provider value={{ dispatch }}>
      <TableDemo data={dataSource} />
    </context.Provider>
  );
}

export default Demo;
