import { Schema, model} from "mongoose";

const videoProjectSchema = new Schema(
{
    email: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40,
      minDomainSegments: 2, 
      tlds: { allow: ['com', 'net'] },
      noWhiteSpaces: 0,
    },
    url: {
      type: String,
      required: true,
      unique: true,
},
    teacherName: {
      type: String,
      minlength: [1,"La cadena es más corta de la requerida"],
      maxlength: 60,
      noWhiteSpaces: 4,
    },
    authorId: {
      type: Schema.Types.ObjectId, 
      ref: "User",
    }, 
    teacherId: {
      type: Schema.Types.ObjectId, 
      ref: "User",
    },
    skills: {
      communication: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
     },
      collaboration: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      },
      creativity: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      },
      critical_thinking: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      }
    },
    comment: {
      type:String,
    },   
 },
{ 
  timestamps: true,    
}
)

export default model("Videoproject", videoProjectSchema);