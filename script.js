// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click',()=>{nav.classList.toggle('active');});

// Dark Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    toggle.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Projects Modal
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.querySelector('.modal .close');
document.querySelectorAll('.project').forEach(proj=>{
    proj.addEventListener('click',()=>{
        modal.style.display='flex';
        modalTitle.textContent = proj.dataset.title;
        modalDesc.textContent = proj.dataset.desc;
    });
});
closeModal.addEventListener('click',()=>{modal.style.display='none';});
window.addEventListener('click',e=>{if(e.target==modal) modal.style.display='none';});


// --- Skills Bar Animation Logic ---

const skillsBars = document.querySelectorAll('.skill .progress div');

document.addEventListener('DOMContentLoaded', () => {
    skillsBars.forEach(skill => {
        const originalWidth = skill.style.width;
        skill.setAttribute('data-target-width', originalWidth);
        skill.style.width = '0%';
    });
    window.dispatchEvent(new Event('scroll'));
});


window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.8; 
    skillsBars.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const targetWidth = skill.getAttribute('data-target-width');

        if (skillTop < trigger) {
            if (skill.style.width === '0%') {
                skill.style.width = targetWidth;
            }
        }
    });
});