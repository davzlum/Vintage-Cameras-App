const {
  getAllCameras,
  getById,
  createOne,
  updateById,
  deleteById,
} = require('./camerasController')();

const Camera = require('../model/cameraModel');

jest.mock('../model/cameraModel');

describe('getAllCameras', () => {
  test('should get all cameras', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Camera.find.mockResolvedValueOnce({ model: 'Hola' });
    // act
    await getAllCameras(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ model: 'Hola' });
  });
  test('should get a error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Camera.find.mockRejectedValueOnce(404);
    await getAllCameras(null, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('getById', () => {
  test('should get a camera by id', async () => {
    const req = {
      params: {
        cameraId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Camera.findById.mockResolvedValueOnce('camera');
    await getById(req, res);
    expect(res.json).toHaveBeenCalledWith('camera');
  });
  test('should get a error 404', async () => {
    const req = {
      params: {
        cameraId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Camera.findById.mockRejectedValueOnce(404);
    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('createOne', () => {
  test('should create a camera item', async () => {
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
    Camera.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update a camera by id', async () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      params: {
        cameraId: null,
      },
      body: {},
    };
    Camera.findByIdAndUpdate.mockResolvedValueOnce();
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
        cameraId: null,
      },
      body: {},
    };
    Camera.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a camera item by id', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        cameraId: null,
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
        cameraId: null,
      },
    };
    Camera.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
