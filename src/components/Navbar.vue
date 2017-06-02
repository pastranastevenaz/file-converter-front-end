<template lang="html">
  <nav>
        <ul>
            <li><a href="#">File Converter</a></li>
            <li id="space"><li>
            <li>
              <router-link class="nav-item is-tab" to="/images">
                <i class="fa fa-file-image-o"></i> Images
              </router-link>
            </li>
            <li>
              <router-link class="nav-item is-tab" to="/movies">
                <i class="fa fa-file-movie-o"></i> Movies
              </router-link>
            </li>
            <li>
              <router-link class="nav-item is-tab" to="/documents">
                <i class="fa fa-file-word-o"></i> Documents
              </router-link>
            </li>
            <li>
              <router-link class="nav-item is-tab" to="/sounds">
                <i class="fa fa-file-sound-o"></i> Sounds
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
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://fonts.googleapis.com/css?family=Bree+Serif);
#space{
  width: 7em;
}
body {
	background: #fff;
	font-size:22px;
	line-height: 32px;
	color: #ffffff;
	word-wrap:break-word !important;
	font-family: 'Open Sans', sans-serif;
	}

h1 {
  display: inline-block;
	font-size: 60px;
	text-align: center;
	color: #FFF;
}

h3 {
	font-size: 30px;
	text-align: center;
	color: #FFF;
}

h3 a {
	color: #FFF;
}

router-link {
	color: #FFF;
  margin-right: 1em;
}

h1 {
	margin-top: 100px;
	text-align:center;
	font-size:60px;
	font-family: 'Bree Serif', 'serif';
	}

#container {
	margin: 0 auto;
}

p {
	text-align: center;
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
	line-height: 60px;
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
