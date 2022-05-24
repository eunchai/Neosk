// export const GET_MORE = "RECIPE/GET_MORE" as const;
// export const SET_LIST = "RECIPE/SET_LIST" as const;
// export const SET_ERROR = "RECIPE/SET_ERROR" as const;

export const liquidList = (list) => ({
  type: "LIQUID/SET_LIST",
  payload: list,
});

export const liquidError = (error) => ({
  type: "LIQUID/SET_ERROR",
  payload: error,
});
