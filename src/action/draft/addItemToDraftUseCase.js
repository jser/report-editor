// MIT © 2017 azu
"use strict";
import dispatcher from "../../dispatcher"
/**
 * @param {number} issueItemIndex
 */
export default function addItemToDraftUseCase(issueItemIndex) {
    dispatcher.dispatch({
        type: addItemToDraftUseCase,
        issueItemIndex
    });
}