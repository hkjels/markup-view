
/**
 * Module dependencies.
 */

var request = require('superagent')
  , domify = require('domify')

/**
 * Expose `MarkupView`.
 */

module.exports = MarkupView;

/**
 * MarkupView.
 */

function MarkupView(uri, el) {
  var self = this
    , uri = uri.replace(/.md$/, '') + '.md'
    , el = this.el = el || document.createElement('article');

  el.classList.add('markup');

  function render(res) {
    var markup;
    if (res.ok) {
      markup = domify(res.text);
    }
    else {
      markup = domify('<h3>Not found</h3>');
    }
    el.appendChild(markup);
  }
  request.get(uri).end(render);
}

