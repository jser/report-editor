// MIT © 2017 azu
"use strict";
const GitHub = require("github-api");
export default class GitHubIssue {
    /**
     *
     * @param {string} user
     * @param {string} repo
     */
    constructor({user, repo}) {
        this.gitHub = new GitHub();
        this.user = user;
        this.repo = repo;
    }


    getOpenedIssues() {
        return this._getIssueClient().listIssues({
            state: "open"
        });
    }

    /**
     * @param {number} id
     * @returns {Promise}
     */
    getIssueComment(id) {
        return this._getIssueClient().getIssueComment(id);
    }

    /**
     * @returns {Issue}
     * @private
     */
    _getIssueClient() {
        return this.gitHub.getIssues(this.user, this.repo);
    }
}