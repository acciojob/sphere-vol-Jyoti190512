function volume_sphere() {
    //Write your code here
	// Get the radius value from the input field
  const radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2);
        }
  
 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
