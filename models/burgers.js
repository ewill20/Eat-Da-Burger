var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all('burgers', col, vals, function(res) {
            cb(res);
        });
    },
    create: function(col, vals, cb) {
        orm.create('burgers', col, vals, function(res) {
            cb(res);
        });
    },
    update: function(col, vals, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;