const fetch = require("node-fetch");
const BOOKING_SERVICE = process.env.BOOKING_SERVICE;

class InvalidInputError {
    constructor(message) {
        this.name = 'InvalidInputError';
        this.message = message;
    }
}
InvalidInputError.prototype = new Error();

class TransientError {
    constructor(message) {
        this.name = 'TransientError';
        this.message = message;
    }
}
TransientError.prototype = new Error();

exports.handler = async (evt) => {
    let response = await fetch(BOOKING_SERVICE, {
        method: 'POST',
        body: JSON.stringify(evt)
    });

    if (response.ok) {
        return response.json();
    } else if (response.status == 418) {
        throw new InvalidInputError(response.statusText);
    } else if (response.status == 503) {
        throw new TransientError(response.statusText);
    } else {
        throw new Error(response.statusText);
    }
};
