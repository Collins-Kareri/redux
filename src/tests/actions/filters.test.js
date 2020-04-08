import { setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate } from "../../actions/filters";
import moment from 'moment';

test("should gnerate set text filter with text value",() => {
    const text = "seattle";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});

test('should generate set text filter with default value',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});

test('Should generate set start date action object',() => {
    const action = setStartDate(moment(350));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(350)
    })
})

test('Should generate set end date action object',() => {
    const action = setEndDate(moment(350));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(350)
    })
})

//sortbyamount, sortbydate
test('should generate sort by amount action object',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort by amount action object',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})