      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */

        let B1 = document.getElementById('btn_mayusculas');

        function Min(e){
          e.preventDefault();
          var Nam = document.getElementById('txt_may').value.split(',');
          for (var i=0; i < Nam.length; i++) {
            console.log(Nam[i] = Nam[i].toLowerCase());
          } 
          document.getElementById('txt_may').value = Nam;
         }
        
         B1.addEventListener("click",Min);    
  
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
     */
      
       let B2 = document.getElementById('btn_añoshumano');

       function calculateDogAge(e){
        e.preventDefault();
        var Age = document.getElementById('edad_humano').value;
        var Age = Age*7;
        document.getElementById('edad_perro').value = Age;
       }

       B2.addEventListener("click",calculateDogAge);

    /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

       let B3 = document.getElementById('btn_muestra');
 
        function C1 (e){
         e.preventDefault();
 
         var Pokemon
         function Pokemon (Nombre,Especie,Ataque,Defensa){
           this.Nombre = Nombre;
           this.Especie = Especie;
           this.Ataque = Ataque;
           this.Defensa = Defensa;
        }
 
         var Pok1 = new Pokemon('Charizard','Dragón',500,600);
         var Pok2 = new Pokemon('Squirtle','Agua',200,800);
 
        document.getElementById('nombre_poke1').value = Pok1.Nombre ;
        document.getElementById('especie_poke1').value =  Pok1.Especie;
        document.getElementById('ataque_poke1').value =  Pok1.Ataque;
        document.getElementById('defensa_poke1').value =  Pok1.Defensa;
 
 
        document.getElementById('nombre_poke2').value = Pok2.Nombre ;
        document.getElementById('especie_poke2').value =  Pok2.Especie;
        document.getElementById('ataque_poke2').value =  Pok2.Ataque;
        document.getElementById('defensa_poke2').value =  Pok2.Defensa;
 
        }
 
        B3.addEventListener("click",C1);