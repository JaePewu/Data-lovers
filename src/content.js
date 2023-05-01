export const header =`<header class="encabezado">
<div class="contenedor1">
  <div id="logo1">
    <img src="./img/riot-game-blanco-logo.png" alt="logo-riot" id="logo-riot">
    <a href="#" id="logo-lol-link"><img src="./img/lol-logo-chibi.png" alt="logo-lol" id="logo-lol"> </a>
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
    
    <nav>
      <ul>
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

export const main = `<main>
      <img src="./img/primeros-campeones-LoL.jpg" alt="imagen-de-campeones" id="imagen-de-campeones">
      <div id="filtroYorden">
        <div id="container1">
      <label for="buscarCampeon"><img id="lupitaCampion" src="./icon/search.png" alt="icono-lupa"></label>
      <input type="search" id="buscarCampeon" placeholder="Buscar campeón...">
      <label for="ordenarPor">|</label>
        <select id="ordenarPor">
          <option value="ordenarPor">Ordenar por</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="ataque">Ataque</option>
            <option value="magia">Magia</option>
            <option value="defensa">Defensa</option>
        </select>
      </div>
      <div id="container2">
      <ul id="roles">
          <li id="todos"> Todos </li>
          <li class="role" id="asesinos">Asesinos</li>
          <li class="role" id="luchadores">Luchadores</li>
          <li class="role" id="magos">Magos</li>
          <li class="role" id="tiradores">Tiradores</li>
          <li class="role" id="apoyo">Apoyo</li>
          <li class="role" id="tanque"> Tanque</li>
        </ul>
        
      <label for="dificultad" >|</label>
          <select id="dificultad">
            <option value="">Dificultad</option>
              <option value="facil">Fácil</option>
              <option value="mediano">Mediano</option>
              <option value="dificil">Difícil</option>
          </select>
      </div>
      </div>
          <section>
          <p id="parrafoPorcentaje"></p>
          </section>
      <div id="root"></div>
      </main>`

export const footer = `<footer> 
<nav class="navfooter"> 
  <ul class="redessociales"> 
    <li><a href="#"></a><img src="./icon/instagram.png" alt="instagram"></li> 
    <li><a href="#"></a><img src="./icon/youtube.png" alt="youtube"></li> 
    <li><a href="#"></a><img src="./icon/facebook.png" alt="facebook"></li> 
    <li><a href="#"></a><img src="./icon/discord.png" alt="discord"></li> 
  </ul> 
  <div class="logo-riot2"> 
    <img src="./img/riot-game-blanco-logo.png" alt="logo-riot" id="logo-riot2"> 
  </div>
  <p class="derechoReservados"> <i> ©2023   Derechos reservados por 🏵Jae-pewu.</i> </p>
</nav> 
</footer>`

/* <input type="checkbox" id="todos" name="roles[]" value="todos">
<label for="todos"> aqui iria TODOS LOS ROLES
<img src="./icon/expand_more-2px.png" id="icon-expand" alt="icon-expand">
        </label>*/

/*<label for="role" ></label>
      <select id="role">
        <option id="todos">Todos los roles</option>
          <option id="asesinos">Asesinos</option>
          <option id="luchadores">luchadores</option>
          <option id="magos">Magos</option>
          <option id="tiradores">Tiradores</option>
          <option id="apoyo">Apoyo</option>
          <option id="tanque">Tanque</option>
      </select> */