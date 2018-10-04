storeUI.ExpandableText = class {
	constructor(element, params) {
		let expandableText = this;
		expandableText.container = element;
		expandableText.fadeInButton = element.querySelector(".fade-in-button");
		
		expandableText._expanded = false;
		
		expandableText.params = {
			startExpanded: false,
			hideEmptyLines: true,
			maxLines: 3,
			redirectUri: null
		};
		Object.assign(expandableText.params, params);
		
		expandableText._rawText = expandableText.container.querySelector("p").innerHTML;
		expandableText.container.style.maxHeight = `${expandableText.params.maxLines * storeUI.ExpandableText.lineHeight}px`;
		expandableText.container.querySelector("p").innerHTML = this.text;
		
		this.checkMoreButtonPresence();
		window.addEventListener("resize", this.checkMoreButtonPresence.bind(this));
		
		if (!expandableText.redirectUri) {
			expandableText.fadeInButton.addEventListener(storeUI.touchEventClick, this.expand.bind(this));
		} else {
			window.location.href = expandableText.params.redirectUri;
		}
	}
	
	static get lineHeight() {
		return 19;
	}
	
	checkMoreButtonPresence() {
		let expandableText = this;
		
		if (expandableText.params.startExpanded) {
			expandableText.container.classList.add("expanded");
			expandableText.container.removeAttribute("style");
		}
		
		if (expandableText.container.scrollHeight > (storeUI.ExpandableText.lineHeight * expandableText.params.maxLines) && !expandableText._expanded) {
			expandableText.fadeInButton.classList.remove("hidden");
		} else {
			expandableText.fadeInButton.classList.add("hidden");
		}
	}
	
	expand() {
		let expandableText = this;
		expandableText._expanded = true;
		
		expandableText.container.classList.add("expanded");
		expandableText.container.removeAttribute("style");
		expandableText.fadeInButton.classList.add("hidden");
		
		expandableText.container.querySelector("p").innerHTML = this.text;
	}
	
	get text() {
		let expandableText = this;
		
		if (expandableText.params.hideEmptyLines && !expandableText._expanded) {
			return expandableText._rawText.replace(/\<br\>\<br\>/g, "<br>");
		} else {
			return expandableText._rawText;
		}
	}
}