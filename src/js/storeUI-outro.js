	}
}

storeUI.touchEventStart = ("ontouchstart" in window) ? "touchstart" : "mousedown";
storeUI.touchEventMove = ("ontouchmove" in window) ? "touchmove" : "mousemove";
storeUI.touchEventEnd = ("ontouchend" in window) ? "touchend" : "mouseup";
storeUI.touchEventClick = ("ontouchend" in window) ? "touchend" : "click";

storeUI.buildVersion = "{{buildVersion}}";
storeUI.buildNumber = "{{buildNumber}}";
storeUI.buildRevision = "{{buildRevision}}";
storeUI.buildBranch = "{{buildBranch}}";
storeUI.buildDate = "{{buildDate}}";
storeUI.buildString = "{{buildVersion}}.{{buildNumber}}.{{buildRevision}}_{{buildBranch}}.{{buildDate}}";