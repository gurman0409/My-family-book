var change_images_of_family = ["father image.jpg"];
var change_name_of_family = ["Sandeep Singh"];

var i = 0;
function next_image()
{
        document.getElementById("familyname").innerHTML = change_name_of_family[i];
        document.getElementById("family_main_image").src = change_images_of_family[i];
        i++;
}