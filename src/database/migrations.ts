const Literal = require("../models/literal.model");
const Vehicle = require("../models/vehicle.model");
const Record = require("../models/record.model");
const Document_Model = require("../models/document.model");
const RecordEvidence = require("../models/record_evidence.model");
const RecordFuelData = require("../models/record_fuel_data.model");
const RecordMaintenanceData = require("../models/record_maintenance_data.model");

import sequelize from "./database";  // Aquí también puedes importar tu archivo de configuración Sequelize
import { createLiterals } from "./createLiterals";


async function createTables() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Tablas creadas correctamente");
  } catch (error) {
    console.error("Error al crear las tablas:", error);
  } finally {
    await createLiterals(Literal)
    sequelize.close();
  }
}

createTables();
