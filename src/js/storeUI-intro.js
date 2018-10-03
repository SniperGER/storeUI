/**
 * storeUI 1.0 ({{buildVersion}}.{{buildNumber}}.{{buildRevision}}_{{buildBranch}}.{{buildDate}})
 * HTML/CSS framework for creating App Store-like user interfaces
 * Copyright © 2018 Team FESTIVAL
 */

class storeUI {
	constructor(params) {
		let app = this;
		window._storeUIInstance = app;
		
		app.params = {};
		Object.assign(app.params, params);