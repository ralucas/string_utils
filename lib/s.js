
(function() {
  return {
    deCamelize: function deCamelize(str) {
      return str
        .replace(/[A-Z]/g, ' $&')
        .replace(/^\w/, String.call.bind(str.toUpperCase));
    }
  };
})();

