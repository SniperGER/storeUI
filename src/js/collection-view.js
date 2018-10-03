storeUI.CollectionView = class {
	constructor(element, params) {
		let collectionView = this;
		
		collectionView.params = {
			type: null
		};
		Object.assign(collectionView.params, params);
		
		collectionView._swiper = new Swiper(element, Object.assign({
			roundLengths: 'false',
			spaceBetween: 32,
			breakpoints: {
				414: {
					spaceBetween: 10,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20
				},
				834: {
					spaceBetween: 22
				},
				1024: {
					spaceBetween: 30
				}
			}
		}, collectionView._defaultOptions[collectionView.params.type]));
	}
	
	get _defaultOptions() {
		return {
			editorial: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
			},
			small: {
				slidesPerView: 'auto',
				slidesPerColumn: 3,
				slidesPerGroup: 1,
			},
			medium: {
				slidesPerView: 'auto',
				slidesPerColumn: 2,
				slidesPerGroup: 1,
			},
			brick: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
				breakpoints: {
					414: {
						spaceBetween: 10,
					},
					768: {
						spaceBetween: 20
					},
					834: {
						spaceBetween: 22
					},
					1024: {
						spaceBetween: 30
					}
				}
			},
			media: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
				breakpoints: {
					414: {
						spaceBetween: 10,
					},
					768: {
						spaceBetween: 20
					},
					834: {
						spaceBetween: 22
					},
					1024: {
						spaceBetween: 30
					}
				}
			},
			review: {
				slidesPerView :'auto',
				slidesPerViewFit : false,
			}
		}
	}
}