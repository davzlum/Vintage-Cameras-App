const {
  getAllUsers,
  getById,
  createOne,
  updateById,
  deleteById,
} = require('./usersController')();

const User = require('../model/userModel');

jest.mock('../model/userModel');

describe('getAllUsers', () => {
  test('should get all users', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    User.find.mockResolvedValueOnce({ name: 'Hola' });
    // act
    await getAllUsers(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Hola' });
  });
  test('should get a error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    User.find.mockRejectedValueOnce(404);
    await getAllUsers(null, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('getById', () => {
  test('should get a user by id', async () => {
    const req = {
      params: {
        userId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    User.findById.mockResolvedValueOnce('camera');
    await getById(req, res);
    expect(res.json).toHaveBeenCalledWith('camera');
  });
  test('should get a error 404', async () => {
    const req = {
      params: {
        userId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    User.findById.mockRejectedValueOnce(404);
    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('createOne', () => {
  test('should create a user', async () => {
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
    User.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update a user by id', async () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      params: {
        userId: null,
      },
      body: {},
    };
    User.findByIdAndUpdate.mockResolvedValueOnce();
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
        userId: null,
      },
      body: {},
    };
    User.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a user by id', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        userId: null,
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
        userId: null,
      },
    };
    User.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
