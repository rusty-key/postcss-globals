const postcss = require('postcss');

module.exports = postcss.plugin('postcss-globals', options => {
  return root => {
    options = options || {};

    root.walkAtRules(rule => {
      if (rule.name === 'import') {
        for (let name in options.variables) {
          rule.params = rule.params.replace(name, options.variables[name]);
        }
      }
    });
  };
});
