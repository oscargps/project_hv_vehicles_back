const literals = [
    { id: 1, type: "user_subscription_type", value: "basic" },
    { id: 2, type: "user_subscription_type", value: "premium" },
    { id: 3, type: "user_subscription_status", value: "1" },
    { id: 4, type: "user_subscription_status", value: "0" },
    { id: 5, type: "user_city", value: "Bogota" },
    { id: 6, type: "user_city", value: "Medellin" },
    { id: 7, type: "user_country", value: "Colombia" },
    { id: 8, type: "vehicule_brand", value: "Yamaha" },
    { id: 9, type: "vehicule_brand", value: "Honda" },
    { id: 10, type: "vehicule_brand", value: "Suzuki" },
    { id: 11, type: "record_type", value: "Alerta" },
    { id: 12, type: "record_type", value: "Informativo" },
    { id: 13, type: "record_type", value: "Riesgo" },
    { id: 14, type: "record_category", value: "Tanqueo" },
    { id: 15, type: "record_category", value: "Reparación" },
    { id: 16, type: "record_category", value: "Mantenimiento" },
    { id: 17, type: "document_type", value: "SOAT" },
    { id: 18, type: "document_type", value: "RTM" },
    { id: 19, type: "document_type", value: "Licencia de tránsito" },
    { id: 20, type: "document_type", value: "Licencia de conducción" },
    { id: 21, type: "document_type", value: "Seguro Todo Riesgo" },
    { id: 22, type: "document_type", value: "FUEC" },
    { id: 23, type: "document_type", value: "Tarjeta de Operación" },
    { id: 24, type: "document_status", value: "Vigente" },
    { id: 25, type: "document_status", value: "Vencido" },
    { id: 26, type: "document_status", value: "Aplazado" },
    { id: 27, type: "document_status", value: "Inactivo" },
    { id: 28, type: "vehicle_type", value: "Motocicleta" },
    { id: 29, type: "vehicle_type", value: "Automovil" },
    { id: 30, type: "record_data_type", value: "Repuesto" },
    { id: 31, type: "record_data_type", value: "Liquido" },
    { id: 32, type: "record_fuel_type", value: "Corriente" },
    { id: 33, type: "record_fuel_type", value: "Diesel" },
    { id: 34, type: "record_fuel_type", value: "Extra" },
];
export const createLiterals = async (LiteralModel: any) => {
    await Promise.all(literals.map((l) => LiteralModel.create(l)));
}