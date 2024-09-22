import { users } from "../user";

const initialState = {
  users: users,
  filter: "",
};

const setFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        users: users.filter((elem) =>
          elem.name.toLowerCase().includes(action.filter.toLowerCase())
        ),
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default setFilterReducer;
