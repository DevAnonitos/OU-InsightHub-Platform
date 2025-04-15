import { Express } from "express";
import swaggerJSDoc, { SwaggerDefinition } from "swagger-jsdoc";
import swaggerUi, { SwaggerOptions, SwaggerUiOptions } from "swagger-ui-express";

const options = {
    
}

export const swaggerSpec = swaggerJSDoc(options);

