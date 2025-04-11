import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BookProvider, BookContext } from '../contexts/BookContext';
import { useContext } from 'react';

describe('BookContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adiciona um novo livro com addBook', async () => {
    const mockBook = {
      title: 'Teste',
      author: 'Autor',
      genre: 'Gênero',
      date: '2024-04-11',
    };

    const TestComponent = () => {
      const context = useContext(BookContext);

      return (
        <button onClick={() => context.addBook(mockBook)}>
          Adicionar
        </button>
      );
    };

    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    const button = screen.getByText('Adicionar');
    fireEvent.click(button);

    await waitFor(() => {
      const booksFromStorage = JSON.parse(localStorage.getItem('books') || '[]');
      expect(booksFromStorage.some(book => book.title === 'Teste')).toBe(true);
    });
  });
});
