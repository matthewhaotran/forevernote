(function(){
    'use strict';

    angular
        .module('app')
        .controller('NotesController', NotesController)

    NotesController.$inject = ['notesFactory'];

    function NotesController(notesFactory) {
        var vm = this;
        var notes = {};

        activate();

        function activate() {
          notesFactory
            .getAll()
            .then(function(nots) {
              vm.notes = notes;
            });
        }
    }
})();
