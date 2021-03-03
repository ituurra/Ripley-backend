# Backend con NodeJS y lowdb

## Instalacion

Con node en su maquina, proceda a instalar las dependencias con el siguente comando

```bash
npm install
```
Luego ya instalada las dependencias ejecutamos el comando para iniciar la app , quedara expuesto en `http://localhost:3000/`

```bash
npm start
```


## Base de datos

Al momento de correr el proyecto por primera vez, se generara una base de datos llamada db.json, con la siguente estructura

```JSON
{
    usuario: [
      {
        Nombre: "Daniel Iturra",
        Rut: "1111-1",
        NumCuenta: "1111",
        Saldo: 500000,
      },
      {
        Nombre: "Ana Maria",
        Rut: "2222-2",
        NumCuenta: "2222",
        Saldo: 400000,
      },
    ],
  }
```

 ## Como probar

Puede probar este proyecto a travez de la coleccion en `postman` que esta dentro del proyecto o descargar el frontend y correr el proyecto 

```bash
git clone https://github.com/ituurra/Ripley-frontend.git
```

 
