export const header =`<header class="encabezado">

<div class="contenedor1">
  <div id="logo1">
    <img src="./img/riot-game-blanco-logo.png" alt="logo-riot" id="logo-riot">
    <img src="./img/lol-logo-chibi.png" alt="logo-lol" id="logo-lol">
  </div>
  <div class="contenedor-responsive">
  <div id="logo2">
    <img src="./img/LoL-logo.png" alt="logo-LoL" id="logo-lol-mediano">
  </div> 
  </div>

  <div class="menu">
    <input type="checkbox" id="check__menu"> <!--al tener el mismo ID con FOR, le doy una misma funcion-->
    <label for="check__menu" id="label__menu">
        <i class="icon__menu"><img src="./icon/menu-2px.png" alt="menu" id="img-menu"></i>
      </label> <!--fas fa-bars i class + lo que ya tiene con espacio-->
    
    <nav <!class="nav1">
      <ul <!class="links">
        <li><a href="#">Eventos</a></li>
        <li><a href="#">Noticias</a>
            <ul class="submenu"> 
                <li><a href="#">Historias</a></li>
                <li><a href="#">Multimedia</a></li>
                <li><a href="#">Comunidad</a></li>
                <li><a href="#">Esports</a></li>
                <li><a href="#">Updates de LOL</a></li>
            </ul>
        </li>
        <li><a href="#">Campeones</a></li>
        <li><a href="#">Productos</a></li>
      </ul>
    </nav>
  </div>

</div>
<div class="contenedor2"> 

  <nav class="nav2"> 

    <div class="contenedor-busqueda">
      <div class="buscador">

        <form>
          <input type="search" placeholder="Buscar...">
          <button type="button" id="search"><img src="./icon/search.png" alt="lupa" class="search"></button>
        </form>

      </div>
    </div>

    <ul class="sesion"> 
      <li><a href="#"><img src="./icon/iniciodesesion-2px.png" class="inicio-sesion" alt="icon">Inicio de sesion</a></li>
    </ul>

  </nav> 

    </div> 

</header>`

/*export const footer = `<footer> 

<nav class="navfooter"> 

  <ul class="redessociales"> 

    <li><a href="#"></a><img src="./icon/instagram.png" alt="instagram"></li> 
    <li><a href="#"></a><img src="./icon/youtube.png" alt="youtube"></li> 
    <li><a href="#"></a><img src="./icon/facebook.png" alt="facebook"></li> 
    <li><a href="#"></a><img src="./icon/gorjeo.png" alt="">gorjeo</li> 
    <li><a href="#"></a><img src="./icon/discord.png" alt="discord"></li> 

  </ul> 


  <div class="logo-riot2"> 

    <img src="./img/riot-game-blanco-logo.png" alt="logo-riot" id="logo-riot2"> 

  </div> 

</nav> 

 
 

</footer>`*/
