require('rootpath')();



const mysql = require('mysql');
const configuracion = require("config.json");

//inicio conexion entre el servidor y la base de datos
var connection = mysql.createConnection(configuracion.database);
connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("base de datos conectada");
    }
});

var persona_db = {};




// C = CREATE= app.post('/', create);
persona_db.create = function (datos, funCallback) {
    consulta = "INSERT INTO persona (dni, nombre, apellido) VALUES (?,?,?);";
    params = [datos.dni, datos.nombre, datos.apellido];

    connection.query(consulta, params, (err, rows) => {
        if (err) {
            if (err.code == "ER_DUP_ENTRY") {
                funCallback({
                    message: "La persona ya fue registrada anteriormente",
                    detail: err
                });
            } else {
                funCallback({
                    message: "error diferente",
                    detail: err
                });
            }
        } else {
            funCallback(undefined, {
                message: `se creo la persona  ${persona.nombre} ${persona.apellido}`,
                detail: rows
            });
        }
    });
}

//R = READ= app.get('/', getAll);
persona_db.getAll = function (funCallback) {
    var consulta = 'SELECT * FROM persona';
    connection.query(consulta, function (err, rows) {
        if (err) {
            funCallback({
                message: "ha ocurrido un error inesperado al buscar la persona",
                detail: err
            });
        } else {
            funCallback(undefined, rows);
        }
    });
}


// U = UPDATE= app.put('/', actualizar);
persona_db.update = function (datos, id, funCallback) {
    consulta = "UPDATE persona SET dni = ?, nombre = ?, apellido = ? WHERE dni = ?";
    params = [datos.dni, datos.nombre, datos.apellido, id];

    connection.query(consulta, params, (err, result) => {

        if (err) {
            if (err.code == "ER_DUP_ENTRY") { 
                funCallback({
                    message: "Los datos a insertar generan una persona duplicada",
                    detail: err
                });
            } else { 
                funCallback({
                    message: "error diferente, analizar codigo error",
                    detail: err
                });
            }
        } else if (result.affectedRows == 0) { 
            funCallback({
                message: "No existe persona que coincida con el criterio de busqueda",
                detail: result
            });
        } else {
            funcallback(undefined, {
                message: `se modificó la persona  ${persona.nombre} ${persona.apellido}`,
                detail: result
            });
        }
    });
}



// D = DELETE= app.post('/', borrar);
persona_db.borrar = function (id, funCallback) {
    consulta = "DELETE FROM persona WHERE dni = ?";
    connection.query(consulta, id, (err, result) => {
        if (err) {
            funCallback({ menssage: err.code, detail: err });
        } else {
            if (result.affectedRows == 0) {
                funCallback(undefined,
                    {
                        message: "no se encontro una persona con el dni ingresado",
                        detail: result
                    });
            } else {
                funCallback(undefined, { message: "persona eliminada", detail: result });
            }
        }
    });
}


// personaController --> app.get('/:dni', getByDNI);
persona_db.getByDNI = function (dni, funCallback) {
    connection.query('SELECT * FROM persona WHERE dni = ?', dni, (err, result) => {
        if (err) {
            funCallback({
                menssage: "a ocurrido algun error inesperado al buscar la persona",
                detail: err
            });
        } else if (result.length == 0) { 
            funCallback(undefined, {
                menssage: `no se encontro una persona con el DNI: ${dni}`,
                detail: result
            });
        } else {

            funCallback(undefined, {
                menssage: `los datos de la persona con el dni ${dni} son:`,
                detail: result
            });
        }
    });

}


// personaController --> app.get('/:persona', getUserByPersona);
persona_db.getUserByPersona = function (persona, funcallback) {

    connection.query("select * from persona where dni = ?", persona, (err, result) => {
        if (err) {
            funcallback({
                menssage: "a ocurrido algun error, posiblemente de sintaxis en buscar la persona",
                detail: err
            });
        } else if (result.length == 0) { 
            funcallback(undefined, {
                menssage: "no se encontro la persona buscada",
                detail: result
            });
        } else {
            consulta = "select nickname from usuario INNER JOIN persona on usuario.persona = persona.dni and usuario.persona = ?";
            connection.query(consulta, persona, (err, result) => {
                if (err) {
                    funcallback({
                        menssage: "a ocurrido algun error, posiblemente de sintaxis en buscar el nickname",
                        detail: err
                    });
                } else if (result.length == 0) { 
                    funcallback(undefined, {
                        menssage: "la persona seleccionada no posee usuario registrado en la base de datos",
                        detail: result
                    });
                } else {
                    funcallback(undefined, { 
                        menssage: `El nikname de la persona seleccionada es ${result[0]['nickname']}`,
                        detail: result
                    });
                }
            });
        }
    });
}

module.exports = persona_db;