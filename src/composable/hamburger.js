import { ref, reactive, watch } from 'vue';
import {
  onBeforeRouteUpdate,
} from 'vue-router';

const toggleSize = 721;

const hamburger = reactive({
  isExist: window.innerWidth <= toggleSize,
  isOpen: false,
  initialize,
  show,
  close,
});

const windowWidth = ref(window.innerWidth);

function initialize() {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });

  watch(
    windowWidth,
    (newValue, oldValue) => {
      const shouldToggleHamburgerOn = (newValue <= toggleSize
      && oldValue > toggleSize);

      const shouldToggleHamburgerOff = (newValue > toggleSize
      && oldValue <= toggleSize);

      if (shouldToggleHamburgerOn) {
        hamburger.isExist = true;
      }
      if (shouldToggleHamburgerOff) {
        hamburger.isExist = false;
      }
    },
  );

  onBeforeRouteUpdate(() => {
    close();
  });
}

function show() {
  hamburger.isOpen = true;
}

function close() {
  hamburger.isOpen = false;
}

export default hamburger;
