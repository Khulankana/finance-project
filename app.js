// User interface controller
var uiController = (function() {
 
})();


// Finance controller
var financeController = (function() {
   
})();


// app controller 
var appController = (function(uCtrl, fCtrl) {
      var ctrlAddItem = function( ) {
             // Оруулсан өгөгдлийг дэлгэцнээс олж авах

             // Олж авсан өгөгдлөө санхүүгийн контроллер луу памжуулах, тэнд хадгалах

            // Олж авсан өгөдлүүдээ дэлгэц дээрээ тохирох хэсэгт гаргана

            //Төсвийг тооцоолно

            // Эцсийн үлдэгдэл, тооцоог харуулах
      }

      document.querySelector('.add__btn').addEventListener('click', function() {
            ctrlAddItem();
      })

      document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.witch === 13) {
                  ctrlAddItem();
            }
      })

})(uiController, financeController );