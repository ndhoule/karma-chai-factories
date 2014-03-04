karma-chai-factories
================

  * [Chai](http://chaijs.com)
  * [Chai-Factories](http://chaijs.com/plugins/chai-factories)

for [Karma](http://karma-runner.github.io)

Requirements
------------

This Karma plugin requires Karma `~0.10.0`

Installation
------------

Install the module via npm

```sh
$ npm install --save-dev karma-chai-factories
```

Add `chai-factories` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'chai-factories', 'chai'],
    #...
  });
}
```

Keep in mind that, since Karma loads its frameworks in reverse and `chai-factories` depends on `chai`, you should declare it accordingly as done above.

karma-chai-factories currently does not support AMD/RequireJS, mainly because I cannot figure out the way this dependency should be injected. I encourage other people to look into this and hack it to make it work!
