const initialBar = {
  payload: false,
};

export const sidebar = (state = initialBar, action: any) => {
  switch (action.type) {
    case "sidebar":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
