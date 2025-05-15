document.addEventListener('DOMContentLoaded', function() {
    const technologiesSection = document.querySelector('#technologies');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.technologies-left').style.animation = 'slideInLeft 0.8s ease-out forwards';
                entry.target.querySelector('.technologies-right').style.animation = 'slideInRight 0.8s ease-out 0.2s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (technologiesSection) {
        observer.observe(technologiesSection);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const educationBlock = document.querySelector('.education-container-block');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.education-item');
          items.forEach((item, index) => {
            item.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    if (educationBlock) {
      observer.observe(educationBlock);
    }
  });