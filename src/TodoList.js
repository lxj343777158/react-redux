import React, { Fragment } from "react";
import { connect } from "react-redux";

const TodoList = props => {
    
  const { inputValue, changeInputValue, addList, list, deleteListItem } = props;

  return (
    <Fragment>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={addList}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => deleteListItem(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

//store.dispatch props
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },

    addList() {
      const action = {
        type: "add_list"
      };
      dispatch(action);
    },

    deleteListItem(index) {
      const action = {
        type: "delete_list_item",
        index
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
