// Validaciones.js

// Valida si el campo está vacío
export const isNotEmpty = (value) => {
    return value.trim() !== '';
  };
  
  // Valida si el campo es una dirección de correo electrónico válida
  export const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  
  // Valida si el campo es un número de teléfono válido
  export const isValidPhoneNumber = (phoneNumber) => {
    // Puedes definir tu propia lógica de validación aquí
    // Por ejemplo, puedes verificar si el número tiene el formato correcto
    // o si cumple con ciertas reglas específicas de tu aplicación
    // Por simplicidad, aquí solo se verifica si es un número y tiene al menos 10 dígitos.
    const phoneNumberRegex = /^\d{10,}$/;
    return phoneNumberRegex.test(phoneNumber);
  };
  
  // Valida si el campo es una fecha de nacimiento válida
  export const isValidDateOfBirth = (dateOfBirth) => {
    // Puedes definir tu propia lógica de validación aquí
    // Por ejemplo, puedes verificar si la fecha tiene el formato correcto
    // o si la persona tiene una edad mínima requerida
    // Por simplicidad, aquí solo se verifica si es una cadena no vacía.
    return isNotEmpty(dateOfBirth);
  };
  
  // Valida si el campo cumple con un requisito específico, por ejemplo, longitud de contraseña
  export const isValidPassword = (password, minLength) => {
    return password.length >= minLength;
  };
  