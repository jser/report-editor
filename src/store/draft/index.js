// MIT © 2017 azu
"use strict";
// use-case
import swapDraftItemUseCase from "../../action/draft/swapDraftItemUseCase";
import addItemToDraftUseCase from "../../action/draft/addItemToDraftUseCase";
import removeItemFromDraftUseCase from "../../action/draft/removeItemFromDraftUseCase";
/**
 *
 * @param {App}app
 * @param {Object} payload
 * @constructor
 */
export default function DraftReducer(app, payload) {
    switch (payload.type) {
        case swapDraftItemUseCase: {
            app.draft.swapItem({
                oldIndex: payload.oldIndex,
                newIndex: payload.newIndex
            });
            return;
        }
        case addItemToDraftUseCase: {
            app.issueToDraft(payload.issueItemIndex);
            return;
        }
        case removeItemFromDraftUseCase: {
            app.draftToIssue(payload.draftItemIndex);
            return;
        }
        case a:
            app.draft.fillIssueWithComments(issue, comments);
            return;
        default:
            return state;
    }
}