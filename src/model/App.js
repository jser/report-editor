// MIT © 2017 azu
"use strict";
import Draft from "./Draft/Draft.js";
export default class App {
    /**
     *
     * @param {Draft} draft
     * @param {Issues} issues
     */
    constructor({draft, issues}) {
        this.draft = draft;
        this.issues = issues;
    }

    /**
     * issues item to draft
     * @param {number} issueItemIndex
     */
    issueToDraft(issueItemIndex) {
        const issueItem = this.issues.popItemAtIndex(issueItemIndex);
        this.draft.addItem(issueItem);
    }

    /**
     * draft to issues
     * @param {number} draftItemIndex
     */
    draftToIssue(draftItemIndex) {
        const issueItem = this.draft.popItemAtIndex(draftItemIndex);
        this.issues.addItem(issueItem);
    }
}