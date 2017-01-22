'use strict';
import React from 'react';
import classNames from 'classnames';
import suitClassNames from 'suitcss-classnames';

/**
 Usage

 <Grid>
 <GridCell>
 contents
 </GridCell>
 <GridCell>
 contents
 </GridCell>
 </Grid>
 */
export default class Grid extends React.Component {
    render() {
        const names = suitClassNames({
            component: 'Grid',
            states: {
                'is-fixed': this.props.isFixed
            }
        });
        return (
            <div className={classNames(names, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}

Grid.PropTypes = {
    // table-layout:fixed;を設定するかどうか
    // https://developer.mozilla.org/ja/docs/Web/CSS/table-layout
    isFixed: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
};