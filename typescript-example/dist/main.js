var Kid = /** @class */ (function () {
    function Kid() {
    }
    return Kid;
}());
var kid = new Kid();
kid.lastname = 'Tonello';
kid.name = 'Pedro';
var registerPerson = function (person) {
    console.log(person);
};
registerPerson(kid);
