// MIT © 2017 azu
"use strict";
import IssueItem from "./IssueItem";
import IssueIComments from "./IssueIComments";
import IssueIComment from "./IssueIComment";
export default class IssueItemFactory {
    /**
     * @param {Object} object
     * @returns {IssueItem}
     */
    static create(object) {
        return new IssueItem({
            id: object.id,
            title: object.title
        })
    }

    /**
     * @param {IssueItem} issueItem
     * @param {Object[]} rawComments
     * @returns {IssueItem}
     */
    static fillComments(issueItem, rawComments) {
        const comments = rawComments.map(rawComment => {
            return new IssueIComment({
                body: rawComment.body
            });
        });
        return issueItem.fillComments({
            comments: new IssueIComments({comments})
        });
    }
}