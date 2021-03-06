		app.init = () => {
			console.info(storeUI.buildString);
			
			// Navigation Bars
			app.navigationBars = [];
			document.querySelectorAll("div.navigation-bar").forEach(navBar => {
				app.navigationBars.push(new storeUI.NavigationBar(navBar));
			});
			
			// Collection Views
			app.collectionViews = [];
			document.querySelectorAll(".horizontal-collection-view-cell, .product-media-cell").forEach(view => {
				if (view.querySelector(".swiper-slide")) {
					let classes = Array.from(view.querySelector(".swiper-slide").classList);
					classes.every(className => {
						const _swiperClass = (() => {
							switch (className) {
								case "editorial-card":
									return "editorial";
								case "small-lockup-cell":
									return "small";
								case "medium-lockup-cell":
									return "medium";
								case "brick-cell":
									return "brick";
								case "screenshot-cell":
									return "media";
								case "product-review-cell":
									return "media";
								default: return null;
							}
						})();
						
						if (_swiperClass) {
							app.collectionViews.push(new storeUI.CollectionView(view, { type: _swiperClass }));
							return true;
						}
						
						return false;
					});
				}
			});
			
			// Expandable texts
			app.expandableTexts = [];
			document.querySelectorAll(".expandable-text-view").forEach(view => {
				app.expandableTexts.push(new storeUI.ExpandableText(view, {
					startExpanded: view.getAttribute("data-start-expanded") == "true",
					hideEmptyLines: view.getAttribute("data-hide-empty-lines") != "false",
					maxLines: parseInt(view.getAttribute("data-max-lines")) || 3,
					redirectUri: view.getAttribute("data-redirect-uri")
				}));
			});
			
			// Annotation Cells
			app.annotationCells = [];
			document.querySelectorAll(".annotation-cell.expandable").forEach(cell => {
				app.annotationCells.push(new storeUI.AnnotationCell(cell, null));
			});
		}
		
		app.init();