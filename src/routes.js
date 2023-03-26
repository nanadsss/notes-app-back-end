/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

const {
addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler,
   } = require('./handler');
   
   /* eslint-disable linebreak-style */
   const routes = [
       {
           method: 'POST',
           path: '/notes',
           handler: addNoteHandler,
           options: {
               cors: {
                   origin: ['*'],
               },
           },
       },
       {
           method: 'GET',
           path: '/notes',
           handler: getAllNotesHandler,
       },
       {
           method: 'GET',
           path: '/notes/{id}',
           handler: getNoteByIdHandler,
       },
       {
           method: 'PUT',
           path: '/notes/{id}',
           handler: editNoteByIdHandler,
       },
       {
           method: 'DELETE',
           path: '/notes/{id}',
           handler: deleteNoteByIdHandler,
       },
   ];
   
   module.exports = routes;