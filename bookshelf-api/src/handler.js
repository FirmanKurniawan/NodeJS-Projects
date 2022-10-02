
const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    if ( name === undefined ) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
          });
          response.code(400);
          return response;
    }

    if (readPage > pageCount ) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
          });
          response.code(400);
          return response;
    }

    const id = nanoid(16);

    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const finished = (pageCount === readPage) ? true : false;

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
      };

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;
    
    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id,
          },
        });
        response.code(201);
        return response;
      }
    
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
      });
      response.code(500);
      return response;
  };

  const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;
    let listBooks = books;

    if (name !== undefined) {
      listBooks = listBooks.filter((book) =>
          book.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (reading !== undefined) {
        listBooks = listBooks.filter((book) => book.reading == reading);
    }

    if (finished !== undefined) {
        listBooks = listBooks.filter(
            (book) => book.finished == finished
        );
    }

    

    listBooks = listBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));

    const response = h.response({
        status: "success",
        data: {
            books: listBooks,
        },
    });

    response.code(200);
    return response;
};


  const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    const book = books.filter((book) => book.id === bookId)[0];
   
   if (book !== undefined) {
      return {
        status: 'success',
        data: {
          book,
        },
      };
    }
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
  };

const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
   
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const updatedAt = new Date().toISOString();

    if ( name === undefined ) {
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
  }

  if (readPage > pageCount ) {
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
  }
   
    const index = books.findIndex((book) => book.id === bookId);

   
    if (index !== -1) {
      books[index] = {
        ...books[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
      };
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      });
      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  };

const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
   
    const index = books.findIndex((book) => book.id === bookId);
   
    if (index !== -1) {
      books.splice(index, 1);
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      });
      response.code(200);
      return response;
    }
   
   const response = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  };

module.exports = { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler};

/*
{
    "name": "IZ*ONE HISTORY",
    "year": 2021,
    "author": "CJ ENT",
    "summary": "IZONE",
    "publisher": "CJ ENT",
    "pageCount": "100",
    "readPage": "10",
    "reading": true
}
*/ 