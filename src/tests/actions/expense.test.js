import { editExpense,removeExpense,addExpense } from '../../actions/expense'

test('should setup edit expense action object',() => {
    const action = editExpense('123abcd',{ description: 'Buy office desk' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abcd",
        updates: {
            description: 'Buy office desk'
        }
    })
});

//removeExpense,addExpense
test('should setup remove expense',() => {
    const action = removeExpense({
        id: 123
    })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: 123
    })
});

test('should add expense',() => {
    const expenseData = {
        description: "new",
        note: "hello",
        amount: 234,
        createdAt: 100
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
});

test('should setup add expense action object with default value',() => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
});