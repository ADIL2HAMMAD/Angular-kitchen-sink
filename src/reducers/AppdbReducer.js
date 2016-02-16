var immutable_1 = require('immutable');
var AppdbAction = require("../actions/AppdbAction");
function appdb(state, action) {
    if (state === void 0) { state = immutable_1.Map({}); }
    switch (action.type) {
        case AppdbAction.APP_START_TIME:
            return immutable_1.Map({ appStartTime: Date.now() });
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appdb;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2FwcGRicmVkdWNlci50cyJdLCJuYW1lcyI6WyJhcHBkYiJdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQWtCLFdBQVcsQ0FBQyxDQUFBO0FBQzlCLElBQVksV0FBVyxXQUFNLHdCQUF3QixDQUFDLENBQUE7QUFJdEQsZUFBOEIsS0FBNkMsRUFBRSxNQUFVO0lBQXpEQSxxQkFBNkNBLEdBQTdDQSxRQUF5QkEsZUFBR0EsQ0FBY0EsRUFBRUEsQ0FBQ0E7SUFDdkVBLE1BQU1BLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xCQSxLQUFLQSxXQUFXQSxDQUFDQSxjQUFjQTtZQUMzQkEsTUFBTUEsQ0FBQ0EsZUFBR0EsQ0FBQ0EsRUFBQ0EsWUFBWUEsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDM0NBO1lBQ0lBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ3JCQSxDQUFDQTtBQUNMQSxDQUFDQTtBQVBEO3VCQU9DLENBQUEiLCJmaWxlIjoicmVkdWNlcnMvQXBwZGJSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXB9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCAqIGFzIEFwcGRiQWN0aW9uIGZyb20gXCIuLi9hY3Rpb25zL0FwcGRiQWN0aW9uXCI7XHJcblxyXG4vKiogZ2xvYmFsIGFwcGxpY2F0aW9uIHJlZHVjZWQgYWN0aW9ucyBkZWZpbmVkIGhlcmUgKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBkYihzdGF0ZTpNYXA8c3RyaW5nLCBhbnk+ID0gTWFwPHN0cmluZywgYW55Pih7fSksIGFjdGlvbjphbnkpOk1hcDxzdHJpbmcsIGFueT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQXBwZGJBY3Rpb24uQVBQX1NUQVJUX1RJTUU6XHJcbiAgICAgICAgICAgIHJldHVybiBNYXAoe2FwcFN0YXJ0VGltZTogRGF0ZS5ub3coKX0pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
