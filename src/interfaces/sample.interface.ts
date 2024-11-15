export interface SampleInterfaceAttributes {
    sample_id: number;
    name: string;
    isActive: boolean;
}

// Creation attributes omit `sample_id` for new entries
export interface SampleCreationAttributes extends Omit<SampleInterfaceAttributes, 'sample_id'> {
}
