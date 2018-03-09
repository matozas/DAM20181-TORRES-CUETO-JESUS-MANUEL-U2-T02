var Alumnos = Array();
var create = (function () {
    function create(theName) {
        this.name = theName;
    }
    create.prototype.crear = function (control, Name, apel, prome, gene, fech, act) {
        var newAlumno;
        newAlumno = {
            noCtrol: control,
            nombre: Name,
            apellidos: apel,
            promedio: prome,
            genero: gene,
            fecha: fech,
            activo: act
        };
        Alumnos.push(newAlumno);
    };
    return create;
})();
exports.create = create;
var show = (function () {
    function show(theName) {
        this.name = theName;
    }
    show.prototype.mostrar = function () {
        for (var i = 0; i < Alumnos.length; i++) {
            console.log(Alumnos[i]);
        }
    };
    return show;
})();
exports.show = show;
var erase = (function () {
    function erase(theName) {
        this.name = theName;
    }
    erase.prototype.eliminar = function (nocontrol) {
        for (var i = 0; i < Alumnos.length; i++) {
            if (Alumnos[i].noCtrol === nocontrol) {
                Alumnos[i] = { noCtrol: "", nombre: "", apellidos: "", promedio: 0, fecha: "", genero: "", activo: false };
            }
        }
    };
    return erase;
})();
exports.erase = erase;
var update = (function () {
    function update(theName) {
        this.name = theName;
    }
    update.prototype.modificar = function (con, nom, ape, pro, fec, gen, ac) {
        for (var i = 0; i < Alumnos.length; i++) {
            if (Alumnos[i].noCtrol === con) {
                Alumnos[i] = { noCtrol: con, nombre: nom, apellidos: ape, promedio: pro, fecha: fec, genero: gen, activo: ac };
            }
        }
    };
    return update;
})();
exports.update = update;
