const { v4: uuidv4 } = require("uuid");
const builder = require("xmlbuilder")

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

//sigh
let partys = []


/*
{
    accountId: accountId,
    resource: resource,
    token: token,
    Jid: Jid,
    Ws: ws,
    Settings: {
        bCopyEmote: false
    }
}

*/

module.exports = (app) => {
    
}

