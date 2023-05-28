import Joi from "joi"; 

//Esquema de carga de Video
export const SchemaUpload =   Joi.object ({
    email: Joi.string().required().min(1).max(40).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
    url: Joi.string().required().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
    teacherName: Joi.string().required().min(1).max(60).trim().strict(),
    skills: {
        communication: Joi.number().min(0).max(100),
        collaboration: Joi.number().min(0).max(100),
        creativity: Joi.number().min(0).max(100),
        critical_thinking: Joi.number().min(0).max(100)
      },
    comment: Joi.string()
})

// Esquema Modificación (se dejan opcionales)
export const SchemaUpdate =   Joi.object ({
    url: Joi.string().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
    teacherName: Joi.string().min(1).max(60).trim().strict()
})

export const SchemaUpdateQualification =   Joi.object ({
    skills: {
        communication: Joi.number().required().min(0).max(100),
        collaboration: Joi.number().required().min(0).max(100),
        creativity: Joi.number().required().min(0).max(100),
        critical_thinking: Joi.number().required().min(0).max(100)
      },
    comment: Joi.string()
})