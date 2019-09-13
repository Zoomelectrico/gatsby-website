---
author: Jose Roberto Quevedo
email: jose@avilatek.co
date: '2019-08-15T04:00:00.000Z'
title: Acerca de los Algoritmos
description: Durante mucho tiempo el ser humano se ha avocado a la tarea de resolver problemas, esta tarea tan fundamental ha permitido el avance de nuestra especie hasta la edad moderna, sin embargo, nada de esto hubiera sido posible, sino se hubiera almacenado y estandarizado este conocimiento. De este razonamiento nace el concepto de algoritmo como se conoce hoy en día, una serie de pasos que permiten resolver un problema.
---

## Introducción

Durante mucho tiempo el ser humano se ha avocado a la tarea de resolver problemas, esta tarea tan fundamental ha permitido el avance de nuestra especie hasta la edad moderna, sin embargo, nada de esto hubiera sido posible, sino se hubiera almacenado y estandarizado este conocimiento. De este razonamiento nace el concepto de algoritmo como se conoce hoy en día, una serie de pasos que permiten resolver un problema.

---

## Pensamiento Algorítmico

Es posible definir a un algoritmo como un procedimiento que toma ciertos valores de entrada y produce un conjunto de valores como salida, computacionalmente hablando esto es una seria de secuencias que transforman una entrada en un salida (Cormen et al. ). En consecuencia, el pensamiento algorítmico no es mas que un esquema de pensamiento, que permite convertir la solución de un problema en un algoritmo.

Sin embargo, no es trivial crear un algoritmo, es decir, no todas las secuencias lógicas para resolver un problemas son adecuadas o funcionan correctamente, ilustremos este razonamiento con un ejemplo.

Supongamos que el problema es hacer cambiar un caucho. Un primer algoritmo seria el siguiente

1. Sacar el Gato, las herramientas y el caucho de repuesto en la maleta.
2. Colocar el Gato en la Posición Correcta y Levantar el carro.
3. Retirar tuercas y caucho.
4. Cambiar caucho y colocar tuercas.
5. Bajar carro y quitar gato

Como podemos observar existen las siguientes fallas. Una mejor solución o aproximación seria la siguiente:

1. Sacar el Gato, las herramientas y el caucho de repuesto.
2. Aflojar las tuercas del Caucho a cambiar
3. Colocar el Gato en la Posición Correcta y Levantar el carro.
4. Retirar tuercas y caucho.
5. Cambiar caucho y colocar tuercas.
6. Bajar carro y quitar gato
7. Guardar Todo

Nótese que el nuevo algoritmo posee dos pasos mas y ahora considera los aspectos de manera mas general, por ejemplo, en el paso 1 no todo tiene porque estar en la maleta, se agrega un nuevo paso 2 que facilita el paso 3, y por ultimo el paso 7 asegura que todas nuestras pertenencias se queden con nosotros.

Si bien es cierto que este ejemplo es un poco ingenuo, a continuación, observaremos un ejemplo mas complejo, el cual esta bien si no lo entienden ahorita.

Sean $x$ e $y$ números reales. Se define $z$ como una función $f(x,y)$ tal que:

$z = f(x,y) = \frac{x}{y}$, para todo par $(x,y) \in \reals^2$.

Matemáticamente hablando estamos diciendo que $z$ sera igual al cociente entre $x$ e $y$. Este es un algoritmo bastante común al que estamos acostumbrados Ahora analicemos unos ejemplos y vemos un fallo muy simple del algoritmo:

1. $f(2,1) = 2$
2. $f(5,2) = 2.5$
3. $f(8,4) = 2$
4. $f(1,0) = ?$

Fíjense que hemos definido la función $f$ en todo el $\reals^2$, es decir para cualquier par de números reales, y si realmente hacemos el estudio del dominio de dicha función son daríamos cuenta que en realidad es $(x,y) \in \reals^2 \rightarrow y \not ={0}$, con esa condición extra aseguramos que nuestro algoritmo es infalible.

---

## Filosofía de Pequeños Problemas

Como hemos observado, anteriormente los algoritmos pueden ser muy sencillo o muy complejos, para los algoritmos sencillos estamos cubiertos, sin embargo, cuando intentamos realizar algoritmos muy grandes es mas fácil cometer errores. Por ese motivo, es considerado una buena practica romper los grandes problemas en problemas mas pequeños, y en consecuencia, convertir algoritmos muy grandes en múltiples algoritmos pequeños. Por ejemplo, consideremos la siguiente función matemática.

$\sigma = \frac{1}{1+e^{-x}}$

Si observamos con calma notaremos que la funcion contiene 3 operaciones fundamentales:

- Un potencia
- Una Suma
- Una Divison

Es posible romper esta "gran operacion" es las operaciones pequenas de manera tal que sea mas facil implementar nuestro algoritmo y aislar las posibilidades de fallar. Para ilustrar este ejemplo utilizaremos la syntaxis de un lenguaje de programacion, sin embargo no es importante que entiendan eso ahora.

```python
  def potencia_de_e(x):
    e = 2.71 # Le damos un valor a e
    return e ** x # hacemos la potencia e a la x

  def suma(x, y):
    #tomamo dos valores (x, y). y los sumamos
    return x + y

  def division(x, y):
    if y != 0: # Revisamos a ver si el divisor es distinto de 0
      return x / y
    else: # Si el divisor es 0 lanzamos un error
      raise Exception('No se puede divir entre 0')

  def sigmoid(x):
    # evaluamos e a la menos x
    potencia = potencia_de_e(-x)
    # le sumamos 1 a e a la menos x
    sumaa = suma(1, potencia)
    # dividos 1 entre el resultado anterior
    div = division(1, sumaa)
    return div
```

Exploremos un poco que acabamos de hacer, el primer lugar hemos definidos tres _funciones_ (por ahora seran formas para hacer algoritmos reusables y pequenos) luego hemos utilizados estas funciones para construir una ultima funcion llamada sigmoid, que sera que calculara el valor de $\sigma$.

Como observamos descompusimos el gran problema de calcular $\sigma$ en multiple problemas mas pequenos, esta tarea es fundamental al momento de construir algoritmos complejos e implementarlos en un lenguaje de programacion.

Tomemos el ejemplo anterior y veamos que puede salir mas al implementar la funcion $\sigma$ en _una sola linea de codigo_.

```python
  e = 2.71 # Le asignamos un valor a e.
  x = 0 # Le asignamos un valor a x
  sigmoid = 1 / 1 + e ** -x
```

Si probamos ese codigo optendremos la siguiente respuesta $\sigma = 1$. Cuando en realidad $\sigma = 0.5$, razonemos porque ocurre esto.

Si recordamos de la escuela las operaciones matematicas tiene prioridad, los parentesis primero, luego la multiplicacion y division y por ultimo la suma y la resta. En nuestro algortimos no hay parentesis, por lo que lo primero que se resuelve es la division luego la potencia y por ultimo la suma, pero ya sabemos de nuestro ejemplo anterior que ese no es el orden que deseamos. La version corregida seria la siguiente:

```python
  e = 2.71 # Le asignamos un valor a e.
  x = 0 # Le asignamos un valor a x
  sigmoid = 1 / (1 + e ** -x)
```

Es cierto que el problema es bastante sencillo y que es muy probable que nos demos cuenta pronto, pero que pasa si te digo que implementemos esta otra funcion:

$\sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum_{i=1}^{n}{(\overline{x} - x_{i})^2}}{n-1}}$

En Donde:

$\overline{x} = \frac{1}{n}\sum_{i=1}^{n}x_{i}$

$\sigma^2 = \frac{1}{n-1}\sum_{i=1}^{n}{(\overline{x} - x_{i})^2}$

Estas seguro de que quieres hacerlo todo en una linea? Obviamente tu respuesta es no y queda demostrado mi punto.

---

## Estructura del pensamiento algorítmico

Ya que ahora entendemos que es un algoritmo, como funciona, como hacer, la idea de convertir grandes algoritmos en algoritmos mas pequenos que funcionen juntos. Te invito a que hagas una pausa busque un vaso de agua, y regreses.

Entonces fuiste y buscate el vaso de agua, al momento de hacerlo en que pesabas? Pensaste en tus pasos al hacerlo, lo hiciste por inercia o sencillamente no buscate el vaso de agua.

En cualquiera de los casos tu cerebro realizo una consulta algoritmica. Tomo una serie de decisiones que te llevaron de un estado A a un estado B.

Es vital para un ingeniero tener la capacidad de segmentar sus problemas en forma algoritmica. Asi que pensemos un momento, y rompamos la estructura de este modelo de pensamientos en partes.

1. Siempre se analiza el fenomeno a estudiar, es decir, siempre nos detenemos a pensar contra que nos enfretamos.
2. Pensamos en las alternativas a tomar, es decir, despues de un analisis primario empezamos a pensar soluciones al problema
3. Escogemos una o varias soluciones y las probamos, normalmente se hace mucho ensayo y error para determinar la mejor solcuciones o aveces la solucion que funciona y ya
4. Luego guardamos el conocimiento de alguna forma.

En pocas palabras, enfrentamos un problema, vemos como solucionarlo, probamos hasta encontrar algo que funcione y una vez que lo haga aprendemos de esto o en su defecto lo anotamos/grabamos/etc.

Una buena analogia, es cuando aprendemos a hablar un nuevo idioma, al principio no entendemos nada (problemas), luego buscamos formas de aprender el idioma [cursos, videos, conversaciones] (ensayo y error) y por ultimo el conocimiento se queda en nuestro cerebro (guardar)

Con este esquema mental, la programacion, se vuelve muy facil. Ya que nos encontramos con un reto, analizamos la mejor forma de realizarlo, lo hacemos y probamos a ver si funciona y luego guardamos este conocimiento, asi la proxima vez sera mas facil.

Por ejemplo, supongamoms que su primera tarea de programacion sera realizar una calculadora que tengas las cuatro operaciones fundamentales, como lo harian?

Bueno seguramente, no tiene ni idea, asi que disenemos un algoritmo juntos.

1. Necesitamos dos numeros para poder realizar cualquier operacion basica.
2. Luego necesitamos la operacion a realizar
3. Despues dependiendo de la operacion decidimos como se calculara el nuevo valor
4. Calculamos el nuevo valor
5. Regresamos el nuevo valor

Este algoritmo sencillo puede ser representados se la siguiente forma:

```python
  a = 1
  b = 2
  op = 'suma'

  if op == 'suma':
    c = a + b
  if op == 'resta':
    c = a - b
  if op == 'mul':
    c = a * b
  if op == 'div':
    if b != 0:
      c = a / b
```

Bastante sencillo. Sin embargo, al final del curso. Espero que puedan realizar un algoritmos mas robustos y eficientes.

---

## Como estandarizar procedimientos

Para finalizar y dejarlos de aburrir considero fundamental que entendamos como estandarizar procedimientos de manera muy basica.

Por ejemplo, para todos los seres humanos es un procedimiento estandar cepillarse los dientes (**ojo:** estandar no significa que todos lo hagan, sino que todos lo hacemos igual).

En este sentido, a nivel de programacion los procedimientos estandares son cuestiones como, aislar bloques de codigo que se usan en mas de un sitio (_vease el princio DRY_). Comentar nuestro codigo, para que luego podamos entenderlo o para que alquien mas lo encuentre facil de leer _fun fact los programadores pasamos mas tiempo leyendo codigo que escribiendo_. Entre otros.

Entonces, el proceso de estandarizar procedimientos, se resume en realizar codigo considerando los siguientes aspectos en orden:

1. Funcional: El codigo tiene que ser funcional, sino no sirve.
2. Facil de Leer: De que me sirve un codigo que no puedo tocar mas nunca porque no se como sirve
3. Rapido: El codigo debe ejecutarse los mas rapido posible.

Entonces, en nuestra labor como programadores estandarizar procedimientos se resume, en realizar codigo de la mejor manera posible, y que siempre cumpla con los parametros de calidad de la organizacion a la que pertenezcamos.

---

Gracias por haber llegado tan lejos. Espero que esta lectura te haya ayudado a entender un poco mas las cosas.

### Bibliografia

[1] T. Cormen and C. Leiserson, Introduction to algorithms, 3rd ed. MIT Press, 2019.
