module.exports = {
    bracket : function (str) {
        return str.replace(/</g, '\\u003c');
    },
    html : function (str) {
        return str.replace(/&/g, '&amp')
            .replace(/</g, '&ltl')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    }
};