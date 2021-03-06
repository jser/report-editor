// LICENSE : MIT
'use strict';
import React from 'react';
import omit from 'lodash.omit';

export default (Success) => class LoadingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, value: null};
    }

    componentDidMount() {
        this.props.promise.then(
            (value) => this.setState({loading: false, value: value}),
            (error) => {
                console.log(error);
                return this.setState({loading: false, error: error});
            }
        );
    }

    render() {
        if (this.state.loading) {
            return <div className="LoadingContainer">
                {this.props.children}
            </div>;
        } else if (this.state.error !== null) {
            return <div>
                Error: ${this.state.error}
            </div>;
        } else {
            const props = omit(this.props, 'promise');
            return <Success
                {...props}
                value={this.state.value}
            />;
        }
    }

};
