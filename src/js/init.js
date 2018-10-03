		app.init = () => {
			console.info(storeUI.buildString);
			
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
		}
		
		app.init();