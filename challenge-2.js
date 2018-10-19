const crypto = require('crypto');

const SECRET = '775176b2-504f-4939-8552-8de6bcf25f42';

const TEXT = 'JavaScript, being a loosely typed language, never casts. The lineage of an object is irrelevant. What matters about an object is what it can do, not what it is descended from.';

const hmac = crypto.createHmac('sha256', SECRET);

hmac.update(TEXT);
const res = hmac.digest('base64');

console.log(res);
