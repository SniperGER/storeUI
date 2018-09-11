[![Build Status](https://travis-ci.org/SniperGER/storeUI.svg?branch=master)](https://travis-ci.org/SniperGER/storeUI)

# storeUI

HTML/CSS framework for creating App Store-like user interfaces

With storeUI, you can create breathtaking storefronts that look and feel just like the iOS 11 App Store. It's a near 1:1 replica of every element seen inside the app, and it works just like you would expect on iPhone, iPad and even on desktop browsers.

storeUI was initally created as a private HTML/CSS mess for the still work in progress FESTIVAL Cydia repository update (internally called "Packr"), but has since evolved into a fully fledged framework to be used by anyone.

storeUI uses iDangerous' Swiper for natural feeling paginated scrolling.

#### Currently implemented elements
+ UICollectionview
+ AppStore.TitleHeaderView
+ AppStore.HorizontalShelfCollectionView
+ AppStore.EditorialCardCollectionViewCell
+ AppStore.SmallLockupCollectionViewCell (including "Sticker Pack" variant)
+ AppStore.MediumLockupCollectionViewCell
+ AppStore.BrickCollectionViewCell
+ AppStore.ActionCollectionViewCell (including icon variant)

## Getting Started

* Clone this repository
* Build your app either using the demo pages in `dist/demo` or start from scratch

## Build

storeUI is built using `grunt`. To build storeUI, you need to install the Grunt CLI globally

```
npm install -g grunt-cli
```

Then, `cd` into the project root, install all the dependencies and build the project.

```
npm install
grunt build
```

You'll find the build output in the `build` directory.

## Documentation

_Developing..._