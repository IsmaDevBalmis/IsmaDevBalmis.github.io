
# Apuntes AD - Tema 0

* [Volver a asignaturas](../../index.html)
* [Volver a temas](./index_ad.html)


## Indice

- [**General**](#general)
- [**Nomenclatura estandar**](#nomenclatura-estandar)
- [**Leer desde consola**](#leer-desde-consola)
- [**Condiciones**](#condiciones)
  * [If & Else](#if---else)
  * [Switch](#switch)
- [**Bucles**](#bucles)
  * [While](#while)
  * [Do-While](#do-while)
  * [For](#for)
- [**Tipos de datos básicos**](#tipos-de-datos-b-sicos)
  * [Booleanos](#booleanos)
  * [Char](#char)
- [**Arrays**](#arrays)
  * [Arrays bidimensionales o n dimensiones](#arrays-bidimensionales-o-n-dimensiones)
- [**Funciones**](#funciones)
- [**Estructuras dinámicas**](#estructuras-din-micas)
- [**Clases**](#clases)
- [**Interfaces**](#interfaces)

## General

- Los comandos útiles en consola son:
  - **Compilar** = javac Programa.java
  - **Ejecutar** = java Programa
  - **Comprobar fuente & compilar** = dir /w

## Nomenclatura estandar

- Constantes ```CONSTANTE```  
- Clases & tipos ```ClaseEjemplo```
- Variables, objetos, métodos & funciones ```metodoEscribir()```

## Leer desde consola

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Cuántas veces te saludo?");

int n = entrada.nextInt();
for(int i = 0; i<n; i++)
  System.out.println("Hola Mundo.");
```
- Para las cadenas debe de usarse ``nextLine()``

````java
Scanner entrada = new Scanner(System.in);
System.out.print("Cuántas veces te saludo?");
int n = entrada.nextInt();

System.out.print("Y cuál es tú nombre? ");
String nombre = entrada.nextLine();

for(int i = 0; i<n; i++)
  System.out.println("Hola " + nombre);

````

- Alternativa con un ``nextLine()`` extra

````java
Scanner entrada = new Scanner(System.in);
System.out.print("Cuántas veces te saludo?");
int n = entrada.nextInt();

System.out.print("Y cuál es tú nombre? ");
String nombre = entrada.nextLine();

for(int i = 0; i<n; i++)
  System.out.println("Hola " + nombre);
````

## Condiciones

### If & Else

````java
int x = 10;

if (x == 70) {
  System.out.println("x vale 70");
} else {
  System.out.println("x no vale 70");
}
````

### Switch

````java
int mes = 2;

switch(mes) {
  case 1:
    System.out.println("El mes es Enero");
  case 2:
    System.out.println("El mes es Febrero");
  case 3:
    System.out.println("El mes es Marzo");
    break;
    }
````
- Formato más compacto

````java
int x = 5;

switch(x) {
  case 1:
  case 2:
  case 3:
    System.out.println("El valor de x estaba entre 1 y 3");
    break;
  case 4:
  case 5:
    System.out.println("El valor de x era entre 4 o 5");
    break;
  case 6:
    System.out.println("El valor de x estaba era 6");
    break;
  default:
    System.out.println("El valor de x no estaba entre 1 y 6");
    break;
}
````
- Comparar cadenas de texto

````java
String nombre = "yo";

switch(nombre) {
  case "uno":
    System.out.println("Hola, uno");
    break;
  case "yo":
    System.out.println("Hola, tú");
    break;
  case "otro":
    System.out.println("Bienvenido, otro");
    break;
  default:
    System.out.println("Nombre desconocido");
    break;
}
````

## Bucles

### While

````java
Scanner teclado = new Scanner(System.in);

System.out.print("Introduce un cero: ");
int dato = teclado.nextInt();

while (dato != 0) {
  System.out.print("No era cero. Introduce cero: ");
  dato = teclado.nextInt();
}
System.out.println("Terminado!");
````
### Do-While

````java

int password;
Scanner teclado = new Scanner(System.in);

do {
  System.out.print("Introduzca su password numérica: ");
  password = teclado.nextInt();
  if (password != 1234)
    System.out.println("No es válida.");
} while (password != 1234);
````
### For

````java
int i;

for ( i=1 ; i<=10 ; i++ ) {
  System.out.print("Hola ");
}
````
- Declarar variable dentro de ``For`` para evitar reutilizar variables

````java
for ( int i=1 ; i<=10 ; i++ ) {
  System.out.print("Hola ");
}
````
## Tipos de datos básicos

### Booleanos

- Comprobar condiciones de forma más compacta

````java
int dato;
boolean todoCorrecto;
Scanner teclado = new Scanner(System.in);

do {
  System.out.print("Introduce un dato del 0 al 10: ");
  dato = teclado.nextInt();
  todoCorrecto = (dato >= 0) && (dato <= 10);
  if (!todoCorrecto) System.out.println("No es válido!");
} while (!todoCorrecto);

System.out.println("Terminado!");
````

### Char

- Manipular letras individuales

````java
char letra1, letra2;
letra1 = 'a';
letra2 = 'b';


System.out.print("La primera letra es : ");
System.out.println(letra1);

System.out.print("La segunda letra es : ");
System.out.println(letra2);
````
- Operaciones que podemos realizar con los Strings

````java
// Forma "sencilla" de dar un valor
String texto1 = "Hola";
````

````java
// Declarar y dar valor usando un "constructor"
String texto2 = new String("Prueba");
````

````java
// Declarar sin dar valor
String resultado;
````

````java
// Manipulaciones básicas
System.out.print("La primera cadena de texto es: ");
System.out.println( texto1 );

resultado = texto1 + texto2;
System.out.println("Si concatenamos las dos: " + resultado);

resultado = texto1 + 5 + " " + 23.5 + '.';
System.out.println("Podemos concatenar varios: " + resultado);
System.out.println("La longitud de la segunda es: " + texto2.length() );
System.out.println("La segunda letra de texto2 es: " + texto2.charAt(1) );
````

````java
// En general, las operaciones no modifican la cadena
texto2.toUpperCase();
System.out.println("texto2 no ha cambiado a mayúsculas: " + texto2 );
resultado = texto2.toUpperCase();
System.out.println("Ahora sí: " + resultado );
````

````java
// Podemos extraer fragmentos
resultado = texto2.substring(2,5);
System.out.println("Tres letras desde la posición 2: " + resultado );
````

````java
// Y podemos comparar cadenas
System.out.println("Comparamos texto1 y texto2: "+texto1.compareTo(texto2));
if (texto1.compareTo(texto2) < 0)
  System.out.println("Texto1 es menor que texto2");
````

````java
// Finalmente, pedimos su nombre completo al usuario
System.out.print("¿Cómo te llamas? ");
Scanner teclado = new Scanner(System.in);
String nombre = teclado.nextLine();
System.out.println("Hola, " + nombre);
````

````java
// O podemos bien leer sólo la primera palabra
System.out.print("Teclea varias palabras y espacios... ");
String primeraPalabra = teclado.next();
System.out.println("La primera es " + primeraPalabra);
````

## Arrays

````java
double[] a = { 10, 23.5, 15, 7, 8.9 };
double total = 0;
int i;

for (i=0; i<5; i++)
  total += a[i]; // Es lo mismo que total = total + a[i];

System.out.println( "La media es:" );
System.out.println( total / 5 );
````
- Recorrer Array usando la propiedad ``.length``

````java
double[] datos = { 10, 23.5, 15, 7, 8.9 };
for (int i=0; i<datos.length; i++)
  System.out.print(datos[i]+" ");
````
- Proceso similar a ``foreach``

````java
double[] datos = { 10, 23.5, 15, 7, 8.9 };

for (double dato: datos)
  System.out.print(dato+" ");
````

### Arrays bidimensionales o n dimensiones

````java
int[][] datos = new int[2][2];

datos[0][0] = 5;
datos[0][1] = 1;
datos[1][0] = -2;
datos[1][1] = 3;

// +----+----+
// | 5 | 1 | // fila 0
// +----+----+
// | -2 | 3 | // fila 1
// +----+----+

for (int i=0; i<2; i++)
  for (int j=0; j<2; j++)
    System.out.println("El dato "+i+","+j+" vale "+datos[i][j]);
````

- Formas de declarar un array

````java
int[] myIntArray = {1, 2, 3};
int[] myIntArray = new int[]{1, 2, 3};
int[] myIntArray = new int[3];
myIntArray[0] = 1;
myIntArray[1] = 2;
myIntArray[2] = 3;
````

````java
String[][] palabras = new String[3][2]

palabras[0] = new String[]{"p1","p2"};
palabras[1] = new String[]{"p1","p2"};
palabras[2] = new String[]{"p1","p2"};
````
## Funciones

- Funciones static si no vamos a crear objetos

````java
public class Circulo {
  public static double superfCirculo(int radio) {

    double superf = 3.1415926535 * radio * radio;
    return superf;
}
public static void main(String [] args) {
  System.out.println("La superficie de un círculo con radio=3 es: ");
  System.out.println( superfCirculo(3) );
  }
}
````
- Java no permite parametros por referencia
  - La variables de tipos sencillos se pasan por valor
  - Los objetos, se crean una copia de los mismos antes de llamar a la función

 ## Estructuras dinámicas

 - Se usan para almacenar varios datos pero no se conoce su cantidad
 - Una habitual es ``ArrayList``
 - Sus métodos son:
  - ``add``, ``size``, ``get``, ``remove``, ``contains``

````java
import java.util.ArrayList; // Para ArrayList
import java.util.Collections; // Para ordenar ArrayList

public class ArrayList1 {
  public static void main( String[] args ) {
    ArrayList<String> datos = new ArrayList<String>();
````
````java
  // Añadimos datos
  datos.add("hola");
  datos.add("adios");
  datos.add("hasta luego");
````

````java
// Ordenamos
Collections.sort(datos);
````
````java
// Mostramos el primero... si existe
if (datos.size() > 0)
  System.out.println("Primer dato: " + datos.get(0));
````
````java
// Borramos el primero
datos.remove("adios");
````
````java
// Buscamos uno
if (datos.contains("hola"))
  System.out.println("Aparece \"hola\"");
````
````java
// Y mostramos todos
System.out.println("Contenido actual:");
for (String unDato : datos)
  System.out.println(unDato);
````

- Para tener una lista ordenada y sin duplicados usaremos ``TreeSet``

````java
TreeSet<String> datos = new TreeSet<String>();

// Añadimos datos
datos.add("hola");
datos.add("adios");
datos.add("hasta luego");
datos.add("hola");

// Y mostramos todos
System.out.println("Contenido actual:");
for (String unDato : datos)
  System.out.println(unDato);
````
- Otros métodos a destacar
 - Colas ``Queue``  
    - ``.add`` - añadir elemento
    - ``.poll()`` - obtener primer elemento
    - ``.peek()`` - consultar elemento sin extraer
 - Pilas ``Stack``
    -``.push`` - añadir elemento
    -``.pop()`` - obtener elemento
    -``.peek()`` - mirar elemento
 - Tablas Hash
    - ``put``, ``containsKey``, ``containsValue``, ``get``, ``size``, ``isEmpty``, ``keySet.``

````java
HashMap<Integer,String> tabla = new HashMap<Integer,String>();

// Añadimos datos
tabla.put(1, "uno");
tabla.put(3, "tres");
tabla.put(5, "cinco");

if (tabla.containsKey(5))
  System.out.println("Aparece la clave 5");

if (tabla.containsValue("Tres"))
  System.out.println("Aparece el valor Tres");

int clave = 1;
String valor = tabla.get(clave);
System.out.println("El valor para 1 es "+valor);

System.out.println("Tamaño de la tabla: " + tabla.size());

if (tabla.isEmpty())
  System.out.println("Está vacía");

Iterator<Integer> iterador = tabla.keySet().iterator();
while (iterador.hasNext()) {
  int claveActual = iterador.next();
  System.out.println("Clave: " + claveActual +
    " valor: " + tabla.get(claveActual));
````

## Clases

- Todo programa en Java es una clase
- Para heredar de una clase ``extends``

````java
class Clase {
  protected int x;

// Constructor
public Clase() {
  x = 5;
}

// Método adicional
public void escribir() {
  System.out.println("x vale " + x);
  }
}

class ClaseDerivada extends Clase {

public ClaseDerivada() {
  x = x + 3;
  }
}

public class PruebaDeClases {
  public static void main( String[] args ) {
    ClaseDerivada objeto = new ClaseDerivada();
    objeto.escribir();
  }
}
````

## Interfaces

- Un tipo de clase abstracta, donde se pueden declarar métodos pero no implementarlos
- Los atributos se consideran ``static``
- Pueden implementarse varias interfaces

````java
public interface Saludador {
  void saludar();
}

public interface Sumador {
  int datoInterno = 5;

  void sumar(int n);
}

public class ClaseSaludador implements Saludador {
  public void saludar() {
  System.out.println("Hola!");
  }
}

public class ClaseSaludadorSumador implements Saludador, Sumador {
  int dato = datoInterno;

  public void saludar() {
    System.out.println("Hola! Mi dato es: " + dato);
}

public void sumar(int n) {
  dato = datoInterno + n;
  }
}

public class Interfaces {
  public static void main(String[] args) {
    Clase1 c1 = new Clase1();
    c1.saludar();
    Clase2 c2 = new Clase2();
    c2.sumar(7);
    c2.saludar();
  }
}
````
