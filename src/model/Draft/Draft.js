// MIT © 2017 azu
"use strict";
import {arrayMove} from 'react-sortable-hoc';
export default class Draft {
    /**
     * @param {IssueItem[]} items
     */
    constructor(items = []) {
        this.items = items;
    }

    /**
     * @returns {number[]}
     */
    getNonFilledIssue() {
        return this.items.map(item => item.id);
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

    /**
     * @param {number} oldIndex
     * @param {number} newIndex
     */
    swapItem({oldIndex, newIndex}) {
        this.items = arrayMove(this.items, oldIndex, newIndex);
    }

    generateOutputContent() {
        return this.items.map(item => item.title).join("\n");
    }
}