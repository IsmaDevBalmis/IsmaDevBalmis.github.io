# Kotlin CheatSheet

* [Volver a asignaturas](../../index.html)
* [Volver a temas](./index_pmdm.html)



# Indice

- [**Lanzar Actividad**](#lanzar-actividad)
- [**Poner orientación automatica**](#poner-orientaci-n-automatica)
- [**Pedir Permisos**](#pedir-permisos)
- [**Añadir Icono**](#a-adir-icono)
- [**Cambiar Color Icono App**](#cambiar-color-icono-app)
- [**Cambiar Icono App**](#cambiar-icono-app)
- [**Tipos de Layouts**](#tipos-de-layouts)
  * [FrameLayout](#framelayout)
  * [LinearLayout 01](#linearlayout-01)
  * [LinearLayout 02](#linearlayout-02)
  * [LinearLayout 03](#linearlayout-03)
  * [CardView](#cardview)
- [**Botones**](#botones)
- [**Cambiar de Actividades**](#cambiar-de-actividades)
- [**Parcelable**](#parcelable)



# Lanzar Actividad

- Archivo **MainActivity.kt**

```kotlin
   class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //Ponemos la actividad que queremos lanzar
        setContentView(R.layout.activity_main)
    }
}
```

# Cambiar nombre de Toolbox

- **AndroidManifest.xml**

````xml
android:label="Nombre que deseamos"
````

# Cambiar Color

- **activity_main.xml**

````xml
android:backgroundTint="#848C93"
````

# Añadir y usar forma

- **rounded_back.xml** -> Carpeta Drawable
````xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="oval">
    <solid android:color="#ea0d0d"/>
    <size android:height="20dp"
        android:width="20dp"/>
</shape>
````

- **activity_main.xml**
````xml
android:background="@drawable/rounded_back"
````


# Poner orientación automatica

- Para realizarlo debemos de poner primero en el archivo **MainActivity.kt:**

```Kotlin
   setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
```
- Después dentro del archivo **AndroidManifest.xml**

```Kotlin
   android:configChanges="orientation"
   android:screenOrientation="landscape"
```

# Pedir Permisos

- En el archivo de **MainActivity.kt:**

```Kotlin
   class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        solicitarPermisos()
    }
    //Identificamos los permisos que serán pedidos
    val RESPUESTA_PERMISOS = 111

    fun solicitarPermisos() {
        if (checkSelfPermission(READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_DENIED
            || checkSelfPermission(READ_CONTACTS) == PackageManager.PERMISSION_DENIED
        ) {
            if (shouldShowRequestPermissionRationale(READ_EXTERNAL_STORAGE)) {
                //Si se decide explicar los motivos de los permisos
                // con algo similar a un dialogo
            }
            if (shouldShowRequestPermissionRationale(READ_CONTACTS)) {
                //Si se decide explicar los motivos de los permisos
                // con algo similar a un dialogo
            }
            //Con requestPermissions se pide al usuario que permita los permisos,
            //en este caso dos
            requestPermissions(
                arrayOf(READ_EXTERNAL_STORAGE, READ_CONTACTS),
                RESPUESTA_PERMISOS
            )
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when {
            RESPUESTA_PERMISOS == requestCode && grantResults.isNotEmpty() -> {
                for (i in 0..permissions.size - 1) {
                    if (grantResults[i] == PackageManager.PERMISSION_GRANTED)
                        //Toast que nos saldrá al conceder el permiso
                        Toast.makeText(
                            applicationContext, "Permiso Concedido " +
                                    permissions[i], Toast.LENGTH_SHORT
                        //Muestra el toast
                        ).show()
                }
            }
        }
    }
}
```
- En el archivo **AndroidManifest.xml:**

```Kotlin
   <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
   <uses-permission android:name="android.permission.READ_CONTACTS" />
```

# Añadir Icono

# Cambiar Color Icono App

# Cambiar Icono App

# Tipos de Layouts

## FrameLayout

Archivo **frame_layout.xml**

```Kotlin
   <FrameLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="300dp"
    android:layout_height="match_parent">

       <TextView
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:background="#FD000F"
           android:textSize="80dp"
           android:layout_gravity="bottom"
           android:text="Hola" />

       <Button
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:text="Adios" />
   </FrameLayout>
```

## LinearLayout 01

Archivo **linear_layout.xml**

```Kotlin
  <LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

       <TextView
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:background="#5D9ED3"
           android:textSize="30dp"
           android:text="Hola" />

       <Button
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:text="Adios" />

   </LinearLayout>
```
## LinearLayout 02

Archivo **linear_layout.xml**

```Kotlin
    <LinearLayout
       xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:orientation="vertical">

       <TextView
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:background="#5D9ED3"
           android:textSize="30dp"
           android:text="Hola" />

       <Button
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:text="Adios" />

       <LinearLayout
           xmlns:android="http://schemas.android.com/apk/res/android"
           android:layout_width="wrap_content"
           android:layout_height="match_parent"
           android:orientation="horizontal">

           <TextView
               android:layout_width="match_parent"
               android:layout_height="wrap_content"
               android:background="#5D9ED3"
               android:textSize="30dp"
               android:text="Hola" />

           <Button
               android:layout_width="wrap_content"
               android:layout_height="wrap_content"
               android:text="Adios" />

       </LinearLayout>
```

## LinearLayout 03

Archivo **linear_layout.xml**

```Kotlin
  <LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

       <Button
           android:layout_weight="10"
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:backgroundTint="#451234"
           android:text="Hola" />

       <Button
           android:layout_weight="10"
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:backgroundTint="#B58F1E"
           android:text="Adios" />

   </LinearLayout>
```

## CardView

Archivo **cardview_layout.xml**

```kotlin
   <androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android"
       xmlns:app="http://schemas.android.com/apk/res-auto"
       android:layout_width="300dp"
       android:layout_height="300dp"
       android:layout_gravity="center"
       app:cardCornerRadius="40dp"
       app:cardElevation="20dp">

       <ImageView
           android:layout_width="match_parent"
           android:layout_height="match_parent"
           android:src="@mipmap/fondo" />

       <TextView
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:layout_gravity="bottom|right"
           android:text="Imagen"
           android:textColor="@color/purple_500"
           android:textSize="40dp"
           />
   </androidx.cardview.widget.CardView>
```



## Botones

## Cambiar de Actividades

## Parcelable

- 10 veces más rápido que Serializable.
- Es una interfaz.
- Necesidad de crear clase **POJO** que derive de ``Interfaz Parcelable``.
- Ejemplo con dos activitys
   - 1ª Introducir datos de un contacto
   - Al pulsar botón **Enviar**
   - 2ª Muestra los datos.

Clase Contacto
````kotlin
class Contacto() : Parcelable {
   var nombre: String?
   var telefono: String?
   var email: String?
   var foto: Bitmap?

//Constructor generado automáticamente
constructor(parcel: Parcel) : this() {
   nombre = parcel.readString()
   telefono = parcel.readString()
   email = parcel.readString()
   foto = parcel.readParcelable(Bitmap::class.java.classLoader)
}
init{
   this.nombre=""
   this.telefono=""
   this.email=""
   this.foto=null
 }
constructor(nombre: String?, telefono: String?,
            email: String?, foto: Bitmap?):this(){
   this.nombre = nombre
   this.telefono = telefono
   this.email = email
   this.foto = foto
}

//funciones generadas automáticamente
override fun describeContents(): Int {
   return 0
}

override fun writeToParcel(parcel: Parcel, flags: Int) {
   parcel.writeString(nombre)
   parcel.writeString(telefono)
   parcel.writeString(email)
   parcel.writeParcelable(foto, flags)
   }

//Clase creada automáticamente. Un companion object es la forma que tienen Kotlin
//de definir miembros staticos dentro de una clase, todos los elementos
//de este object serán static
companion object CREATOR : Creator<Contacto> {
   override fun createFromParcel(parcel: Parcel): Contacto {
      return Contacto(parcel)
}
   override fun newArray(size: Int): Array<Contacto?> {
      return arrayOfNulls(size)
   }
 }
}
````
Clase ``MainActivity`` inicia la 2ª activity enviando el objeto parcelado.

````kotlin
class MainActivity : AppCompatActivity()
{
   override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_main)
      val nombre = findViewById<TextView>(R.id.campo_nombre)
      val tlf = findViewById<TextView>(R.id.campo_tlf)
      val correo = findViewById<TextView>(R.id.campo_correo)
      val img = findViewById<ImageButton>(R.id.placeImage)
      val imagen = BitmapFactory.decodeResource(resources, R.drawable.noimagen)
      val button: Button = findViewById<Button>(R.id.boton)
      button.setOnClickListener {
            val c = Contacto(nombre.text.toString(), tlf.text.toString(),
                             correo.text.toString(), imagen)
            val intent = Intent(applicationContext, Activity2::class.java)
            intent.putExtra("CONTACTO", c)
            startActivity(intent)}
}}
````
En la Activity2 recuperamos el objeto



````kotlin
class Activity2: AppCompatActivity() {
   override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity2);
      //recuperar datos y visualizar
      val c = this.intent.getParcelableExtra<Contacto>("CONTACTO");
      val nombre = findViewById<TextView>(R.id.txt_nombre);
      val tlf = findViewById<TextView>(R.id.txt_tlf);
      val correo = findViewById<TextView>(R.id.txt_correo);
      val img = findViewById<ImageButton>(R.id.placeImage);
      if (c != null) {
         nombre.setText(c.nombre)
         tlf.setText(c.telefono)
         correo.setText(c.email)
         img.setImageBitmap(c.foto)}}
}
````
