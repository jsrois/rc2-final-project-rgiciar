# Karen
Karen, tu asistente virtual... y la de tu gato. Con esta app móvil, tendrás todo lo que necesitas para cuidar de tu gato en un solo lugar. Utiliza Karen como una cartilla digital, donde puedes guardar toda la información que desees y consultarla estés donde estés. Karen te recordará cuándo debes vacunar a tu gato y cuándo desparasitarlo. Además, registra todos los gastos y lleva un seguimiento. Consulta a Karen si una planta es catfriendly, o por qué a tu gato le encantan las aceitunas. Karen simplifica tu vida y te convierte en la compañera que todo gato desearía.

## Tecnologías utilizadas

- SpringBoot 3 
- ...
- React Router
- Lightweight Charts


## Cómo lanzar el proyecto

### Frontend

```
cd frontend
npm install
npm run dev
```

### Backend

Se necesita una base de datos postgres, de acuerdo con la configuración del archivo `src/main/resources/application.properties`.

```
mvn spring-boot:run
```