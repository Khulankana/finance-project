var uiController = (function() {
    function add(m) {
          console.log("private add " + m)
    }

    return {
      publicAdd: function(msg) {
            console.log( " public " + msg)
          }
};
})();

var financeController = (function() {
   
})();

var appController = (function(uCtrl, fCtrl) {
      uiController.publicAdd(50);
})(uiController, financeController );