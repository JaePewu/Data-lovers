# Data Lovers/ League Of Legends

## Tabla de contenidos

* [1. Preámbulo](#1-preámbulo)
* [2. Características](#2-características)
- - [Sobre mí](######-Sobre-mí-:waning_crescent_moon:)
* [3. Definición del producto](#3-Definición-del-producto)
* [4. Historias de usuario](##4-Historias-de-usuario)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

League of Legends (LoL) es un videojuego en línea que ofrece una experiencia competitiva
y desafiante para jugadores de todas las edades y habilidades. Los usuarios de LoL buscan
mejorar sus habilidades y competir contra otros jugadores en un ambiente multijugador en 
línea. El objetivo principal es ganar la partida, pero también disfrutar de la interacción 
con otros jugadores y mejorar su nivel de juego.


## 2. Características
1. **Desarrollo de una página web:** *El proyecto consiste en desarrollar una web que permita*
 *visualizar un conjunto de datos.*

2. **Conjunto de datos y tematica:** *Se nos proporciono diferentes tipos de data para trabajar,* 
*en este caso se eligió para este proyecto los datos de League Of Legends.*

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  - *Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).*

3. **Identificación del usuario:** *Se debió identificar quién es su usuario y qué necesita saber o* 
*ver exactamente. Esto permite ayudar a construir la interfaz donde se logra  interactuar y entender* 
*mejor la data.*
- [Investigación con jugadores de LoL](src/data/lol/README.md)

4. **Funcionalidades de la página web:** *Debe permitir visualizar los datos, filtrarlos, ordenarlos* 
*y hacer cálculos agregados para mostrar información relevante.*

###### Sobre mí :waning_crescent_moon:
Segundo proyecto para Laboratoria, implementando mayormente Javascript, seguido por HTML y CSS.
Ha sido un camino difícil pero entretenido.


## 3. Definición del producto
League of Legends (LoL) es un videojuego en línea que permite a los jugadores
competir en partidas multijugador y mejorar sus habilidades. En la interfaz, los
usuarios pueden ver información sobre los campeones, filtrar por sus roles,
ordenarlos de manera alfabética, al igual incluir un orden descendente para el
ataque, magia o defensa, así como sobre otros jugadores en su equipo y en el
equipo contrario. Los usuarios utilizan el producto en cualquier momento del día para
disfrutar de la experiencia de juego y mejorar sus habilidades en el tiempo de ocio.

![image](https://github.com/JaePewu/Data-lovers/blob/main/src/img%20readme/LOLWEB.png)


## 4. Historias de usuario
**HU1:**  Para el usuario es importante saber cuál es el rol de cada campeón.

**Como** usuario  nuevo del juego, **quiero** conocer el rol de cada campeón en el 
juego **para** entender mejor cómo utilizarlos estratégicamente durante las partidas.

###### **Descripción:** 
*Es esencial que el usuario tenga un conocimiento detallado sobre el rol de cada campeón,* 
*es decir, su función dentro del equipo y su estilo de juego. Los roles principales son: Tirador, Apoyo, Tanque,*
*Luchador, Mago y Asesino. Cada uno de ellos tiene habilidades y características específicas que se adaptan a* 
*diferentes situaciones y estrategias en el juego. Al conocer los roles de cada campeón, el jugador podrá tomar* 
*decisiones más informadas y estratégicas a la hora de armar su equipo, lo que aumentará sus posibilidades de*
*éxito en la partida.*

------------
**HU2:** Es importante para el usuario poder saber quiénes son los más poderosos de cada rol.

**Como** usuario que no conoce mucho de los poderes, **quiero** poder conocer los campeones más 
poderosos cada rol en el juego, **para** poder tomar decisiones informadas al elegir a mi equipo 
y estrategias durante las partidas.

###### **Descripción:** 
*Conocer la potencia y capacidad defensiva de cada personaje es crucial para armar un grupo estratégico que pueda* 
*enfrentarse al enemigo. En LoL, existen campeones que se destacan por su poder ofensivo, mientras que otros destacan por* 
*su capacidad defensiva. Por lo tanto, para el usuario, es importante saber quiénes son los más poderosos o defensivos* 
*en cada rol, para poder elegir al mejor grupo de campeones que se adapte a su estrategia de juego y a las necesidades* 
*del equipo.*

------------
**HU3:** Es importante conocer todas las habilidades de cada campeón y cómo estas pueden ser utilizadas.

**Como** usuario que ya sabe que campeón usar y el rol de tal, **quiero** poder acceder a información 
detallada sobre todas las habilidades de este u otros campeónes en el juego, **para** saber utilizarlas 
efectivamente durante las partidas.

###### **Descripción:** 
*Al conocer la información detallada sobre todas las habilidades de cada campeón en el juego y cómo utilizarlas efectivamente* 
*durante las partidas. El usuario lograra dominar las habilidades de cada campeón, podrá tomar decisiones más estratégicas* 
*y efectivas que le permitan alcanzar la victoria en el juego.*

### 5. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad



#### Prototipo de alta fidelidad



#### Testeos de usabilidad


### Primeros pasos
* **¿Quiénes son los principales usuarios de producto?** 
Los principales usuarios de ***League of Legends*** son jugadores de videojuegos en línea que 
buscan una experiencia competitiva y desafiante. El juego atrae a jugadores de todas las 
edades y habilidades, pero especialmente a aquellos que disfrutan de juegos de estrategia 
multijugador en línea.

* **¿Cuáles son los objetivos de estos usuarios en relación con el producto?**
Los usuarios de ***LoL*** buscan disfrutar de la experiencia de juego, mejorar sus habilidades y 
competir contra otros jugadores. El objetivo principal es ganar la partida, pero también 
disfrutar de la interacción con otros jugadores y mejorar su nivel de juego.

* **¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**
Los usuarios de ***LoL*** quieren ver información sobre los campeones, sus habilidades y 
estadísticas. También desean ver información sobre los otros jugadores en su equipo y en el 
equipo contrario. Esto les ayuda a tomar decisiones informadas sobre la elección de campeones 
y estrategias de juego.

* **¿Cuándo utilizan o utilizarían el producto?**
Los usuarios de ***LoL*** utilizan el producto en cualquier momento del día, pero especialmente en su 
tiempo libre o en su tiempo de ocio. Muchos jugadores juegan en línea con amigos o familiares, lo 
que aumenta la interacción social y la diversión del juego. También pueden utilizar el 
producto para mejorar sus habilidades y participar en competencias en línea.

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Herramientas de Trabajo
* [README, Laboratoria](https://github.com/Laboratoria/DEV006-data-lovers)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo


