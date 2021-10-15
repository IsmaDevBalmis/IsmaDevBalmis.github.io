
# Apuntes AD - Tema 02 Parte 1

## Indice
- [**General**](#general)
- [**1. Esquema de objetos**](#esquema-de-objetos)
    * [1.1 Ficheros y estructuras](#ficheros-y-estructuras)
    * [1.2 Ficheros binarios](#ficheros-binarios)
    * [1.3 Ficheros de texto](#ficheros-de-texto)
    * [1.4 Ficheros aleatorios](#ficheros-aleatorios)
- [**2. Clases asocidas a ficheros**](#2-clases-asocidas-a-ficheros)
  * [2.1 Clase File](#21-clase-file)
  * [2.2 Interfaz FilenameFilter](#22-interfaz-filenamefilter)
  * [2.3 Rutas de los ficheros](#23-rutas-de-los-ficheros)
  * [2.4 Creación y eliminación de ficheros y directorios](#24-creaci-n-y-eliminaci-n-de-ficheros-y-directorios)
- [**3. Flujos**](#3-flujos)
- [**4. Formas de acceso a un fichero**](#4-formas-de-acceso-a-un-fichero)
- [**5. Ficheros de Texto**](#5-ficheros-de-texto)
  * [5.1 Ficheros de Texto - Escritura](#51-ficheros-de-texto---escritura)
  * [5.2 Ficheros de Texto - Lectura](#52-ficheros-de-texto---lectura)
  * [5.3 Ficheros de Texto - Resumen](#53-ficheros-de-texto---resumen)
- [**6. Ficheros Binarios**](#6-ficheros-binarios)
  * [6.1 Ficheros Binarios - Escritura](#61-ficheros-binarios---escritura)
  * [6.2 Ficheros Binarios - Lectura](#62-ficheros-binarios---lectura)
  * [6.3 Ficheros Binarios – Lectura y escritura por bloques](#63-ficheros-binarios---lectura-y-escritura-por-bloques)
- [**7. Acceso secuencial**](#7-acceso-secuencial)
- [**8. Acceso aleatorio**](#8-acceso-aleatorio)


## General

- En C# tenemos varias clases ``File``, ``Directory``, ``Path`` mientras que en Java tenemos ``File`` unicamente.

- Los datos guardados en ficheros se conocen como **datos persistentes** (siguen después de la ejecución del programa).

- Al flujo de información del programa al exterior es conocido como E/S

- Las operaciones se las da **java.io** que permite:
  - Leer entradas
  - Escribir entradas
  - Operar ficheros del sistema
  - Gestionar serialización de objetos

## Esquema de objetos

#### Ficheros y estructuras
- File
- FileNameFilter

#### Ficheros binarios
- FileOutputStream
- DataOutputStream
- FileInputStream
- DataIntputStream

#### Ficheros de texto
- FileWriter
- BufferedWriter
- FileReader
- BufferedReader

#### Ficheros aleatorios
- RandomAccessFile

## 2. Clases asocidas a ficheros

### 2.1 Clase File

- Ficheros y directorios.

- Podemos examinar y manipular archivos y directorios.

- Controlaremos excepciones en caso de que no exista el archivo.

- Con un objeto de la clase File podemos:
  - Renombrar archivos ``renameTo()``
  - Borrar archivo ``delete()``
  - Crear archivos temporales ``createTempFile()``
  - Establecer fecha y hora de modificación ``setLastModified()``
  - Crear un directorio ``mkdir`` o varios ``mkdirs`` (crea los superiores si no existen)
  - Listar contenido directorio ``list`` (=> String) ``listFiles`` (=> objetos ``File``)
  - Listar nombre archivos en raíz ``listRoots``

**Ejemplo**

````java
new File("prueba.txt").setLastModified(new Date().getTime());
````

**Fich01aListarArchivos**
````java
String carpete="C:/Windows";

File ruta = new File(carpeta);
if(ruta.exists()) {
  String[] listaArchivos = ruta.list();
  for(int i=0; i<listaArchivos.length; i++){
    System.out.println(listarArchivos[i]);
  }
}  
````
- **Path canónico** es la ruta más óptima posible, junto con la absoluta y relativa.

### 2.2 Interfaz FilenameFilter

- Se usa para ver archivos que coinciden con un determinado criterio:
  - Ficheros modificados después de una fecha.
  - Ficheros con un tamaño mayor a x.

- Podemos con ``FilenameFilter`` hacer filtros relativo al nombre de los ficheros.
- Debemos implementar el método en la clase que usen la interfaz.

````java
boolean accept(File dir, String nombre)
````
- Este método devuelve un ``true`` en caso de que coincida.

**E - Listamos ficheros con extensión ``.exe`` con ``try-catch`` para excepciones**

**Fich01bFiltrar**
````java
public class B0ejer02Filtrar implements FilenameFilter {
  String extension;
  B0ejer02Filtrar(String extension){
    this.extension = extension;
  }
  public boolean accept(File dir, String name){
    return name.endsWith(extension);
  }
  public static void main(String[] args) {
    try {
      File fichero=new File("C:/windows/.");
      String[] listadeArchivos = fichero.list();
      listadeArchivos = fichero.list(new FichFiltrar(".exe"));
````
MIRAR EJEMPLO COMPLETO

### 2.3 Rutas de los ficheros

- El caracter separador puede variar dependiendo del sistema operativo.
- Usaremos ``File.separator`` o ``/``.
- Las rutas serán relativas.

### 2.4 Creación y eliminación de ficheros y directorios

**Fich02Fich1 - Crear fichero**
````java
try {
  File fichero = new File("./datos/miFichero.txt");

  if (fichero.createNewFile())
    System.out.println("El fichero se ha creado correctamente");
  else
    System.out.println("No ha podido ser creado el fichero");

} catch (Exception e) {
  e.getMessage();
}
````



**Fich02Fich2 - Borrar fichero**
````java
File fichero = new File("./datos/miFichero.txt");
if (fichero.exists()) {
  fichero.delete();
}
````

**Fich02Dir1 - Crear directorios**

````java
try {
  boolean exito;
  String directorio = "./datos";
  String varios = "./datos/carpeta1/carpeta2/carpeta3";

  File dir = new File(directorio);

  if (!dir.exists()) {
    exito = (new File(directorio)).mkdir(); //Un directorio
    if (existo) {
      System.out.println("Directorios: " + directorio + " creado");
    }
  }

  if (dir.exists()) {
    existo = (new File(varios)).mkdirs(); //Varios directorios
    if (exito) {
      System.out.println("Directorios: " + varios + " creados");
    }
  }
 } catch (Exception e){
   System.err.println("Error: " + e.getMessage());
}
````
**Fich02Dir2 - Recorrer directorio**

````java
try {
  File dir = new File("./datos");
  File[] ficheros = dir.listFiles();

  for (File file : ficheros) {
    System.out.println(file.getName());
  }
} catch (Exception e){
  System.err.println("Error: " + e.getMessage());
}
````
- Para saber si es un directorio usaremos ``isDirectory()``.
- Para borrar un directorio deben borrarse todos los ficheros y directorios que contenga.

**Fich02Dir3**

````java
public class Fich02Dir3 {
  public static void main(String[] args) {

    // Crear carpetas y ficheros temporales
    File dirtmp = new File("datos/tmp/files");
    File fichtmp;

    try {
        dirtmp.mkdirs();
        fichtmp = new File("datos/tmp/files/fichero1.txt");
        fichtmp.createNewFile();
        fichtmp = new File("datos/tmp/files/fichero2.txt");
        fichtmp.createNewFile();
    } catch (IOException e) {
        System.out.println(e.getMessage());
    }

    // Mostrar carpetas y ficheros temporales
    File dir = new File("datos/tmp");
    System.out.println("------------------------------------");
    listDir(dir);

    // Eliminar carpetas y ficheros temporales
    System.out.println("------------------------------------");
    delDir(dir);
    listDir(dir);
  }

  private static void listDir(File dir) {
     File[] ficheros = dir.listFiles();
      for (File file : ficheros) {
          System.out.println(file.getAbsolutePath()+"\\"+file.getName());
          if (file.isDirectory()) {
              listDir(file);
          }
      }
  }

  private static void delDir(File dir) {
      File[] ficheros = dir.listFiles();
      for (File file : ficheros) {
          if (file.isDirectory()) {
              delDir(file);
          }
          file.delete();
      }
    }
  }
````

## 3. Flujos

- Usados para hacer operaciones de E/S.

- Clases y métodos iguales en cualquier dispositivo.

- BOM (Byte Order Mark) indica la codificacion y los bytes que ocuapa, pueden ser:
   - **Unicode**
   - **UFT8**
   - **UTF16**

- ``java.io`` define dos tipos de flujos:
   - **Byte Stream (8 bits)** - Para lectura y escritura de bytes, clases ``InputStream`` ``OutputStream``,  y los métodos ``read()`` ``write()``.
   - **Character Streams (16 bits)** - Para lectura y escritura de caracteres, clases ``Reader`` ``Writer`` en Unicode,
   con métodos ``read()`` ``write()``.

## 4. Formas de acceso a un fichero

- Java puede usar dos tipos de **ficheros** (texto o binarios) y dos tipos de **acceso a ficheros** (secuencial o aleatorio).

- A veces puede encontrarse un tercero **concatenación** (tuberias o pipes).

   -**Acceso secuencial** - Lectura de datos de principio a fin del fichero, no se sabe cuando termina la escritura.
   -**Acceso aleatorio** - Lectura desordenada, el fichero debe estar siempre disponible.
   -**Concatenación** - Ejecución simultanea, usando "tubos" el emisor lo envía para el receptor que espera al final.

## 5. Ficheros de Texto

### 5.1 Ficheros de Texto - Escritura

- Aquellos que acaban en ``Writer`` o ``Reader`` son para gestionar texto.

- Es **obligatorio** usar ``try-catch`` para posibles errores.
  -``FileNotFoundException`` más específico.
  -``IOException`` más general.

**Fich03PrintWriter1a - Crear archivo .txt, escribir y cerrar**

````java
public class Fich03PrintWriter1a {
  public static void main(String[] args) {
    try {
      PrintWriter printWriter = new PrintWriter("./datos/ejemplo1a.txt");
      printWriter.println("Hola!");
      printWriter.close ();
      } catch (FileNotFoundException e) {
      e.printStackTrace();
    }
  }
}
````
- Alternativa menos elegante, pero más compacta útil para fuentes de pequeño tamaño usaremos ``throws``.

**Fich03PrintWriter1b - Lanzar excepción desde el ``Main``**
````java
public class Fich03PrintWriter1b {
  public static void main(String[] args) throws FileNotFoundException {
    PrintWriter printWriter = new PrintWriter ("./datos/ejemplo1b.txt");
    printWriter.println ("Hola!");
    printWriter.close ();
   }
 }
 ````
 - Para evitar errores y impedir cierre del fichero usaremos ``try-catch-finally``.

 - Cualquier error de E/S usaremos ``IOException``.

 - Usar ``import java.io.*`` en lugar de individuales.


 **Fich03PrintWriter2 - Interceptar errores y cierre de fichero**

 ````java
public class Fich03PrintWriter2 {
  public static void main(String[] args) {
    PrintWriter printWriter = null;
    try {
      printWriter = new PrintWriter("./datos/ejemplo2.txt");
      printWriter.println("Hola!");
      printWriter.println("y...");
      printWriter.println("hasta luego!");
     } catch (IOException e) { //Interceptar errores
      e.printStackTrace();
     } finally {
      if ( printWriter != null ) {
        printWriter.close(); // Asegurar cierre del fichero
      }
    }
  }
}
````
- El constructor habitual ``PrinterWriter`` destruye el contenido del fichero en caso de existir.

- Para añadir al final del fichero, se usa ``BufferedWritter`` que se apoya en ``FileWriter`` y ``true`` para añadir al final.

**Fich03PrintWriter3 - Añadir al final de un fichero**

````java
public class Fich03PrintWriter3 {
  public static void main(String[] args) {
    PrintWriter printWriter = null;
    try {
      printWriter = new PrintWriter(new BufferedWriter(
         new FileWriter("./datos/ejemplo3.txt", true))); // No sobrescribir
      printWriter.println("Hola otra vez!");
      printWriter.println("y...");
      printWriter.println("hasta luego!");
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      if ( printWriter != null ) {
        printWriter.close();
      }
    }
  }
}
````
- Se puede usar directamente un ``BufferedWriter`` para escribir sin tener que usar ``PrintWriter``.

- Es una clase de más bajo nivel, no incluye ``println``.

- Debemos usar ``write`` para escribir y ``newLine`` para salto de línea.

**Fich03BufferedWriter1 - Alternativa a ``PrinterWriter``**
````java
public class Fich03BufferedWriter1 {
  public static void main(String[] args) {
    BufferedWriter ficheroSalida = null;
    try {
      ficheroSalida = new BufferedWriter(
          new FileWriter(new File("./datos/ejemplo4.txt")));
      ficheroSalida.write("Línea 1");
      ficheroSalida.newLine();
      ficheroSalida.write("Línea 2");
      ficheroSalida.newLine();
    } catch (IOException e) {
    System.out.println("Ha habido problemas: " + e.getMessage() );
    } finally {
      try {
        if ( ficheroSalida != null ) {
          ficheroSalida.close();
          }
      } catch (IOException e) {
        System.out.println("Ha habido problemas: " + e.getMessage() );
      }
    }
  }
}
````
- Para evitar el ``finally`` es usar ``try-with-resources`` indicando que se cerrará al acabar el ``try``.

**Fich03BufferedWriter2 - Using para cerrra fichero**

````java
public class Fich03BufferedWriter2 {
  public static void main(String[] args) {
    try (BufferedWriter ficheroSalida = new BufferedWriter(
            new FileWriter(new File("./datos/ejemplo4.txt")))) {
      ficheroSalida.write("Línea 1");
      ficheroSalida.newLine();
      ficheroSalida.write("Línea 2");
      ficheroSalida.newLine();
   }  catch (IOException e) {
    System.out.println("Ha habido problemas: " + e.getMessage() );
   }
  }
 }
````
## 5.2 Ficheros de Texto - Lectura

- Para leer línea a línea usaremos ``BufferedReader``, se apoyará ``FileReader``.

- Tiene un método ``readLine`` que devuelve un String.

- Si ese String es null, significa que es el final del fichero.

- Habitual usar un ``while`` o ``do-while`` para leer el contenido del fichero.

**Fich04BufferedReader1 - Leer fichero**

````Java
import java.io.*;
public class Fich04BufferedReader1 {
  public static void main(String[] args) {

    // Primero vemos si el fichero existe
    if (! (new File("./datos/ejemplo3.txt")).exists() ) {
    System.out.println("No he encontrado ejemplo.txt");
    return;
    }

    // En caso de que exista, intentamos leer
    System.out.println("Leyendo fichero...");

    try (BufferedReader ficheroEntrada = new BufferedReader(
    new FileReader(new File("./datos/ejemplo3.txt")))) {

    String linea = null;

    linea = ficheroEntrada.readLine();
    while (linea != null) {
        System.out.println(linea);
        linea = ficheroEntrada.readLine();
      }

    } catch (IOException e) {
    System.out.println( "Ha habido problemas: " + e.getMessage() );
    }
    System.out.println("Fin de la lectura.");
  }
}
````

- Para hacerlo más compacto, pero menos legible lo ponemos en la misma orden.

````Java
String linea=null;
while ((linea=ficheroEntrada.readLine()) != null) {
  System.out.println(linea);
}
````

- Se podrá crear un clase Fichero con los métodos:
  * ``public static void MostrarFichero(String sFich)``
  * ``public static void Leer(String sFich)``
  * ``public static void ExisteFichero(String sFich)``

**Fich04BufferedReader2**

````Java
import java.io.*;

// Clase Fichero
public class Fichero {

  public static void MostrarFichero(String sFich) {
  ...
  }
  public static void Leer(String sFich) throws Exception {
  ...
  }
  public static boolean existeFichero(String sFich) throws Exception {
  ...
  }
}

// Programa Principal
public class Fich04BufferedReader2 {
  public static void main(String[] args) {

        System.out.println("LEER FICHERO");
        Fichero.MostrarFichero("./datos/ejemplo3.txt");
        System.out.println("");

        System.out.println("LEER FICHERO");
        Fichero.MostrarFichero("./datos/ejemplo-no-existe.txt");
        System.out.println("");
  }
}
````

## 5.3 Ficheros de Texto - Resumen

- Para los flujos de caracteres existen dos clases ``Reader`` y ``Writer``

    * Cuando se usan ``FileInputStream``, ``FileOutputStream``, ``FileReader``, ``FileWriter``, las lecturas y escrituras se hacen físicamente en el disco duro. En caso de leer o escribir pocos caracteres, es lento y costoso.

    * ``BufferedReader``, ``BufferedInputStream``, ``BufferedWriter``, ``BufferedOutputStream`` añaden un buffer intermedio, escribiendo hasta que haya bastantes datos para realizar una escritura eficiente. Más eficiente y rápido.

**Fich05EscribirTexto - Escribir en fichero y forzar escritura**

````Java
File archivo = new File ("./datos/archivotexto.txt");

// Apertura del fichero y creación de BufferedWriter
try ( FileWriter fw = new FileWriter (archivo, false);
      BufferedWriter bw = new BufferedWriter(fw); ) {

    // Escritura en el fichero
    bw.write("Este es un fichero de texto");
    bw.newLine();
    bw.write("que contiene varias líneas\n");
    bw.write("y se crea con BufferedWriter.\n");

    // Forzamos la escritura en disco
    bw.flush();

} catch (Exception e) {
    System.out.println(e.getMessage());
}
````

- Para crear fichero y forzar la codificación en UTF8 usaremos ``FileOutputStream`` + ``OutputStreamWriter`` + ``BufferedWriter``.

- Con ``FileOutputStream`` indicaremos el fichero si sobreescribirá o añadirá el contenido.

**Fich05EscribirTextoUTF8 - Codificación y sobrescritura de un fichero**

````Java
File archivo = new File ("./datos/archivotextoUTF8.txt");

// Apertura del fichero y creación de BufferedWriter
try (BufferedWriter bw
    = new BufferedWriter(
        new OutputStreamWriter(
          new FileOutputStream(archivo, true), StandardCharsets.UTF_8)) ) {

    // Escritura en el fichero
    bw.write("Este es un fichero de texto");
    bw.newLine();
    bw.write("que contiene varias líneas\n");
    bw.write("y se crea con BufferedWriter.\n");

} catch (Exception e) {
System.out.println(e.getMessage());
}
````

**Fich05LeerTexto - Leer fichero**

````Java
File archivo = new File ("./datos/archivotexto.txt");

// Apertura del fichero y creacion de BufferedReader
try ( FileReader fr = new FileReader(archivo);
      BufferedReader br = new BufferedReader(fr);) {

    // Lectura del fichero
    String linea;
    while ( (linea=br.readLine()) != null) {
        System.out.println(linea);
    }

} catch (Exception e) {
    System.out.println(e.getMessage());
}
````

**Fich05LeerTextoUTF8 - Lectura forzada en UTF8**

````Java
File archivo = new File ("./datos/archivotexto.txt");

// Apertura del fichero y creación de BufferedReader
try (BufferedReader br
        = new BufferedReader(
            new InputStreamReader(
              new FileInputStream(archivo), StandardCharsets.UTF_8)) ) {

    // Lectura del fichero
    String linea;
    while ( (linea=br.==readLine==()) != null) {
       System.out.println(linea);
    }

} catch (Exception e) {
    System.out.println(e.getMessage());
}
````

- Hay ficheros de configuración que almacenan estructuras de datos en formato texto, son las propiedades.

- Java tiene una clase ``Properties`` que almacena en RAM la clave y valor, además de un método que graba la información en un fichero de texto.

**Fich06EscribirProperties - Escribir datos**

````Java

// Crear Fichero
Properties props = new Properties();
FileOutputStream fos = new FileOutputStream("./datos/usuario.properties");

// Almacenar datos
    // props.setProperty() es equivalente a properties.put()
props.setProperty("usuario", "juan");
props.setProperty("email", "juan@dominio.com");

// Escribir las propiedades en el fichero
props.store(fos, "Fichero de propiedades generado desde programa Java");

// Cerrar fichero
fos.close();
````

**Fich06LeerProperties - Leer datos**

````Java
// Preparar Variables
Properties properties = new Properties();
FileInputStream fis = new FileInputStream("./datos/usuario.properties");

  // Leer datos
  properties.load(fis);

  // Cerrar fichero
  fis.close();

  // Mostrar todas las propiedades
  System.out.println("Properties......: " + properties.toString());

  // Mostrar todas las claves
  System.out.println("Claves..........: " + properties.keySet());

  // Mostrar valor de una clave
  System.out.println("Valor de usuario: " +
  properties.getProperty("usuario"));

  // Recorrer todas las propiedades
  System.out.println("------------------");
  properties.forEach((k, v) -> {
  System.out.println("Clave: " + k);
  System.out.println("Valor: " + v);
  System.out.println("------------------");
});
````

# 6. Ficheros Binarios

## 6.1 Ficheros Binarios - escritura

- Para el tratamiento de los flujos de bytes hay dos clases abstractas que son ``InputStream`` y ``OutputStream``.

- Cuando guardan texto, realemente se guarda su representación en UTF-8.

- Las clases principales que heredan de ``OutputStream``, para la escritura de ficheros son:

  * ``FileOutputStream``
    * Escribe bytes en un fichero.
    * Si existe el fichero, se sobreescribirá.
    * Para añadir datos al final se usa ````Java FileOutputStream(String filePath, boolean true)````

  * ``ObjectOutputStream``
    * Convierte variables y objetos en vectores de bytes, que pueden ser escritos en un ``ObjectOutputStream``.

  * ``DataOutputStream``
    * Da formato a los tipos primitivos y objetos String
    * Generando un flujo que cualquier ``DataIntputStream`` pueda leerlos.
    * Todos los métodos empiezan por ``write``.

- Destacamos ``InputStream`` para lectura de ficheros:
  * ``FileInputStream`` lee bytes de un fichero.
  * ``ObjectInputStream`` convierte variables y objetos en vectores de bytes, que pueden ser leídos en un ``ObjectInputStream``.

**Fich07EscribirBinario - Escribir fichero binario con ``DataOutputStream``**

````Java
public class Fich07EscribirBinario {
  public static void main(String args[]) {
    String texto = "Esto es un texto para almacenarlo\n
    en el archivo binario.\n";
    String fileName = "./datos/datosbinarios.dat" ;
    try (
          // Se declara un objeto de tipo DataOutputStream
          FileOutputStream foStream = new FileOutputStream(fileName);
          DataOutputStream doStream = new DataOutputStream (foStream);
          ) {
      doStream.writeUTF(texto);
      doStream.writeInt(5);
    } catch (IOException e) {
      System.out.print(e.getMessage());
    }
  }
}
````
Pag 24
## 6.2 Ficheros Binarios - Lectura

- Un fichero binario puede contener cualquier cosa además de texto.

**Fich07LeerBinario**

````Java
public class Fich08LeerBinario {
  public static void main(String args[]) {
    String texto;
    int entero;

    String fileName = "./datos/datosbinarios.dat" ;
    try (
          FileInputStream foStream = new FileInputStream(fileName);
          DataInputStream doStream = new DataInputStream (foStream);
          ) {

      texto = doStream.readUTF();
      entero = doStream.readInt();

      System.out.println("String: " + texto);
      System.out.println("Int: " + entero);

    } catch (IOException e) {
      System.out.print(e.getMessage());
    }
  }
}
````
- Se puede acceder  allos con un fichero ``FileInputStream`` y leer byte a byte con ``read()``

- El dato debe leerse como un ``int`` y un valor -1 indica el final del fichero.

**Fich08FileInputStream1 - Contar cantidad de letras a**

````Java
import java.io.*;

public class Fich08FileInputStream1 {
  public static void main(String[] args) {

  System.out.println("Contando \"a\"...");
  int contador = 0;

  try (
      FileInputStream ficheroEntrada = new FileInputStream(
      new File("./datos/fichero.bin"));
      ) {

  int dato = ficheroEntrada.read();
  while (dato != -1) {
    if (dato == 97) { // Codigo ASCII de "a"
    contador++;
  }
    dato = ficheroEntrada.read();
  }

  } catch (Exception e) {
    System.out.println( "Ha habido problemas: " + e.getMessage() );
  }
  System.out.println("Cantidad de \"a\": " + contador);
  }
}
````
**Fich08FileInputStream2 - Abreviar la lectura y la comprobación**

````Java
...
  int dato;
  while ((dato = ficheroEntrada.read()) != -1) {
    if (dato == 97) { // Codigo ASCII de "a"
      contador++;
    }
  }
...
````
## 6.3 Ficheros Binarios – Lectura y escritura por bloques

- Si hay muchos datos acceder byte a byte es muy lento.
- Un array de bytes es más eficiente
- Se usará un ``InputStream`` y su método ``read`` para indicar en que array se desea guardar los datos, la posición (default 0) y la cantidad de datos.

**Fich09FicheroBinarioBloques - Leer cada bloque de 512 Kb**

````Java
import java.io.*;

public class Fich09FicheroBinarioBloques {
  public static void main(String[] args) {
    File fichIn = new File("./datos/fichero.in");
    File fichOut = new File("./datos/fichero.out");

    System.out.println("Copiando fichero binario...");
    final int BUFFER_SIZE = 512*1024;

    try (
          InputStream ficheroEntrada = new FileInputStream( fichIn );
          OutputStream ficheroSalida = new FileOutputStream( fichOut );
          ) {
      byte[] buf = new byte[BUFFER_SIZE];
      int cantidadLeida;
      while ((cantidadLeida = ficheroEntrada.read(buf, 0, BUFFER_SIZE)) > 0) {
        ficheroSalida.write(buf, 0, cantidadLeida);
}

  } catch (Exception errorDeFichero) {
    System.out.println( "Ha habido problemas: " + errorDeFichero.getMessage() );
  }
  System.out.println("Terminado!");
  }
}
````

# 7. Acceso secuencial

- Como operaciones más comunes tenemos:
  * Crear un fichero o abrirlo para grabar datos.
  * Leer datos del fichero.
  * Borrar información de un fichero.
  * Copiar datos de un fichero a otro.
  * Búsqueda de información en un fichero.
  * Cerrar un fichero.

**Fich10EscribirSecuencial - Crea fichero si no existe o añade datos si existe**

````Java
String strFichero = "./datos/secuencial.dat";
int edad = 32;

// Abir, capturar y grabar datos
try (DataOutputStream archivo
          = new DataOutputStream(new FileOutputStream(strFichero, false))) {

    // Escribir nombre, apellidos y edad
    archivo.writeUTF("Juan");
    archivo.writeUTF("Sánchez");
    archivo.writeInt(edad);

    archivo.writeUTF("Pedro");
    archivo.writeUTF("Gómez");
    archivo.writeInt(35);

    archivo.writeUTF("Ana");
    archivo.writeUTF("Pérez");
    archivo.writeInt(27);

    System.out.println(strFichero + " creado.");
} catch ...
...
}
````
- Para introducir argumentos en **NetBeans** debemos de:
  * Seleccionar **Run** en los ajustes.
  * Dentro de **arguments** ponemos los argumentos separados por espacios.

**Fich11CopiarFichero - Usar fichero para escritura de bytes**

````Java
public static void main(String args[]) {
  String strfuente = "./datos/datosbinarios.dat";
  String strdestino= "./datos/datosbinarioscopia.dat";

  if (args.length>=2) {
    strfuente = args[0];
    strdestino = args[1];
  }
  try (
    // El fichero fuente es el primer parámetro
    FileInputStream fuente = new FileInputStream(strfuente);
    // El fichero destino es el segundo parámetro.
    FileOutputStream destino = new FileOutputStream(strdestino, false);
    ) {

    // Leer del fuente hasta llegar la fin de archivo
    int i = fuente.read();
    while (i != -1) { // mientras not EOF
    destino.write(i);
    i = fuente.read();
    }
  } catch ...
  ...
  }
}
````
- Para mejorar la eficiencia de la aplicación reduciendo el nº de accesos a
los dispositivos de salida donde está el fichero, montamos un buffer
asociado al flujo de tipo ``FileOutputStream``.
- ``BufferedOutputStream``, permite que la aplicación pueda escribir bytes
en el flujo sin que tener que llamar al SO para cada byte escrito.
- Cuando se trabaja con ficheros de texto se recomienda usar ``Reader``, para
entrada o lectura de caracteres, y ``Writer`` para salida o escritura de caracteres.
- Estas clases están optimizan trabajar con caracteres y texto en general,
tienen en cuenta que cada carácter Unicode está representado por dos
bytes.

- Las subclases de ``Writer`` y ``Reader`` que permiten trabajar con ficheros de texto son:
  * ``FileReader``, lectura desde un fichero de texto. Crea un flujo de entrada
  que trabaja con caracteres en vez de con bytes.
  * ``FileWriter``, escritura hacia un fichero de texto. Crea un flujo de salida que
  trabaja con caracteres en vez de con bytes.
- También se puede montar un buffer sobre cualquiera de los flujos que definen estas
clases:
  * ``BufferedWriter`` se usa para montar un buffer sobre un flujo de salida de tipo
``FileWriter``.
  * ``BufferedReader`` se usa para montar un buffer sobre un flujo de entrada de tipo
``FileReader``.

**Fich12LeerSecuencial - Lectura fichero secuencial**

````java
String nombre = "" ;
String apellidos = "" ;
int edad = 0 ;

try (DataInputStream archivo
= new DataInputStream(new FileInputStream("./datos/secuencial.dat"))) {

    // Leer archivo
    while ( archivo.available()>0 ){

      nombre    = archivo.readUTF();
      apellidos = archivo.readUTF();
      edad      = archivo.readInt();

      System.out.println("------------------------------");
      System.out.println("Nombre: "+nombre);
      System.out.println("Apellidos: "+apellidos);
      System.out.println("Edad: "+edad);
    }
    System.out.println("------------------------------");
} catch ...
...
}
````

### Operaciones básicas sobre ficheros de acceso secuencial

**Fich13LeerConBuffer - Lectura fichero txt usando ``BufferReader``**

````java
String texto = "";

try (
      FileReader fichero = new FileReader("./datos/archivotexto.txt");
      BufferedReader buffer = new BufferedReader(fichero);
      ) {
// Leemos el texto usando el metodo readLine()
  while ((texto = buffer.readLine()) != null) {
    System.out.println(texto);
    }
} catch ...
...
}
````

**Fich14BuscarSecuencial **

````java
boolean encontrado = false ;
String nombre;
String apellidos;
int edad;

String busqueda = "Pedro" ;

try (DataInputStream archivo
      = new DataInputStream(new FileInputStream("./datos/secuencial.dat"))) {

    // Leer archivo
    while ( (!encontrado) && (archivo.available()>0) ){

      // Leer el nombre
      nombre = archivo.readUTF();

      // Si el nombre es el que buscamos
      if (busqueda.equals(nombre)) {
        encontrado = true ;
        System.out.println("Registro Encontrado!!");

        // Leer los otros campos
        apellidos = archivo.readUTF();
        edad = archivo.readInt();
        System.out.println("Nombre: " + nombre);
        System.out.println("Apellidos: " + apellidos);
        System.out.println("Edad: " + edad);
    } else {
        // Leer los otros campos
        apellidos = archivo.readUTF();
        edad = archivo.readInt();
      }
    }
    if (!encontrado) {
        System.out.println("Registro NO Encontrado!!");
  }
} catch ...
...
}
````
# 8. Acceso aleatorio

- Cuando necesitamos acceder al fichero como si fuera una BD, saltando de registro, usamos ``RandomAccessFile`` para la entrada/salida.
  * Permite:
    * Permite leer y escribir sobre el fichero, no es necesario dos clases diferentes.
    * Necesita especificación al modo de acceso, al construir un objeto de
    esta clase: sólo lectura o bien lectura y escritura.
    * Posee métodos específicos de desplazamiento como ``seek(long posicion)`` o
    ``skipBytes(int desplazamiento)`` para poder movernos de un registro a otro o una posición concreta.

- Se necesita conocer su tamaño de antemano.

- Posee dos constructores:
  * ``RandomAccessFile(File file, String mode)``
  * ``RandomAccessFile(String name, String mode)``

- El modo  "r" si se abre en modo lectura o "rw" si se
  abre en modo lectura y escritura.


**Fich15EscribirAleatorio - Como abrir y escribir en un fichero de acceso aleatorio**

````Java
try ( RandomAccessFile miRandomFile
          = new RandomAccessFile( "./datos/aleatorio.bin", "rw" ) ) {

    // Nos vamos al final del fichero
    miRandomFile.seek( miRandomFile.length() );

    // Incorporamos la cadena al fichero
    String texto = "Cadena a escribir\n";
    miRandomFile.writeBytes(texto);
} catch ...
...
}
````
