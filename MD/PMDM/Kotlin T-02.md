# TEORIA Kotlin



# T-02 Estructura de un proyecto Android Stuido

# Indice

- [**General**](#general)
- [**Recursos Alternativos En Android**](#recursos-alternativos-en-android)
- [**Layout**](#layout)
- [**Mipmap y Drawable**](#mipmap-y-drawable)
    + [Mipmap](#--mipmap--)
    + [Drawable](#--drawable--)
- [**Values**](#values)
- [**Añadir Idiomas extra - KT**](#utilidad-idiomas-extra---kt)
- [**Acceder a los Recursos en Android**](#acceder-a-los-recursos-en-android)
  * [Acceder desde Kotlin](#acceder-desde-kotlin)
  * [Acceder desde XML](#acceder-desde-xml)
- [**Android Manifest**](#android-manifest)
  * [Sintaxis](#sintaxis)
    + [Etiqueta aplicación](#etiqueta-aplicaci-n)
    + [Etiqueta activity](#etiqueta-activity)

## General
- Subdirectorio Android Studio:
   - **Drawable** - Recursos gráficos
   - **Mipmap** - Iconos aplicación
   - **Layout** - Interfaz usuario (XML)
   - **Menu** - Menús de interfaces (XML)
   - **Values** - Datos simples, enteros, strings, colores... (XML)

## Recursos Alternativos En Android

- Variación de recursos que se ajustan a una configuración del móvil donde se ejecuta la app.

- **Ejemplo**
   - **Mipmap-hdpi** - variación de ic_launcher.png.

##  Layout

- Archivo con las vistas de actividades o fragments.
- Archivo por defecto ``activity_main.xml``.
   - Diseño de interfaz de mi actividad principal.

- Por defecto ``<ConstraintLayout>``.

- Orden y secuencia de los widgets de la actividad.

- Varios tipos:
   - ``LinearLayout``
   - ``GridLayout``
   - ``FrameLayout``
   - ``ConstraintLayout``

## Mipmap y Drawable

#### Mipmap
- Relacionadas con el tipo de densidad de pantalla donde se ejecutará la aplicación.

- La mayoria de los móviles tienen 4 densidades:
   - **Mediun Dots per Inch (mdpi)** 160 ppi.
   - **High Dot per Inch (hdpi)** 240 ppi.
   - **Extra high dots per inch (xhdpi)** > 340 ppi.
   - **Extra Extra high dots per inch (xxhdpi)** > 480 ppi.
   - **Extra Extra Extra high dots per inch (xxxhdpi)** > 640 ppi.

- Icono adapatativo en ``mipmap-anydpi-v26`` (desde **SDK 26**), ficheros ``.xml`` que se adaptan al dispositivo.

#### Drawable
- Para colocar imágenes que se vayan a usar en la app.
- Mismo esquema de sufijos que **mipmap**.

## Values

- Se crean por defecto:

- ``colors.xml``
   - Los elementos se declaran usando la etiqueta ``color``.
   - Atributo ``name`` como identificador.
   - El color debe ir en #hexadecimal.
   - Paleta de colores disponible a la izquierda.
- ``strings.xml``
   - Uno de los recursos más relevantes.
   - Almacena todas las cadenas que se muestran en los widgets (controles, formas, botones, vistas...) de las actividades.
   - Los elementos se declaran usando la etiqueta ``string``.
   - Atributo ``name`` como identificador.
   - Dentro de esa etiqueta irá ``<string name="app_name">My Application</string>``.
   - Se recomienda añadir cadenas de botones u otros elemntos a este archivo.

## Utilidad Idiomas extra - KT

   - Facilita el uso de múltiples idiomas ``new`` -> ``Android Resources File`` -> ``Value``.
   - A cada uno le añadiremos dentro de ``values-en``.
   ````xml
   <resources>
      <string name="app_name">My Application</String>
      <string name="hola_mundo">Hello World!</String>
   ````
   - Debemos asociar la cadena al ``TextView`` del layout principal en ``activity_main.xml``
   - Ponemos en el atributo ``text`` el recurso ``@string/hola_mundo``.
   - El texto cambiará dependiendo del idioma del dispositivo.
- ``themes.xml``

## Acceder a los Recursos en Android

- Se necesita un identificador para acceder a los recursos.
- Los identificadores se ubican en la clase ``R``.
- No recomendable editar manualmente la clase.
- Cada tipo de recurso está en la carpeta ``res`` y en la clase ``R.class``.

### Acceder desde Kotlin

-Usaremos **Paquete.R.tipoRecurso.nombreRecurso**.
- ``drawable`` -> ``R.drawable``.
- ``ic_launcher_background`` -> ``R.drawable.ic_launcher_background``.
- Para acceder a la clase ``Resources``
   - ```` kotlin val color=resources.getColor(android.R.color.holo_blue_bright, theme)````

### Acceder desde XML

- Usamos la sintaxis **@[Paquete:]tipoRecurso/nombreRecurso**
-**Ejemplo**
   - ````xml android:text="@string/hola_mundo" ````
- Recursos del sistema sería **@android:tipoRecurso/nombreRecurso**.

## Android Manifest

- Archivo de mayor importancia.
- Es un ``XML``.
- Características de la app
   - Versión SDK
   - Permisos  
   - Servicios
   - Activitys
 - Muestra descripción de nuestra aplicación.

 ### Sintaxis

 - Nodo raíz ``<manifest>`` y hijo ``application``.
 - Dos atributos
   - ``xmlsn:android`` No deberemos cambiarlo nunca, es el namespace del archivo.
   - ``package`` Indica nombre paquete que soporta la app, el nombre debe ser único y diferenciador.
 - ``application`` representa como está construida la aplicación
   - Actividades
   - Librerías
   - Intents
   - Providers

 #### Etiqueta aplicación

 - Atributos
   - **allowBackup** - Si la app mantiene su estado al cerrar el **AVD**.
   - **icon** - Ubicación del icono, carpetas ``mipmap`` -> ``ic_launcher.png``.
   - **label** - Nombre de la app ``strings.xml`` -> ``app_name``.
   - **theme** - Personalización del estilo visual de la app ``styles.xml``
   - **supportsRtl** - Si la app admite diseñor de derecha a izquierda. (SDK > 17)

  #### Etiqueta activity

 - Cada etiqueta representa una actividad en la app.
 - Atributos
   -  **label** - Texto cabecera actividad
   -  **android:name** - Nombre de la actividad.
   -  **android:screenOrientation** - Define orientación de la app, cuando hay cambio de orientación se destruye la actividad.
   -  **android:configChanges** - Indicar que los eventos (orientción & teclado), no destruirán la actividad.

- ``<intent-filter>`` + ``<action>`` Indica que queremos que la activity va a ser un punto de entrada para nuestra app.
- Decir ante que intent va a reaccionar.
- Solo puede reaccionar una activity.
- ``<category>`` Añadimos la actividad al lanzador de la app.
- Sin ``<intent-filter>`` no podemos lanzar la app desde dentro.
