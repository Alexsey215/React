import { REQUEST_STATUS } from "../../utils/constants";

export const selectArticlesLoading = (state) =>
    state.articlesStore.request.status === REQUEST_STATUS.PENDING;
export const selectArticles = (state) => state.articlesStore.list;
export const selectArticlesError = (state) => state.articlesStore.request.error;
