// MIT © 2017 azu
"use strict";
const React = require("react");
import IssueListContainer from "./main/IssueListContainer"
import DraftListContainer from "./main/DraftListContainer"
import {Grid, GridCell} from "../ui-kit/Grid"
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            app: {}
        };
    }

    componentWillMount() {
        const appStore = this.props.store;
        this.setState(appStore.getState());
        appStore.onChange(() => {
            this.setState(appStore.getState());
        });
    }

    render() {
        /**
         * @type {App}
         */
        const app = this.state.app;
        const issues = app.issues;
        const draft = app.draft;
        console.log(draft);
        return <div className="App">
            <Grid>
                <GridCell col="6of12">
                    <IssueListContainer items={issues.items}/>
                </GridCell>
                <GridCell col="6of12">
                    <DraftListContainer items={draft.items}/>
                </GridCell>
            </Grid>
        </div>
    }
}