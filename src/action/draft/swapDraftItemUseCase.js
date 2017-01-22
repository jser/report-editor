// MIT © 2017 azu
"use strict";
import dispatcher from "../../dispatcher";
/**
 * @param {number} oldIndex
 * @param {number} newIndex
 * @constructor
 */
export default function SwapDraftItemUseCase({oldIndex, newIndex}) {
    dispatcher.dispatch({
        type: SwapDraftItemUseCase,
        oldIndex,
        newIndex
    });
}