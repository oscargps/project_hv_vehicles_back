import { RecordAttributes } from "../models/record.model";
import { RecordFuelDataAttributes } from "../models/record_fuel_data.model";
import { RecordMaintenanceDataAttributes } from "../models/record_maintenance_data.model";

export interface IRecordRequest extends RecordAttributes{
    data:RecordFuelDataAttributes | RecordMaintenanceDataAttributes
}
