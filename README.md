### Oracle One Education | Alura Latam

# Challenge Amigo secreto

Aplicando logica de programación javascript y manipulacion del DOM (Document Object Model) del navegador

- [x] Se añade soporte de evento enter en boton añadir amigo
- [x] Se agrega funcion Math.ramdom() para "aleatoriedad" <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">Fuente</a>

<a href="https://leonardomv94.github.io/Oracle-Challenge-secret-friend/" taget="_blank">Ver demo online</a>

### Funciones en `app.js`

- **limpiarInput()**: Limpia el campo de entrada `#amigo`.
  - **parámetros**: ninguno
  - **retorna**: void

- **agregarAmigo()**: Lee y sanitiza el texto del input, valida que solo contenga letras, evita duplicados, agrega el nombre a la lista y actualiza el DOM.
  - **usa**: `sanitizeInput`, `validarAmigo`, `actualizarLista`
  - **parámetros**: ninguno
  - **retorna**: void

- **eliminarAmigo(nombre)**: Elimina un nombre de la lista y actualiza el DOM.
  - **parámetros**: `nombre` (string)
  - **retorna**: void

- **actualizarLista()**: Renderiza los elementos de `amigos` en `#listaAmigos`, creando un botón de eliminar por cada entrada.
  - **parámetros**: ninguno
  - **retorna**: void

- **reinicar()**: Reinicia el estado del juego: vacía la lista, limpia el input y el contenedor `#resultado`.
  - Nota: el nombre de la función es `reinicar` tal como está en el código.
  - **parámetros**: ninguno
  - **retorna**: void

- **sortearAmigo()**: Verifica que haya al menos 2 nombres, selecciona uno al azar con `Math.random`, limpia la lista y muestra el resultado en `#resultado`.
  - **parámetros**: ninguno
  - **retorna**: void

- **sanitizeInput(str)**: Elimina caracteres especiales (`<`, `>`, `&`, `'`, `"`) del texto ingresado.
  - **parámetros**: `str` (string)
  - **retorna**: string (sanitizado)

- **validarAmigo(name)**: Valida que el nombre solo contenga letras (incluye `ñ/Ñ`) y espacios mediante una expresión regular.
  - **parámetros**: `name` (string)
  - **retorna**: boolean

- **Inicialización (Enter)**: Al cargar el documento, se agrega un escuchador de teclado al input `#amigo` que, al presionar Enter, invoca `agregarAmigo()`.