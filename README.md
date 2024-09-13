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

```rec=<opcio>```: Estratègia de recuperació de l'examen de gener en cas que ```m != parcials```. Si no s'especifica cap estratègia simplement es fan es percentatges wg  / 100-wg especificats per als dos examens. 

- ```rec=g5``` Es posa un 5 a l'examen de gener si aprova el de maig. Sempre es fan els percentages.
- ```rec=mm``` Es posa la nota de l'examen de maig si és major que la de gener. En altre cas es fan els percentatges.


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