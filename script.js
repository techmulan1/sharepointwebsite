// The script code for the slideshow


const swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    0: {
      slidesPerView: 1
    }
  }
});



// This is code for the paystack API

// script.js
// const paymentForm = document.getElementById('paymentForm');

// paymentForm.addEventListener('submit', payWithPaystack, false);

// function payWithPaystack(e) {
//   e.preventDefault();

//   const email = document.getElementById('email-address').value;
//   const amount = 14700; // $147.00 in kobo (NGN)
//   const firstName = document.getElementById('first-name').value;
//   const lastName = document.getElementById('last-name').value;

//   let handler = PaystackPop.setup({
//     key: 'YOUR_PUBLIC_KEY', // Replace with your Paystack public key
//     email: email,
//     amount: amount * 100, // Convert to kobo
//     currency: 'NGN',
//     firstname: firstName,
//     lastname: lastName,
//     onClose: function () {
//       alert('Transaction was not completed, window closed.');
//     },
//     callback: function (response) {
//       alert('Payment successful. Reference: ' + response.reference);
//       // You can do more here like saving to DB
//     }
//   });

//   handler.openIframe();
// }



// script.js

const counters = document.querySelectorAll('.count');
let started = false;

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const duration = 2000;
  const step = Math.ceil(target / (duration / 10));

  let count = 0;
  const update = () => {
    count += step;
    if (count >= target) {
      counter.textContent = target.toLocaleString(); // Format with commas
    } else {
      counter.textContent = count.toLocaleString();
      requestAnimationFrame(update);
    }
  };

  update();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        counters.forEach(animateCounter);
        started = true;
        observer.disconnect(); // Stop watching once done
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.querySelector('#stats'));


// The faq section

const questions = document.querySelectorAll(".faq-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.classList.contains("open");

      document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
      document.querySelectorAll(".faq-question").forEach(btn => btn.classList.remove("active"));

      if (!isOpen) {
        answer.classList.add("open");
        q.classList.add("active");
      }
    });
  });

