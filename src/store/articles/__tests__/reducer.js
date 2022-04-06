import {REQUEST_STATUS} from "../../../utils/constants";
import {getArticlesPending} from "../actions";
import {articlesReducer} from "../reducer";

describe('articles test', () => {
    it('returns REQUEST_STATUS',  () => {
        const expected = {
            list: [],
            request: {
                error: null,
                status: REQUEST_STATUS.PENDING,
            },
        }
        const received = articlesReducer(undefined, getArticlesPending());
        expect(received).toEqual(expected);
    });
})
