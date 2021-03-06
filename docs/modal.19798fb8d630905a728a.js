(self["webpackChunkdemo_travel_site"] = self["webpackChunkdemo_travel_site"] || []).push([[582],{

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.injectHTML();
    this.closeIcon = document.querySelector('.modal__close');
    this.modal = document.querySelector('.modal');
    this.events();
  }

  _createClass(Modal, [{
    key: "injectHTML",
    value: function injectHTML() {
      document.body.insertAdjacentHTML('beforeend', "\n            <div class=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-expanded=\"false\">\n                <div class=\"modal__inner\">\n                <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\"> Get in <strong>Touch</strong></h2>\n                <div class=\"wrapper wrapper--narrow\">\n                    <p class=\"modal__description\">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n                </div>\n            \n                <div class=\"social-icons\">\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\n                </div>\n                </div>\n                <div class=\"modal__close\" role=\"button\" aria-label=\"close modal button\" tabindex=\"11\">X</div>\n            </div>\n        ");
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.modal.classList.add('modal--show');
      this.modal.setAttribute('aria-expanded', true);
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.modal.classList.remove('modal--show');
      this.modal.setAttribute('aria-expanded', false);
    }
  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(evt) {
      if (evt.keyCode == 27) {
        this.hideModal();
      }

      if (evt.keyCode == 13 || evt.keyCode == 32) {
        if (document.activeElement == this.closeIcon) {
          this.hideModal();
        }
      }
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      //listen for close click
      this.closeIcon.addEventListener('click', function () {
        return _this.hideModal();
      }); //listen for esc key press

      document.addEventListener('keyup', function (evt) {
        return _this.keyPressHandler(evt);
      });
    }
  }]);

  return Modal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ })

}]);