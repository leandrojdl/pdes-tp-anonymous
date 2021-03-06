[![Build Status](https://travis-ci.org/PracticaDS/pdes-tp-anonymous.svg?branch=master)](https://travis-ci.org/PracticaDS/pdes-tp-anonymous)
[![Coverage Status](https://coveralls.io/repos/github/PracticaDS/pdes-tp-anonymous/badge.svg?branch=master)](https://coveralls.io/github/PracticaDS/pdes-tp-anonymous?branch=master)

# Grupo Anonymous :: PDeS

* [Enunciado](.pdes/)
* [Revolución Industrial >> Live App](http://pdes-tp-anonymous.tk)
* [Repositorio E2E](https://github.com/PracticaDS/pdes-tp-e2e-anonymous)
* [Repositorio Load Testing](https://github.com/PracticaDS/pdes-tp-load-testing-anonymous)
* [Prometheus](http://prometheus.pdes-tp-anonymous.tk)
* [Grafana](http://grafana.pdes-tp-anonymous.tk)
* [Reporte Gatlin](https://practicads.github.io/pdes-tp-load-testing-anonymous/)

## API Routes

* `GET /`
  - Retorna el listado de todos los usuarios y sus juegos
* `GET /:username`
  - Devuelve el usuario y la lista de sus juegos. Si no existe lo crea
* `DELETE /:username`
  - Elimina el usuario :username y todos sus juegos
* `POST /:username/games`
  - Crea y persiste un nuevo juego
* `GET /:username/games/:gameId`
  - Retorna el juego correspondiente a :gameId
* `PUT /:username/games/:gameId`
  - Actualiza el estado del juego correspondiente al :gameId
* `DELETE /:username/games/:gameId`
  - Elimina el juego correspondiente al :gameId

## Installing, Testing & Running

### TL;DR

```sh
git checkout git@github.com:PracticaDS/pdes-tp-anonymous.git
cd pdes-tp-anonymous
cd front && yarn install
yarn test-unwatch
yarn start
```

### Explained

#### Installing


```sh
git checkout git@github.com:PracticaDS/pdes-tp-anonymous.git
cd pdes-tp-anonymous

# Front App
cd front && yarn install
```

#### Testing

```sh
# Front App
cd pdes-tp-anonymous/front

# unwatch test
yarn test-unwatch

# continuous watching 
yarn test
```

#### Running

```sh
# Front App
cd pdes-tp-anonymous/front
yarn start
```

## Branching Strategy

Para resolver cada _issue_ se crea un branch con el número y una referencia al nombre: `issue-NN-descripcion-breve`.

> Por ejemplo, dado el issue "_#42 El sentido de la vida, el universo y todo lo demás_"
> se crea un branch `issue-42-respuesta-a-todo`.

Al resolver el issue se crea un _Pull Request_ hacia `master`. El _reviewer_ debería
hacer un _rebase_ en `master` (idealmente), pedir o no cambios, y luego proceder con
el _merge_.

Si se logró hacer el _merge_ correctamente el _branch_ debiese ser eliminado.
