// MIT © 2017 azu
"use strict";
export default class Issues {
    /**
     * @param {IssueItem[]} items
     */
    constructor(items = []) {
        this.items = items;
    }

    /**
     * @param {IssueItem} item
     */
    addItem(item) {
        this.items = this.items.concat(item);
    }

    /**
     * @param {IssueItem} item
     */
    removeItem(item) {
        if (!this.items.includes(item)) {
            return;
        }
        this.items.splice(this.items.indexOf(item), 1);
        this.items = this.items.slice();
    }

    /**
     * @param {number} index
     * @returns {IssueItem|undefined}
     */
    popItemAtIndex(index) {
        const item = this.items[index];
        if (!item) {
            return;
        }
        this.removeItem(item);
        return item;
    }

};