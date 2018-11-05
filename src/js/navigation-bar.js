storeUI.NavigationBar = class {
	constructor(element, params) {
		let navigationBar = this;
		navigationBar.container = element;
		
		navigationBar.params = {
			title: navigationBar.container.getAttribute("data-title"),
			
		}
		
		navigationBar.largeTitleView = navigationBar.container.querySelector(".navigation-bar-large-title-view");
		// navigationBar.largeTitleView.className = "navigation-bar-large-title-view";
		// navigationBar.container.appendChild(navigationBar.largeTitleView);
		
		navigationBar.largeTitleLabel = navigationBar.largeTitleView.querySelector(".navigation-bar-title");
		// navigationBar.largeTitleLabel.className = "navigation-bar-title";
		// navigationBar.largeTitleLabel.innerHTML = navigationBar.params.title;
		// navigationBar.largeTitleView.appendChild(navigationBar.largeTitleLabel);
		
		navigationBar.contentView = navigationBar.container.querySelector(".navigation-bar-content-view");
		navigationBar.contentView.className = "navigation-bar-content-view invisible hidden";
		// navigationBar.container.appendChild(navigationBar.contentView);
		
		navigationBar.contentLabel = navigationBar.contentView.querySelector(".navigation-bar-title");
		// navigationBar.contentLabel.className = "navigation-bar-title";
		navigationBar.contentLabel.innerHTML = navigationBar.params.title;
		// navigationBar.contentView.appendChild(navigationBar.contentLabel);

		navigationBar._scrollHeight = navigationBar.largeTitleLabel.clientHeight;
		navigationBar.container.style.height = `${navigationBar._scrollHeight + 44}px`;
		navigationBar.container.classList.add("no-separator");
		
		if (document.querySelector(".collection-view")) {
			document.querySelector(".collection-view").style.paddingTop = `${navigationBar._scrollHeight + 44}px`;
		}
		
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop >= 0 && document.body.scrollTop <= navigationBar._scrollHeight) {
				navigationBar.container.classList.add("no-separator");
				navigationBar.largeTitleView.classList.remove("invisible");
				navigationBar.contentView.classList.add("invisible");
				
				navigationBar.container.style.transform = `translate3d(0, -${document.body.scrollTop}px, 0)`;
				navigationBar.largeTitleView.style.transform = `translate3d(0, ${document.body.scrollTop}px, 0)`;
				navigationBar.largeTitleLabel.style.transform = `translate3d(0, -${document.body.scrollTop}px, 0)`;
				navigationBar.contentView.style.transform = `translate3d(0, ${document.body.scrollTop}px, 0)`;
			} else if (document.body.scrollTop < 0) {
				
			} else if (document.body.scrollTop > navigationBar._scrollHeight) {
				navigationBar.container.classList.remove("no-separator");
				navigationBar.largeTitleView.classList.add("invisible");
				navigationBar.contentView.classList.remove("hidden");
				navigationBar.contentView.classList.remove("invisible");
		
				navigationBar.container.style.transform = `translate3d(0, -${navigationBar._scrollHeight}px, 0)`;
				navigationBar.largeTitleView.style.transform = `translate3d(0, ${navigationBar._scrollHeight}px, 0)`;
				navigationBar.largeTitleLabel.style.transform = `translate3d(0, -${navigationBar._scrollHeight}px, 0)`;
				navigationBar.contentView.style.transform = `translate3d(0, ${navigationBar._scrollHeight}px, 0)`;
			}
		});
		
		if (document.body.scrollTop > 52) {
			navigationBar.container.classList.remove("no-separator");
			navigationBar.largeTitleView.classList.add("invisible");
			navigationBar.contentView.classList.remove("hidden");
			navigationBar.contentView.classList.remove("invisible");
	
			navigationBar.container.style.transform = `translate3d(0, -52px, 0)`;
			navigationBar.largeTitleView.style.transform = `translate3d(0, 52px, 0)`;
			navigationBar.largeTitleLabel.style.transform = `translate3d(0, -52px, 0)`;
			navigationBar.contentView.style.transform = `translate3d(0, 52px, 0)`;
		}
	}
}