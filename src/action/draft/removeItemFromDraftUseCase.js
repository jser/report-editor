// MIT © 2017 azu
"use strict";
import dispatcher from "../../dispatcher";
/**
 * @param {number} draftItemIndex
 */
export default function removeItemFromDraftUseCase(draftItemIndex) {
    dispatcher.dispatch({
        type: removeItemFromDraftUseCase,
        draftItemIndex
    });
}