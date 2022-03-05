import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
createKey = (item,column) =>{
  return item._id +(column.path || column.key)
}

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {/*item[column.path]  -->because this syntax cannot handle nested object property, instead we using lodash get() method*/}
            {columns.map((column) => (
              <td key={this.createKey(item,column)}>{this.renderCell(item,column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
TableBody.defaultProps = {
  valueProperty:"_id"
}
export default TableBody;
