const initialState = {
  userName: "Duncan MacLeod",
  status: "the one alive",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return { userName: action.userName, status: action.status };
    default:
      return state;
  }
};

export default usersReducer;
