# v2.3.0 -- 2017-10-08

* Added clickThru function. See Usage in README.

# v2.1.4 -- 2016-10-28

* Fix setSize on videoSlot

# v2.1.3 -- 2016-10-28

* Fix vpaid-methods not being compiled into babel by using `.js` instead of `.json`
* `removeEventListener` is previously not working due to incorrect bindings.

# v2.1.2 -- 2016-09-26

* Cleanup & refactor
* Reworked on video selection

# v2.1.0 -- 2016-09-26

* `this._options` renamed to `this.opts`
* Added `appendStylesheet`

# v2.0.5 -- 2016-08-22
* Don't include presets so rollup can work when this is an external dependency.

# v2.0.0 -- 2016-08-14
* Use tiny-emitter instead

# v1.0.12
* Remove `object-assign`, push that to `babel` plugin

# v1.0.11
* Include `lib` as well now.
* Remove `gulp` from devDeps.

# v1.0.10

* Add `object-assign` as dep.

# v1.0.9

* added set()
* implement expandAd and collapseAd boolean changes

# v1.0.8

* Don't fire repeated volumechange

# v1.0.7

* [bugfix] adIcons is defaulted to false instead.
