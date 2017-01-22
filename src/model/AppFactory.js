// MIT © 2017 azu
"use strict";
import App from "./App";
import Draft from "./Draft/Draft";
import Issues from "./Issues/Issues";
import IssueItemFactory from "./IssueItem/IssueItemFactory";
export default class AppFactory {
    /**
     * @param {Object[]} items
     */
    static create({items}) {
        const issueItems = items.map(item => IssueItemFactory.create(item));
        return new App({
            draft: new Draft(),
            issues: new Issues(issueItems)
        });
    }
}