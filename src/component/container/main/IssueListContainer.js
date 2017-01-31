// MIT © 2017 azu
"use strict";
const React = require("react");
const css = require("suitcss-classnames");
import {Button, ButtonType} from "office-ui-fabric-react";
// action
import addItemToDraftUseCase from "../../../action/draft/addItemToDraftUseCase";
export default class IssueListContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        const items = this.props.items.map((item, index) => {
            return <li key={index}>{item.title}
                <Button
                    onClick={() => {
                        addItemToDraftUseCase(index);
                    }}
                    buttonType={ ButtonType.icon }
                    icon='Add'>追加</Button>
            </li>;
        });
        return <div className="IssueListContainer">
            <header className="IssueListContainer-header">

                <h2 className="IssueListContainer-title">現在のIssue</h2>
            </header>
            <ul className="IssueListContainer-list">
                {items}
            </ul>
        </div>
    }
}