// MIT © 2017 azu
"use strict";
export default class IssueItem {
    constructor({id, title, body}) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.comments = null;
    }

    /**
     * @param {IssueIComments} comments
     */
    fillComments(comments) {
        this.comments = comments;
    }
}