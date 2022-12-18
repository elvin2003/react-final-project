let obj = {
  formVisible: false
}

function reducer(state = obj, action) {
  switch (action.type) {
    case "ADVANCED_FILTER":
      return state = {
        ...state,
        formVisible: action.load
      }
    default:
      return state;
  }
}
export default reducer