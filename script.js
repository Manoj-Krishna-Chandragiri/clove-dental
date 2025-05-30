document.addEventListener("DOMContentLoaded", function () {
  const whyItems = document.querySelectorAll('.clove-why-item[data-img]');
  const mainImg = document.getElementById('cloveWhyMainImg');
  whyItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      mainImg.src = item.getAttribute('data-img');
    });
    item.addEventListener('focus', () => {
      mainImg.src = item.getAttribute('data-img');
    });
  });

  document.querySelectorAll('.clove-why-item').forEach(item => {
    const question = item.querySelector('.clove-why-question');
    if (question) {
      question.addEventListener('click', () => {
        document.querySelectorAll('.clove-why-item').forEach(i => {
          if (i !== item) i.classList.remove('open');
        });
        item.classList.toggle('open');
      });
    }
  });

  document.querySelectorAll('.faqsec-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.faqsec-item').forEach(i => {
        if (i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
      let valid = true;
      form.querySelectorAll('input[required], textarea[required]').forEach(input => {
        if (input.type === 'checkbox' && !input.checked) valid = false;
        if ((input.type === 'text' || input.type === 'tel' || input.type === 'email') && !input.value.trim()) valid = false;
      });
      if (!valid) {
        e.preventDefault();
        alert('Please fill all required fields and agree to terms.');
      }
    });
  });
});

document.querySelectorAll('.clove-why-question').forEach(function(question) {
    question.addEventListener('click', function() {
        var parent = question.closest('.clove-why-item');
        document.querySelectorAll('.clove-why-item.open').forEach(function(other) {
            if (other !== parent) other.classList.remove('open');
        });
        parent.classList.toggle('open');
                var imgPath = parent.getAttribute('data-img');
        if(imgPath){
            document.getElementById('cloveWhyMainImg').src = imgPath;
        }
    });
    question.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            question.click();
        }
    });
});