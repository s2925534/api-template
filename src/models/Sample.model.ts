// sample.interface.ts

import {DataTypes, Model} from 'sequelize';
import {SampleCreationAttributes, SampleInterfaceAttributes} from '../interfaces/sample.interface';
import sequelize from "../config/database";

export default class SampleModel extends Model<SampleInterfaceAttributes, SampleCreationAttributes> implements SampleInterfaceAttributes {
    public sample_id!: number;
    public name!: string;
    public isActive!: boolean; // Add non-null assertion operator
}

SampleModel.init(
    {
        sample_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true, // Set default value to true
        }
    },
    {
        sequelize,
        tableName: 'SampleModel',
        timestamps: false, // If you need timestamps, set this to true
        modelName: 'SampleModel',
    }
);
