const {
    getAllLenses,
    getById,
    createOne,
    updateById,
    deleteById,
  } = require('./lensesController')();
  
  const Lens = require('../model/lensModel');
  
  jest.mock('../model/lensModel');
  
  describe('getAllLenses', () => {
    test('should get all lenses', async () => {
      // arrange
      const res = {
        json: jest.fn(),
      };
      Lens.find.mockResolvedValueOnce({ model: 'Hola' });
      // act
      await getAllLenses(null, res);
      // assert
      expect(res.json).toHaveBeenCalledWith({ model: 'Hola' });
    });
    test('should get a error 404', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Lens.find.mockRejectedValueOnce(404);
      await getAllLenses(null, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
  
  describe('getById', () => {
    test('should get a lens by id', async () => {
      const req = {
        params: {
          lensId: null,
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Lens.findById.mockResolvedValueOnce('lens');
      await getById(req, res);
      expect(res.json).toHaveBeenCalledWith('lens');
    });
    test('should get a error 404', async () => {
      const req = {
        params: {
          lensId: null,
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Lens.findById.mockRejectedValueOnce(404);
      await getById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
  
  describe('createOne', () => {
    test('should create a lens item', async () => {
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
      Lens.mockReturnValueOnce({
        save: jest.fn().mockRejectedValueOnce('error'),
      });
      await createOne(req, res);
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });
  
  describe('updateById', () => {
    test('should update a lens by id', async () => {
      const res = {
        send: jest.fn(),
        json: jest.fn(),
      };
      const req = {
        params: {
          lensId: null,
        },
        body: {},
      };
      Lens.findByIdAndUpdate.mockResolvedValueOnce();
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
          lensId: null,
        },
        body: {},
      };
      Lens.findByIdAndUpdate.mockRejectedValueOnce('error');
      await updateById(req, res);
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });
  
  describe('deleteById', () => {
    test('should delete a lens item by id', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        params: {
          lensId: null,
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
          lensId: null,
        },
      };
      Lens.findByIdAndDelete.mockRejectedValueOnce('error');
      await deleteById(req, res);
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });