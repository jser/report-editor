// MIT © 2017 azu
"use strict";
const React = require("react");
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
export const SortableItem = SortableElement(({children}) => {
    return <li className="SortableItem">{children}</li>
});
export const SortableList = SortableContainer(({children}) => {
    return <ul className="SortableList">{children}</ul>
});