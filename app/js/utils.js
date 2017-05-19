App.utils = {
  registerEnterKey: function (selector, callback) {
    $(selector).on('keypress', function (e) {
      if(e.keyCode === 13) {
        callback(e)
      }
    })
  },
  queryFloat: function (selector) {
    return $(selector).val()
  }
}
