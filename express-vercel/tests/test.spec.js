const product = require('../controllers/index.js');
const mockRequest = (body={}) => ({ body })
const mockResponse =  () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res;
}

// endpoint GET/
describe('product.index.function', () => {
    // case if success
    test('res.json called with {status: true, message: "Get Data Successfully"}', done => {
        const req = mockRequest();
        const res = mockResponse();
        product.index(req, res);
        expect(res.status).toBeCalledWith(200); // expected status
        expect(res.json).toBeCalledWith({
            status: true,
            message: "Get Data Successfully"
        });
        done();
    });
});

// // endpoint that delete the sum
describe('product.delete.function', () => {
    // case if success
    test('res.json called with {status: true, message: "Deleted User Data Successfully"}', done => {
        const req = mockRequest();
        const res = mockResponse();
        product.delete(req, res);
        expect(res.status).toBeCalledWith(200); // expected status
        expect(res.json).toBeCalledWith({
            status: true,
            message: "Deleted User Data Successfully"
        });
        done();
    });
});
