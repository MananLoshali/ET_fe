import { createSlice } from "@reduxjs/toolkit";
const amountSlice = createSlice({
  name: "amounts",
  initialState: {
    minIncome: 0,
    maxIncome: 0,
    minExpense: 0,
    maxExpense: 0,

    totalIncome: 0,
    totalExpense: 0,
    totalBalance: 0,

    error: false,
    isFetching: false,
    incomes: [],
    expenses: [],
  },
  reducers: {
    addAmountsStart(state, action) {
      state.isFetching = true;
    },
    addAmountsSuccess(state, action) {
      state.isFetching = false;

      if (action.payload.amount_type === "incomes") {
        state.incomes.push(action.payload);
        state.totalIncome += action.payload.amount;
      } else {
        state.expenses.push(action.payload);
        state.totalExpense += action.payload.amount;
      }
      state.totalBalance = state.totalIncome - state.totalExpense;

      state.minIncome = Math.min(...state.incomes.map((item) => item.amount));
      state.maxIncome = Math.max(...state.incomes.map((item) => item.amount));
      state.minExpense = Math.min(...state.expenses.map((item) => item.amount));
      state.maxExpense = Math.max(...state.expenses.map((item) => item.amount));
    },
    addAmountsFailure(state, action) {
      state.error = true;
      state.isFetching = false;
    },

    /////////////  GET INCOMES AND EXPENSES FROM DATABASE

    // getAmountStart(state, action) {
    //   console.log("fetching start");
    // },
    // getAmountSuccess(state, action) {
    //   console.log(action.payload.type);

    //   if (action.payload.type === "incomes") {
    //     state.incomes.push(action.payload);
    //   } else {
    //     state.expenses.push(action.payload);
    //   }
    // },
    // getAmountFailure(state, action) {
    //   console.log("fetching end");
    // },

    getIncomeStart(state, action) {},
    getIncomeSuccess(state, action) {
      state.incomes.push(action.payload);
      state.totalIncome += action.payload.amount;

      state.totalBalance = state.totalIncome - state.totalExpense;

      state.minIncome = Math.min(...state.incomes.map((item) => item.amount));
      state.maxIncome = Math.max(...state.incomes.map((item) => item.amount));
      state.minExpense = Math.min(...state.expenses.map((item) => item.amount));
      state.maxExpense = Math.max(...state.expenses.map((item) => item.amount));
    },
    getIncomeFailure(state, action) {},

    getExpenseStart(state, action) {},
    getExpenseSuccess(state, action) {
      state.expenses.push(action.payload);
      state.totalExpense += action.payload.amount;

      state.totalBalance = state.totalIncome - state.totalExpense;

      state.minIncome = Math.min(...state.incomes.map((item) => item.amount));
      state.maxIncome = Math.max(...state.incomes.map((item) => item.amount));
      state.minExpense = Math.min(...state.expenses.map((item) => item.amount));
      state.maxExpense = Math.max(...state.expenses.map((item) => item.amount));
    },
    getExpenseFailure(state, action) {},

    deleteAmountStart(state, action) {},
    deleteAmountSuccess(state, action) {
      if (action.payload.type === "incomes") {
        state.incomes = state.incomes.filter(
          (item) => item._id !== action.payload.id
        );
      } else {
        state.expenses = state.expenses.filter(
          (item) => item._id !== action.payload.id
        );
      }
      state.totalIncome += action.payload.amount;

      state.totalExpense += action.payload.amount;

      state.totalBalance = state.totalIncome - state.totalExpense;

      state.minIncome = Math.min(...state.incomes.map((item) => item.amount));
      state.maxIncome = Math.max(...state.incomes.map((item) => item.amount));
      state.minExpense = Math.min(...state.expenses.map((item) => item.amount));
      state.maxExpense = Math.max(...state.expenses.map((item) => item.amount));
    },
    deleteAmountFaliure(state, action) {},
  },
});

export const amountActions = amountSlice.actions;

export default amountSlice.reducer;
