# simulador-notes

Aquesta petita aplicació permet que els alumnes i professors puguin simular fàcilment les notes d'avaluació d'un alumne.
Cal remarcar que es tracta d'estimacions i que en cap cas es pot prendre com una nota definitiva.

## Accés al simulador

Triau el model d'avaluació de la vostra matèria:

- Model d'avaluació per parcials (alliberant matèria), 70% exàmens i 30% tasques avaluables online.
[https://iedib.github.io/simulador-notes/dist/?we=70&m=parcials] 

- Model d'avaluació per parcials (alliberant matèria), 60% exàmens i 40% tasques avaluables online.
[https://iedib.github.io/simulador-notes/dist/?we=60&m=parcials] 

- Model d'avaluació per examen final (gener 20%, maig 80%), 70% exàmens i 30% tasques avaluables online.
[https://iedib.github.io/simulador-notes/dist/?we=70] 

- Model d'avaluació per examen final (gener 20%, maig 80%), 60% exàmens i 40% tasques avaluables online.
[https://iedib.github.io/simulador-notes/dist/?we=60] 


## Paràmetres

```m=parcials```: Avaluació per parcials, alliberant matèria.

```we=70```: El percentatge dels exàmens es 70%. El percentatge de tasques és 100-we.

```wg=20```: El pes de l'examen de gener en la convocatòria de maig és del 20%. El pes de l'examen de maig és 100-wg.

## Project setup
```
npm install
```
```
npm run serve
```
```
npm run build
```