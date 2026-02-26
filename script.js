// 设置页脚年份
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// 移动端导航菜单切换
const navToggle = document.getElementById('nav-toggle');
const navMenuMobile = document.getElementById('nav-menu-mobile');

if (navToggle && navMenuMobile) {
  navToggle.addEventListener('click', () => {
    navMenuMobile.classList.toggle('hidden');
  });
}

// 点击 mobile 菜单项后自动收起
if (navMenuMobile) {
  navMenuMobile.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === 'a') {
      navMenuMobile.classList.add('hidden');
    }
  });
}

// 作品页图片点击放大 modal
const workButtons = document.querySelectorAll('[data-work-image]');
const workModal = document.getElementById('work-modal');
const workModalImage = document.getElementById('work-modal-image');
const workModalClose = document.getElementById('work-modal-close');

function openWorkModal(src) {
  if (!workModal || !workModalImage) return;
  workModalImage.setAttribute('src', src);
  workModal.classList.remove('hidden');
}

function closeWorkModal() {
  if (!workModal || !workModalImage) return;
  workModal.classList.add('hidden');
  workModalImage.setAttribute('src', '');
}

if (workButtons.length && workModal && workModalImage) {
  workButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-work-image');
      if (src) openWorkModal(src);
    });
  });
}

if (workModal && workModalClose) {
  workModalClose.addEventListener('click', () => {
    closeWorkModal();
  });

  workModal.addEventListener('click', (event) => {
    if (event.target === workModal) {
      closeWorkModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !workModal.classList.contains('hidden')) {
      closeWorkModal();
    }
  });
}

