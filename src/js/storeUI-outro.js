	}
	
	static get touchEventStart() { return ("ontouchstart" in window) ? "touchstart" : "mousedown"; }
	static get touchEventMove() { return ("ontouchmove" in window) ? "touchmove" : "mousemove"; }
	static get touchEventEnd() { return ("ontouchend" in window) ? "touchend" : "mouseup"; }
	static get touchEventClick() { return ("ontouchend" in window) ? "touchend" : "click"; }
	
	static get buildVersion() { return "{{buildVersion}}"; }
	static get buildNumber() { return "{{buildNumber}}"; }
	static get buildRevision() { return "{{buildRevision}}"; }
	static get buildBranch() { return "{{buildBranch}}"; }
	static get buildDate() { return "{{buildDate}}"; }
	static get buildString() { return "{{buildVersion}}.{{buildNumber}}.{{buildRevision}}_{{buildBranch}}.{{buildDate}}"; }
}