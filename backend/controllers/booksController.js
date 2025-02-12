const { books } = require("../models");

const booksController = {
  // Add new book
  addNewBook: async (req, res) => {
    try {
      const {
        title,
        isbn,
        year_published,
        author,
        summary,
        cover_url,
        shelf_id,
        status,
        barcode,
        category,
        genre,
      } = req.body;

      const newBook = await books.create({
        title,
        isbn,
        year_published,
        author,
        summary,
        cover_url,
        shelf_id,
        status,
        barcode,
        category,
        genre,
      });

      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook,
      });
    } catch (error) {
      console.error("Error adding book:", error);
      res.status(500).json({
        success: false,
        message: "Error adding book",
        error: error.message,
      });
    }
  },

  // Get all books
  getAllBooks: async (req, res) => {
    try {
      const booksList = await books.findAll();
      res.status(200).json({
        success: true,
        data: booksList,
      });
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching books",
        error: error.message,
      });
    }
  },

  // Get a single book by its ID
  getBookById: async (req, res) => {
    const { id } = req.params;

    try {
      const book = await books.findOne({
        where: { book_id: id },
      });

      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Book not found",
        });
      }

      res.status(200).json({
        success: true,
        data: book,
      });
    } catch (error) {
      console.error("Error fetching book:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching book",
        error: error.message,
      });
    }
  },

  // Update a book by its ID
  updateBook: async (req, res) => {
    const { id } = req.params;
    const {
      title,
      isbn,
      year_published,
      author,
      summary,
      cover_url,
      shelf_id,
      status,
      barcode,
      category,
      genre,
    } = req.body;

    try {
      const book = await books.findOne({ where: { book_id: id } });

      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Book not found",
        });
      }

      book.title = title || book.title;
      book.isbn = isbn || book.isbn;
      book.year_published = year_published || book.year_published;
      book.author = author || book.author;
      book.summary = summary || book.summary;
      book.cover_url = cover_url || book.cover_url;
      book.shelf_id = shelf_id || book.shelf_id;
      book.status = status || book.status;
      book.barcode = barcode || book.barcode;
      book.category = category || book.category;
      book.genre = genre || book.genre;

      await book.save();

      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: book,
      });
    } catch (error) {
      console.error("Error updating book:", error);
      res.status(500).json({
        success: false,
        message: "Error updating book",
        error: error.message,
      });
    }
  },

  // Delete a book by its ID
  deleteBook: async (req, res) => {
    const { id } = req.params;

    try {
      const book = await books.findOne({ where: { book_id: id } });

      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Book not found",
        });
      }

      await book.destroy();

      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting book",
        error: error.message,
      });
    }
  },
};

module.exports = booksController;
