/* FILTER - Exercice 1

Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres.
En utilisant filter, cette fonction doit renvoyer un tableau ne contenant que des nombres
positifs ou nuls.

Exemple de tableau d'entrée:
  [7, -4, 2, 0, -10, 3, 11]

Sortie attendue:
  [7, 2, 0, 3, 11]
 */


const array = [7, -4, 2, 0, -10, 3, 11]

const getPositiveNumbers = array => array.filter(element => element>=0)

console.log(getPositiveNumbers(array))