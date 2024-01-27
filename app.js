function changeBg() {
  var scrollValue = window.scrollY;
  var navbar = document.getElementById("navbar");
  if (scrollValue < 80) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}
window.addEventListener("scroll", changeBg);

// ANIMATION

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    //  else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// clients

const app = Vue.createApp({
  data() {
    return {
      brands: [
        "https://i.ibb.co/6HynNKS/wordpress.png",
        "https://i.ibb.co/41kkqNJ/cnn.png",
        "https://i.ibb.co/g6W04GJ/google.png",
        "https://i.ibb.co/CsFyzY8/hbo.png",
        "https://i.ibb.co/T20Ssx4/hulu.png",
        "https://i.ibb.co/ncvNQSB/ibm.png",
        "https://i.ibb.co/yPzSXPL/microsoft.png",
      ],
    };
  },
});

app.mount("#vue");
