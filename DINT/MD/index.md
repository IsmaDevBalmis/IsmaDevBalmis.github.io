# Tema 2 Introducción a WPF {#indice_pagina}


* [Volver a asignaturas](../../index.html)
* [Eventos](#eventos_id)



### Controles básicos

| Button | |
|--|--|
| **Propiedades** | **Eventos** | 
|Content|Click|
|ClickMode||
|IsDefault||
|IsCancel||
|IsEnabled||

---

| TextBox | |
|--|--|
| **Propiedades** | **Eventos** | 
|Text|TextChanged|
|AcceptsReturn||
|TextWrapping||
|IsReadOnly||

---

| Image | |
|--|--|
| **Propiedades** | **Eventos** | 
|Source||
|Stretch||

---

| CheckBox | |
|--|--|
| **Propiedades** | **Eventos** | 
|Content|Checked|
|IsChacked|Unchecked|
|IsThreeState|Indeterminate|

---

| RadioButton | |
|--|--|
| **Propiedades** | **Eventos** | 
|Content|Checked|
|IsChecked|Unchecked|
|GroupName||

---

| TextBlock | |
|--|--|
| **Propiedades** | **Eventos** | 
|Text||
|TextTrimming||
|TextWrapping||
|TextAligment||

---


### Eventos {#eventos_id}

[Ir al índice](#indice_pagina)

>
> Click = "Nombre del manejador de eventos"
>

```CSharp

    private void SaludarButton_Click(object sender, RoutedEventArgs e)
    {
        saludoTextBlock.Text = "Hola " + nombreTextBox.Text + "!";
    }

```

Tags
: La propiedad Tag permite asociar información al control. Es de tipo **Object**.
