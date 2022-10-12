/* MAP - Exercice 4

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index
Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
  
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

const array = [3, 8, 11, 13, 19, 7]

const multiplyOddIndices = array => array.map((element,index) => index%2===1 ? element*index : element)

console.log(multiplyOddIndices(array))