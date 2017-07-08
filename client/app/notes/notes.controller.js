(function(){
    'use strict';

    angular
        .module('app')
        .controller('NotesController', NotesController)

    NotesController.$inject = ['notesFactory'];

    function NotesController(notesFactory) {
        var vm = this;
        vm.notes = {};
        vm.message = "Hello";
        vm.createNote = createNote;

        activate();

        function activate() {
          notesFactory
            .getAll()
            .then(function(notes) {
              vm.notes = notes;
            });
        };

        function createNote (note) {
          notesFactory
            .create(note)
            .then(function(note) {
              vm.notes.push(note);
            });
        };
    }
})();
