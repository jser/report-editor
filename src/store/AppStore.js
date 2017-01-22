// MIT © 2017 azu
"use strict";
import dispatcher from "../dispatcher";
import DraftReducer from "./draft/index";
import AppFactory from "../model/AppFactory";
const EventEmitter = require("events");
const reducers = [DraftReducer];
export default class AppStore extends EventEmitter {
    constructor({items}) {
        super();
        /**
         * @type {App}
         */
        this.app = AppFactory.create({items});
        dispatcher.onDispatch((payload) => {
            reducers.forEach((reducer) => {
                return reducer(this.app, payload);
            }, this.state);
            this.emit("change");
        });
    }

    onChange(handler) {
        this.on("change", handler);
    }

    getState() {
        return {
            app: this.app
        };
    }
};