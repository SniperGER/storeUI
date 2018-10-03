		app.init = () => {
			console.info(storeUI.buildString);
			
			// Collection Views
			app.collectionViews = [];
			document.querySelectorAll(".horizontal-collection-view-cell").forEach(view => {
				if (view.querySelector(".swiper-slide")) {
					let classes = Array.from(view.querySelector(".swiper-slide").classList);
					classes.every(className => {
						switch (className) {
							case "editorial-card":
								app.collectionViews.push(new storeUI.CollectionView(view, { type: "editorial" }));
								return true;
							case "small-lockup-cell":
								app.collectionViews.push(new storeUI.CollectionView(view, { type: "small" }));
								return true;
							case "medium-lockup-cell":
								app.collectionViews.push(new storeUI.CollectionView(view, { type: "medium" }));
								return true;
							case "brick-cell":
								app.collectionViews.push(new storeUI.CollectionView(view, { type: "brick" }));
								return true;
							default: return false;
						}
					})
					// .forEach(className => {
					// 	console.log(className);
					// 	return false;
					// });
				}
			});
		}
		
		app.init();