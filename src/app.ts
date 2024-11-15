// src/app.ts
import express from 'express';
import sequelize from './config/database';
import countryRoutes from './routes/sampleRoutes';  // Use default import syntax

const app = express();
app.use(express.json());  // Middleware to parse JSON

// Register the route
app.use('/api', countryRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
    console.log('Database connected...');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}).catch((err: any) => {
    console.error('Unable to connect to the database:', err);
});
