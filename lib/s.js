
(function() {
  return {
    deCamelize: function deCamelize(str) {
      return str
        .replace(/[A-Z]/g, ' $&')
        .replace(/^\w/, String.call.bind(str.toUpperCase));
    },

    camelize: function camelize(str) {
      return str
        .replace(/\s/g, '')
        .replace(/^[A-Z]/, String.call.bind(str.toLowerCase));
    },

    trim: function trim(str) {
      return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
    }
      
  };
})();

