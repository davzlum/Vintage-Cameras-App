const {
    getAllFilms,
    getById,
    createOne,
    updateById,
    deleteById,
  } = require('./filmsController')();
  
  const Film = require('../model/filmModel');
  
  jest.mock('../model/filmModel');
  
  describe('getAllFilms', () => {
    test('should get all films', async () => {
      // arrange
      const res = {
        json: jest.fn(),
      };
      Film.find.mockResolvedValueOnce({ filmModel: 'Hola' });
      // act
      await getAllFilms(null, res);
      // assert
      expect(res.json).toHaveBeenCalledWith({ filmModel: 'Hola' });
    });
    test('should get a error 404', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Film.find.mockRejectedValueOnce(404);
      await getAllFilms(null, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
  
  describe('getById', () => {
    test('should get a film by id', async () => {
      const req = {
        params: {
          filmId: null,
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Film.findById.mockResolvedValueOnce('film');
      await getById(req, res);
      expect(res.json).toHaveBeenCalledWith('film');
    });
    test('should get a error 404', async () => {
      const req = {
        params: {
          filmId: null,
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Film.findById.mockRejectedValueOnce(404);
      await getById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
  
  describe('createOne', () => {
    test('should create a film item', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        body: null,
      };
      await createOne(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('should call send', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        body: null,
      };
      Film.mockReturnValueOnce({
        save: jest.fn().mockRejectedValueOnce('error'),
      });
      await createOne(req, res);
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });
  
  describe('updateById', () => {
    test('should update a film by id', async () => {
      const res = {
        send: jest.fn(),
        json: jest.fn(),
      };
      const req = {
        params: {
          filmId: null,
        },
        body: {},
      };
      Film.findByIdAndUpdate.mockResolvedValueOnce();
      await updateById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('should send error', async () => {
      const res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          filmId: null,
        },
        body: {},
      };
      Film.findByIdAndUpdate.mockRejectedValueOnce('error');
      await updateById(req, res);
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });
  
  describe('deleteById', () => {
    test('should delete a film item by id', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        params: {
          filmId: null,
        },
      };
      await deleteById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('should send error', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        params: {
          filmId: null,
        },
      };
      Film.findByIdAndDelete.mockRejectedValueOnce('error');
      await deleteById(req, res);
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });
  