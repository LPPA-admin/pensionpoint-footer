
    var acc = document.getElementsByClassName("accordionfooter");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panelfooter = this.nextElementSibling;
        var icon = this.querySelector(".mdi");

        if (panelfooter.style.display === "block") {
          panelfooter.style.display = "none";
          icon.classList.remove("mdi-minus");
          icon.classList.add("mdi-plus");
        } else {
          panelfooter.style.display = "block";
          icon.classList.remove("mdi-plus");
          icon.classList.add("mdi-minus");
        }
      });
    }
