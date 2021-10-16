# Apuntes AD - Tema 02 Parte 2

* [Volver a asignaturas](../../index.html)
* [Volver a temas](./index_ad.html)


## Indice
- [**9. Serialización**](#9-serializaci-n)
- [**10. Java.io**](#10-javaio)
- [**11. Ficheros CSV**](#11-ficheros-csv)
    + [Separadores](#separadores)
  * [11.1.- CSV desde Java](#111--csv-desde-java)
  * [11.2.- Crear CSV desde Java](#112--crear-csv-desde-java)
  * [11.3.- Leer CSV desde Java](#113--leer-csv-desde-java)
  * [11.4.- Escribir CSV con Array](#114--escribir-csv-con-array)

## 9. Serialización

- Guardar un objeto en un fichero.

- La clase que implemente la interfaz ``Serializable`` debe tener:
  * Constructor vacío
  * Constructor completo
  * Métodos getters y setters
  * Método toString (reescrito para nuestra clase)

**Fich17Serializacion -> Ciudad.java**

````java
import java.io.Serializable;
public class Ciudad implements Serializable {
  private String codigo;
  private String nombre;

  // Constructores
  public Ciudad() {
  }

  public Ciudad(String codigo, String nombre) {
    this.codigo = codigo;
    this.nombre = nombre;
  }
  // getters y setters
  public String getCodigo() {
    return codigo;
  }
  public void setCodigo(String codigo) {
    this.codigo = codigo;
  }
  public String getNombre() {
    return nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  // toString
  @Override
  public String toString() {
    return codigo + ": " + nombre;
  }
}
````

- Los ficheros deberán ser de tipo ``ObjectOutputStream`` y
``ObjectInputStream``.
- Para escribir usamos ``writeObject()`` de la clase ``ObjectOutputStream``.
- En el caso de leer ``readObject()`` de la clase ``ObjectInputStream`` y lanzando la excepción
``ClassNotFoundException``.

**Fich17Serializacion -> Serializar.java**

````java
import java.io.*;

public class Serializar {
  public static void main(String[] args) {
    Ciudad c;
    // Escribir - Serializar
    File fichero1 = new File("./datos/ciudades.dat");
    try (
        FileOutputStream ficheroSalida = new FileOutputStream(fichero1);
        ObjectOutputStream ficheroObjetosOut = new ObjectOutputStream(ficheroSalida);
      ) {
      c = new Ciudad("A", "Alicante");
      ficheroObjetosOut.writeObject(c);

      c = new Ciudad("Gr", "Granada");
      ficheroObjetosOut.writeObject(c);
  } catch ...
  ...
}
// Leer - Desserializar
File fichero2 = new File("./datos/ciudades.dat");
try (

    FileInputStream ficheroEntrada = new FileInputStream(fichero2);
    ObjectInputStream ficheroObjetosIn = new ObjectInputStream(ficheroEntrada);
    ) {
      while (ficheroEntrada.available() > 0) {
        c = (Ciudad) ficheroObjetosIn.readObject();
        System.out.println(c.toString()); // Serializar a String
  }
} catch ...
    ...
  }
}
````
- Al escribir en un fichero binario datos serializados, se escribe la información
de la estructura de los datos y luego los propios datos.

- Si lo abrimos para añadir y guardamos más datos, volverá a
escribir la estructura, dando un error al leer.

[]Imagen

- Evitar que se ejecute ``writeStreamHeader``.
- Solución:
    * Cargar en memoria todos los datos.
    * Modificarlos en memoria RAM.
    * Escribir de nuevo el fichero con los datos
resultantes.

**Ejemplo - Con la clase **Ciudad** grabar datos en fichero**.

````java
Ciudad c;
Ciudad nuevaCiudad = new Ciudad(cod, nombre);
ArrayList<Ciudad> listaCiudades = new ArrayList<>();
File fichero = new File("./datos/ciudades.dat");

// Leer datos actuales (De Fichero a RAM)
try (
    FileInputStream ficheroEntrada = new FileInputStream(fichero);
    ObjectInputStream ficheroObjetosIn = new ObjectInputStream(ficheroEntrada);) {
        while (ficheroEntrada.available() > 0) {
          c = (Ciudad) ficheroObjetosIn.readObject();
          listaCiudades.add(c);
        }
} catch (FileNotFoundException ex) {
        System.out.println(ex.getMessage());
} catch (IOException ex) {
        System.out.println(ex.getMessage());
} catch (ClassNotFoundException ex) {
        System.out.println(ex.getMessage());
}
// Añadir nueva persona (En RAM)
listaCiudades.add(nuevaCiudad);

// Escribir datos actuales (De RAM a Disco)
try (
    FileOutputStream ficheroSalida = new FileOutputStream(fichero);
    ObjectOutputStream ficheroObjetosOut = new ObjectOutputStream(ficheroSalida);) {
        for (Ciudad cd : listaCiudades) {
            ficheroObjetosOut.writeObject(cd);
        }
} catch (FileNotFoundException ex) {
      System.out.println(ex.getMessage());
} catch (IOException ex) {
      System.out.println(ex.getMessage());
}
````

**Fich18SerializacionCiudad**

Ejemplo de aplicación que serializa la clase Ciudad con 3 métodos:
  • inicializar()         → Crea un fichero con dos objetos
  • mostrar()             → Muestra los datos existentes en el fichero
  • addCiudad(String cod, String nombre)
                          → Lee los datos del fichero en un ArrayList
                          → Añade una nueva Ciudad al ArrayList
                          → Escribe el nuevo ArrayList en el fichero
````java
public class Ciudad implements Serializable {
  private String codigo;
  private String nombre;
  ...
````

**Fich19SerializacionPersona**

````java
public class Persona implements Serializable {
  private String nombre;
  private String email;
  int year;

// Leer datos actuales (De Fichero a RAM)
FileInputStream ficheroEntrada = new FileInputStream(fichero);
try {
    ObjectInputStream ficheroObjetosIn = new ObjectInputStream(ficheroEntrada);
    while (ficheroEntrada.available() > 0) {
        per = (Persona) ficheroObjetosIn.readObject();
        listaPer.add(per);
      }
} catch (EOFException e) {
    System.out.println("No hay registros en el archivo");
} finally {
    if (ficheroEntrada != null) {
    ficheroEntrada.close();
  }
}  

// Añadir nueva persona (En RAM)
per = (Persona) new Persona(nombre, email, year);
listaPer.add(per);

// Escribir datos actuales (De RAM a Disco)
FileOutputStream ficheroSalida = new FileOutputStream(fichero, false);
ObjectOutputStream ficheroObjetosOut = new ObjectOutputStream(ficheroSalida);
for (Persona p : listaPer) {
    ficheroObjetosOut.writeObject(p);
}

ficheroObjetosOut.close();
````

## 10. Java.io

- Son muchos, pero los que nosotros usamos son:
- **FileInputStream**
  * FileInputStream
  *ObjectInputStream
- **File**
- **RandomAccessFile**
- **OutputStream**
  * FileOutputStream
  * ObjectOutputStream
- **Reader**
  * BufferedReader
  *InputStreamReader
    * FileReader
- **Writer**
  * BufferedWriter
  * OutputStreamWriter
    * FileWriter
  * PrintWriter

## 11. Ficheros CSV

- Formato muy sencillo y no indica el juego de caracteres, donde se ubican los bytes, ni el formato para el salto de línea.
- Es un formato no estandarizado, el sepador de campos puede variar.
- Suele crearse un primer registro de cabeceras que indica el nombre de los campos.

#### Separadores

- Un separador muy utilizado es ``|``.
- Se suelen guardar datos que puedan representarse en tablas.
- Puede abrir y crear estos archivos desde las hojas de cálculo.

### 11.1.- CSV desde Java

- Para crear archivos usamos ``javacsv.jar``.
- Hay dos clases:
  * ``CsvReader``
  * ``CsvWriter``

### 11.2.- Crear CSV desde Java

**EjemploCSVWriter - Crear users.csv**

````java
public static void main(String[] args) {

String outputFile = "./datos/users.csv";

// Antes de abrir el fichero comprobamos si existe
boolean alreadyExists = new File(outputFile).exists();

try {
    CsvWriter csvOutput = new CsvWriter( new FileOutputStream(outputFile, true),
                      '|',
                      Charset.forName("UTF-8"));
    csvOutput.setDelimiter('|');        // No sería necesario porque ya se le ha indicado
    csvOutput.setRecordDelimiter('\n'); // Es el valor por defecto

// Si ya existe el fichero no se necesita escrbir las cabeceras
if (!alreadyExists) {
  csvOutput.write("id");
  csvOutput.write("name");
  csvOutput.endRecord();
}
// ELSE asume que como ya existe tiene las cabeceras

// Escribe unos registros
csvOutput.write("1");
csvOutput.write("Juan");
csvOutput.endRecord();

csvOutput.write("2");
csvOutput.write("Pedro");
csvOutput.endRecord();

csvOutput.write("3");
csvOutput.write("Inés");
csvOutput.endRecord();

csvOutput.close();

} catch (IOException e) {
  e.printStackTrace();
````

- Por defecto la codificación será **ISO-8859-1**.
- Para usar **UTF-8**
```java
// ******************************
// Para añadir indicando Charset
// ******************************
OutputStream fw = new FileOutputStream("./datos/users.csv", true);
CsvWriter csvOutput = new CsvWriter(fw, '|', Charset.forName("UTF-8"));
```

- Crear fichero csv

````java
// ******************************
// Para crear indicando Charset
// ******************************
CsvWriter csvOutput = new CsvWriter("./datos/users.csv",'|',Charset.forName("UTF-8"));
````

- Escribir desde un array ``String[]`` usando ``.writeRecord()``

````java
// *********************************
// Para escribir registros completos
// *********************************
String[] datos = new String[2];

datos[0]="1";
datos[1]="Juan";
csvWriter.writeRecord(datos);

datos[0]="2";
datos[1]="Pedro";
csvWriter.writeRecord(datos);

datos[0]="3";
datos[1]="Inés";
csvWriter.writeRecord(datos);
````

### 11.3.- Leer CSV desde Java

**EjemploCSVReader - Leer productos.csv**

````java
public static void main(String[] args) {
  try {
    CsvReader products = new CsvReader( "./datos/productos.csv",
                                        ',',
                                        StandardCharsets.UTF_8);
    products.setDelimiter('|');
    products.setRecordDelimiter('\n');

    products.readHeaders();

    while (products.readRecord()) {
      String proID = products.get("idpro"); //products.get(0)
      String proDescrip = products.get("descrip"); //products.get(1)
      String proPrecio = products.get("precio"); //products.get(2)
      System.out.println(proID + "|" + proDescrip + "|" + proPrecio);
  }
  products.close();

  } catch (FileNotFoundException e) {
    e.printStackTrace();
  } catch (IOException e) {
    e.printStackTrace();
  }
}
````

### 11.4.- Escribir CSV con Array

- ``CsvWriter`` permite la escritura desde un **Array** usando ``writeRecord()``.
- Simplifica la escritura.

**EjemploCSVWriterconArray**
````Java
public static void main(String[] args) {
  try {
    // Escritura en disco
    CsvWriter csvWriter = new CsvWriter(
    new FileOutputStream("./datos/users.csv", false),
                                          ',',
                                          StandardCharsets.UTF_8);
    csvWriter.setDelimiter(',');
    csvWriter.setRecordDelimiter('\n');
    //Forzar comillas dobles en campos con problemas en los nombres que tienen coma
    csvWriter.setForceQualifier(true);

    String[] datos = new String[2];

    // CABECERA
    datos[0] = "id";
    datos[1] = "nombre";
    csvWriter.writeRecord(datos);

    // DATOS
    datos[0] = "1";
    datos[1] = "José Luis";
    csvWriter.writeRecord(datos);

    datos[0] = "2";
    datos[1] = "Pedro";
    csvWriter.writeRecord(datos);

    datos[0] = "3";
    datos[1] = "Inés";
    csvWriter.writeRecord(datos);

    csvWriter.close();

    System.out.println("Fichero creado");

} catch (FileNotFoundException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
  }
}
````

**EjemploCSVWriterconArrayList**
````java
public static void main(String[] args) {
  try {
      // Datos en ArrayList de Java
      ArrayList<Producto> productos = new ArrayList();

      productos.add(new Producto(1, "productoA", 50));
      productos.add(new Producto(2, "productoB", 90));
      productos.add(new Producto(3, "productoC", 40));

      // Escritura en disco
      CsvWriter csvWriter = new CsvWriter(
      new FileOutputStream("./datos/productos.csv", false),
                                ',',
                                StandardCharsets.UTF_8);
      csvWriter.setDelimiter(',');
      csvWriter.setRecordDelimiter('\n');

      // CABECERA
      String[] cabecera = {"id","descrip","precio"};
      csvWriter.writeRecord(cabecera);

      // DATOS
      for (Producto producto : productos) {
          String[] datos = producto.getArray();
          csvWriter.writeRecord(datos);
      }
      csvWriter.close();

      System.out.println("Fichero creado");
} catch (FileNotFoundException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
  }
}
````
