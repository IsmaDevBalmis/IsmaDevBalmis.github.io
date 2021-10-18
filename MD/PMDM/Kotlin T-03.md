
# T3 - Componentes de una aplicación Android

- El contexto es una interfaz entre la aplicación y el OS, que describe información que representa la aplicación .
- Permite acceder a los recursos de la aplicación y coordinar el funcionamiento de los bloques de la app.
- Lo implementamos a tráves de lac aclase abstracta ``Context``.
- En Android hay dos tipos de contextos:
   - **Aplicación** - Engloba a todos los demás.
   - Cubre todo el ciclo de vida de la app desde que se inicia hasta que muere.
   - Cada app tiene un contexto único de app.
   - Accesible desde desde una Activity o Service con ``application`` o cualquiera que herede Context con ``applicationContext`.
   -**Activity o Service**
