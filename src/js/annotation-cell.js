storeUI.AnnotationCell = class {
	constructor(element, params) {
		let cell = this;
		cell.container = element;
		
		cell.params = {};
		Object.assign(cell.params, params);
		
		cell.container.addEventListener(storeUI.touchEventClick, () => {
			cell.container.classList.add("expanded");
		})
	}
}