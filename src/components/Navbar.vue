<template lang="html">
  <nav>
        <ul>
            <li><a href="#"><p>File Converter</p></a></li>
            <li id="space"><li>
            <li>
              <router-link class="nav-item is-tab" to="/images">
                <i class="fa fa-file-image-o"></i> <p>Images</p>
              </router-link>
            </li>
            <li>
              <router-link class="nav-item is-tab" to="/movies">
                <i class="fa fa-file-movie-o"></i> <p>Movies</p>
              </router-link>
            </li>
            <li>
              <router-link class="nav-item is-tab" to="/documents">
                <i class="fa fa-file-word-o"></i> <p>Documents</p>
              </router-link>
            </li>
            <li>
              <router-link class="nav-item is-tab" to="/sounds">
                <i class="fa fa-file-sound-o"></i> <p>Sounds</p>
              </router-link>
            </li>
            <!-- <li><a href="#">Web Design</a> -->
            <!-- First Tier Drop Down -->
            <!-- <ul> -->
                <!-- <li><a href="#">Link 1</a></li> -->
                <!-- <li><a href="#">Link 2</a></li> -->
                <!-- <li><a href="#">Tutorials</a> -->
            	<!-- Second Tier Drop Down -->
                <!-- <ul> -->
                    <!-- <li><a href="#">HTML/CSS</a></li> -->
                    <!-- <li><a href="#">jQuery</a></li> -->
                    <!-- <li><a href="#">Other</a> -->
                        <!-- Third Tier Drop Down -->
                        <!-- <ul> -->
                            <!-- <li><a href="#">Stuff</a></li> -->
                            <!-- <li><a href="#">Things</a></li> -->
                            <!-- <li><a href="#">Other Stuff</a></li> -->
                        <!-- </ul> -->
                    <!-- </li> -->
                <!-- </ul> -->
                <!-- </li> -->
            <!-- </ul> -->
            <!-- </li> -->
            <!-- <li><a href="#">Inspiration</a></li> -->
            <!-- <li><a href="#">Graphic Design</a></li> -->
            <!-- <li><a href="#">Contact</a></li> -->
            <!-- <li><a href="#">About</a></li> -->
        </ul>
    </nav>

</template>
<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
/*@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://fonts.googleapis.com/css?family=Bree+Serif);*/
@import url(https://fonts.googleapis.com/css?family=Comfortaa);
p{
  font-family: 'Comfortaa', cursive;
  display: inline-block;
}
#space{
  width: 7em;
}
body {
	background: #fff;
	color: #ffffff;
	}

router-link {
	color: #FFF;
  margin-right: 1em;
}

#container {
	margin: 0 auto;
}

p {
	text-align: center;
  font-size: .8em;
}

nav {
	background-color: #ddd;
}

nav ul {
	padding: 0;
  margin: 0;
	list-style: none;
  background-color: #ddd;
	position: relative;
	}

nav ul li {
	display:inline-block;
	background-color: #ddd;
	}

nav a {
	display:block;
	padding:0 10px;
	color:#FFF;
	font-size:20px;
	line-height: 16px;
	text-decoration:none;
}

nav a:hover {
	background-color: #555;
}

/* Hide Dropdowns by Default */
nav ul ul {
	display: none;
	position: absolute;
	top: 600px; /* the height of the main nav */
}

/* Display Dropdowns on Hover */
nav ul li:hover > ul {
	display:inherit;
}

/* Fisrt Tier Dropdown */
nav ul ul li {
	width:170px;
	float:none;
	display:list-item;
	position: relative;
}

/* Second, Third and more Tiers	*/
nav ul ul ul li {
	position: relative;
	top:-60px;
	left:170px;
}


/* Change this in order to change the Dropdown symbol */
li > a:after { content:  ' +'; }
li > a:only-child:after { content: ''; }
</style>
