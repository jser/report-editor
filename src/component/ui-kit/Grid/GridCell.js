'use strict';
const React = require("react");
import classNames from 'classnames';

export default class GridCell extends React.Component {
    render() {
        let {col} = this.props;
        const {className} = this.props;

        if (!col && !className) {
            col = 'fill';
        }

        // names を設定
        const names = ['GridCell'];
        if (col) {
            names.push(`col-${col}`);
        }
        if (className) {
            names.push(className);
        }

        return (
            <div className={classNames(names)}>
                {this.props.children}
            </div>
        );
    }
}

GridCell.PropTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    col: React.PropTypes.oneOf([
        'fill',
        '1of12',
        '2of12',
        '3of12',
        '4of12',
        '5of12',
        '6of12',
        '7of12',
        '8of12',
        '9of12',
        '10of12',
        '11of12',
        '12of12',
        'full'
    ])
};