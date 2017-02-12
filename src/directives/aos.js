
import AOS from 'aos';

export default {
  bind() { // el, binding, vnode
    // add listener
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 200,
    });
    // console.log(el);
    // console.log(binding);
    // console.log(vnode);
  },

    // // When the bound element is inserted into the DOM...
    // inserted(el, binding) {
    // },

  update() { // el, binding
    AOS.refresh();
    // console.log(el);
    // console.log(binding);
  },

  unbind() { // el, binding
    // // window.stroll.unbind(el);
    // console.log(el);
    // console.log(binding);
  },
};
