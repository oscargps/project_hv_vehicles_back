const Literal = require("../models/literal.model");
const Vehicle = require("../models/vehicle.model");
const Record = require("../models/record.model");
const Document_Model = require("../models/document.model");
const RecordEvidence = require("../models/record_evidence.model");
import sequelize from "./database";  // Aquí también puedes importar tu archivo de configuración Sequelize
import { createLiterals } from "./createLiterals";
// Asocia los modelos si hay relaciones entre ellos
// Por ejemplo, User.hasMany(Vehicle) o Document.belongsTo(User)

async function createTables() {
  try {
    await sequelize.sync({ force: true });
    console.log("Tablas creadas correctamente");
  } catch (error) {
    console.error("Error al crear las tablas:", error);
  } finally {
    await createLiterals(Literal)
    sequelize.close();
  }
}

createTables();
