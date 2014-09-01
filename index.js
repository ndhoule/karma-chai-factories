var path = require('path');

var pattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
    // By default, NodeJS resolves into the main AMD entry of karma-chai-factories
    var amd = path.resolve(require.resolve('chai-factories'));

    // But we do not want the AMD module, we want the 'plain old' non-AMD entry
    var nonAmd = path.resolve(path.dirname(amd), '../chai-factories.js');

    files.unshift(pattern(nonAmd));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-factories': ['factory', framework]};
