import mongoose from 'mongoose';

const userSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true,
    minlength:[1,"La cadena es más corta de la requerida"],
    maxlength:20,
    noWhiteSpaces:4,
    unique: true, 
  },
  lastname: {
    type: String,
    required: true,
    minlength:[1,"La cadena es más corta de la requerida"],
    maxlength:20,
    noWhiteSpaces:4,
  },
  email: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 32,
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0,
    unique: true
  },
  role: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v === "teacher" || v === "student";
      },
      message: "El campo rol solo puede ser 'teacher' o 'student'"
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);