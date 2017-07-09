(function(){
    'use strict';

    angular
        .module('app')
        .controller('NotesController', NotesController)

    NotesController.$inject = ['notesFactory'];

    function NotesController(notesFactory) {
        var vm = this;
        vm.notes = {};
        vm.selectedNote = {};
        vm.message = "Hello";
        vm.createNote = createNote;
        vm.remove = remove;
        vm.getNote = getNote;
        vm.updateNote = updateNote;

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

        function remove(note) {
          var index = vm.notes.indexOf(note);
          notesFactory
            .remove(note)
            .then(function(note) {
              vm.notes.splice(index, 1);
            });
        };

        function getNote(noteId) {
          notesFactory
            .getById(noteId)
            .then(function(selectedNote) {
              vm.selectedNote = selectedNote;
            });
        };

        function updateNote(note) {
          notesFactory
            .update(note)
            .then(function(note) {
              activate();
            });
        };
    }
})();
