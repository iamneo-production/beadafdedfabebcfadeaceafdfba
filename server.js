<!DOCTYPE html>
<html>
<head>
<style>
 .roundcorners{
 border-top-right-radius: 25px;
 border-bottom-right-radius: 25px;
 background: #73AD21;
 color:white;
 width: 500px;
 height: 50px; 
}
.aname{
 color:white;
 padding:50px;
 text-align:left;
 width: 500px;
 height: 50px; 
}
}
.button{
 background-color:Tomato;
 padding: 15px 32px;
 font-size: 16px
 text-align: center;
}
</style>
</head>
 <body style="background-color:black;padding:0";>
 <form>
 <div class="roundcorners">
 <h1 id="head">anime forms</h1>
 </div><br>
 <div class="aname">
 <h3 id="heading">Anime-Name</h3><br>
 <input id="submitButton" type="text" style="border-color:red";><br><br>
 <label id="country" style="color:white">ANIMI-(ORIGIN-COUNTRY)</label><br>
 <br>
 <select id="country" type="text"style="border-color:red";"text-align:center"/>
 <option value="">
 <option value="india">india</option>
 <option value="america">america</option>
 <option value="greece">greece</option>
 <option value="china">china</option>
 </select>
 <br><br>
 <button id="nameTextBox" style="border-color:red";rows="4" cols="50"></button> 
</button><br><br>
 <button id="yourRatingTextBox" style="border-color:red";></button><br><br>
 <img id="countryTextBox"><br>
 <img id="awardsTextBox">
 <label id="noOfEpisodeTextBox" style="color:white";"textalign:center";>No.of.Episodes</label><br><br>
 <input id="noOfEpisodeTextBox" type="text"style="border-color:red";"textalign:center";><br><br>
 <label id="yourRatingText" style="color:white";"text-align:center";>YOUR 
RATING</label><br><br>
 <input id="yourRatingText" type="text"style="border-color:red";rows="4" cols="50";><br><br>
 <label id="awardsText" style="color:white";"text-align:center";>AWARDS</label><br><br>
 <input id="awardsText" type="text"style="border-color:red";rows="4" cols="50";><br><br>
 <label id="descriptionTextBox" style="color:white";"text-align:right";>DESCRIPTION ABOUT THE 
ANIMI</label><br><br>
 <input id="descriptionTextBox" type="text"style="border-color:red";rows="4" 
cols="50";><br><br>
 <input type="button" class="button" value="submit">
 </div>
</form>
</body>
</html>