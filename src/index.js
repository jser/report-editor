// MIT © 2017 azu
"use strict";
require("office-ui-fabric-react/dist/css/fabric.css");
import React from "react";
import ReactDOM from "react-dom";
import GitHubIssue from "./infra/api/GitHubIssue";
import LoadingContainer from "./component/ui-kit/LoadingContainer/LoadingContainer";
import App from "./component/container/App";
import AppStore from "./store/AppStore";
function Bootstrap() {
    const Loading = LoadingContainer(function({value}) {
        const store = new AppStore({items: value.data});
        return <App store={store}/>
    });
    const gitHub = new GitHubIssue({
        user: "jser",
        repo: "report"
    });
    const promise = gitHub.getOpenedIssues();
    return <Loading promise={promise}>
        Loading...
    </Loading>
}
// entry point
ReactDOM.render(<Bootstrap />, document.getElementById("js-app"));