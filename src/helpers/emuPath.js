module.exports = function(options) {
    // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
    const loc = '<div class="cell" id="current-location"><p>' + options.fn(this) + '</p></div>'
    return loc;
  }