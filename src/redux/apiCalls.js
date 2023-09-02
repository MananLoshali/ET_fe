import { request } from "../requestMethods";
import { amountActions } from "./amountReducer";
import { actions } from "./userReducer";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
//     "Content-Type": "application/json",
//   },
// };

// {
//   headers: {
//     config,
//   },
//   withCredentials: true,
// }

export const signUp = async (dispatch, user) => {
  dispatch(actions.signUpStart()); //  DISPATCH IS USED TO RUN THE SIGNUPSTART().
  try {
    const res = await request.post("/auth/signup", user);
    dispatch(actions.signUpSuccess(res.data));
  } catch (error) {
    dispatch(actions.signUpFailure());
  }
};

export const signIn = async (dispatch, user) => {
  dispatch(actions.signInStart());
  try {
    const res = await request.post("/auth/signin", user);
    dispatch(actions.signInSuccess(res.data));
  } catch (error) {
    dispatch(actions.signInFailure());
  }
};

export const addAmounts = async (dispatch, amount, id, types) => {
  dispatch(amountActions.addAmountsStart());
  try {
    console.log(amount);
    const res = await request.post(`/amounts/add/${id}`, amount);
    console.log(res.data.nAmount);

    dispatch(amountActions.addAmountsSuccess(res.data.nAmount));
  } catch (error) {
    dispatch(amountActions.addAmountsFailure());
  }
};

// export const getIncomes = async (dispatch, id, types) => {
//   dispatch(amountActions.getAmountStart()); //can attach a loader here
//   let res;
//   try {
//     if (types === "incomes") {
//       res = await request.get(`/amounts/get/${id}?income=true`);
//     } else {
//       res = await request.get(`/amounts/get/${id}?expense=true`);
//     }
//     dispatch(
//       amountActions.getAmountSuccess({ payload: res.data, type: types })
//     );
//   } catch (error) {
//     dispatch(amountActions.getAmountFailure());
//   }
// };

export const getIncomes = async (dispatch, id) => {
  dispatch(amountActions.getIncomeStart());
  try {
    const res = await request.get(`/amounts/get/${id}?income=true`);
    res.data.amounts.map((item) =>
      dispatch(amountActions.getIncomeSuccess(item))
    );
    // dispatch(amountActions.getIncomeSuccess(res.data.amounts));
  } catch (error) {
    dispatch(amountActions.getIncomeFailure());
  }
};

export const getExpenses = async (dispatch, id) => {
  dispatch(amountActions.getExpenseStart());
  try {
    const res = await request.get(`/amounts/get/${id}?expense=true`);
    res.data.amounts.map((item) =>
      dispatch(amountActions.getExpenseSuccess(item))
    );
    // dispatch(amountActions.getExpenseSuccess(res.data.amounts));
  } catch (error) {
    dispatch(amountActions.getExpenseFailure());
  }
};

export const deleteAmounts = async (dispatch, id, type) => {
  dispatch(amountActions.deleteAmountStart);
  try {
    const res = await request.delete(`/amounts/delete/${id}`);
    dispatch(
      amountActions.deleteAmountSuccess({ data: res.data, type: type, id: id })
    ); //res.data can be use to show some toast box
  } catch (error) {
    dispatch(amountActions.deleteAmountFaliure());
  }
};
