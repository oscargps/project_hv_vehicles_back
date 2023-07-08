const literals = [
    { type: "user_subscription_type", value: "basic" },
    { type: "user_subscription_type", value: "premium" },
    { type: "user_subscription_status", value: "1" },
    { type: "user_subscription_status", value: "0" },
    { type: "user_city", value: "Bogota" },
    { type: "user_city", value: "Medellin" },
    { type: "user_country", value: "Colombia" },
    { type: "vehicule_brand", value: "Yamaha" },
    { type: "vehicule_brand", value: "Honda" },
    { type: "vehicule_brand", value: "Suzuki" },
    { type: "record_category", value: "Alerta" },
    { type: "record_category", value: "Informativo" },
    { type: "record_category", value: "Peligro" },
    { type: "record_type", value: "Tanqueo" },
    { type: "record_type", value: "Reparación" },
    { type: "record_type", value: "Mantenimiento" },
    { type: "Document_type", value: "SOAT" },
    { type: "Document_type", value: "RTM" },
    { type: "Document_type", value: "Licencia de transito" },
    { type: "vehicle_type", value: "Motocicleta" },
    { type: "vehicle_type", value: "Automovil" },
]
export const createLiterals = async (LiteralModel: any) => {
    await Promise.all(literals.map((l) => LiteralModel.create(l)));
}