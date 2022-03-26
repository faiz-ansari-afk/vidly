import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ columns, sortColumn, onSort, data }) => {
  return (

    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      
      <TableBody data={data} columns={columns} valueProperty="_id" />
    </table>
  );
};

export default Table;

