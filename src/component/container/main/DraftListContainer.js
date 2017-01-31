// MIT © 2017 azu
"use strict";
const React = require("react");

import {Button, ButtonType} from "office-ui-fabric-react";
import {SortableList, SortableItem} from '../../project/SortableList/SortableList';
// action
import swapDraftItemUseCase from "../../../action/draft/swapDraftItemUseCase";
import openOutputMarkdown from "../../../action/draft/openOutputMarkdownUseCase";
import removeItemFromDraftUseCase from "../../../action/draft/removeItemFromDraftUseCase";
export default class DraftListContainer extends React.Component {
    constructor() {
        super();
        this.onSortEnd = ({oldIndex, newIndex}) => {
            swapDraftItemUseCase({oldIndex, newIndex});
        };
        this._onToggleCodeClick = () => {
            openOutputMarkdown();
        };
    }

    render() {
        const items = this.props.items.map((item, index) => {
            return <SortableItem key={index} index={index}>
                {item.title}
                <Button onClick={() => {
                    removeItemFromDraftUseCase(index);
                }}
                        buttonType={ ButtonType.icon }
                        icon='Remove'>削除</Button>
            </SortableItem>;
        });
        return <div className="DraftListContainer">
            <header className="DraftListContainer-header">
                <h2 className="DraftListContainer-title">ドラフト</h2>
                <Button buttonType={ ButtonType.icon }
                        icon='Embed'
                        onClick={ this._onToggleCodeClick }
                        className="DraftListContainer-expandButton">
                    Show code
                </Button>
            </header>
            <SortableList
                className="DraftListContainer-list"
                distance={10}
                onSortEnd={this.onSortEnd}>
                {items}
            </SortableList>
        </div>
    }
}