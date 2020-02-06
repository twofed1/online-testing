(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_3__);





var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

var $collectionHolder1, $collectionHolder2;
var $addQuestionButton = $('<button type="button" class="btn btn-success">Add new question</button>');
var $newLinkDiv1 = $('<div></div>').append($addQuestionButton);
jQuery(document).ready(function () {
  $collectionHolder1 = $('#tests_questions');
  $collectionHolder1.append($newLinkDiv1);
  $collectionHolder1.data('index', $collectionHolder1.find(':input').length);
  $addQuestionButton.on('click', function (e) {
    addQuestionsForm($collectionHolder1, $newLinkDiv1);
  });
});

function addQuestionsForm($collectionHolder, $newLinkDiv) {
  var $index = addAction($collectionHolder, $newLinkDiv, false);
  var $addAnswerButton = $('<button type="button" class="btn btn-info" data-id="">Add new answer</button>');
  var $newLinkDiv2 = $('<div></div>').append($addAnswerButton);
  $collectionHolder2 = $("#tests_questions_" + $index + "_answers");
  $addAnswerButton.attr('data-id', $index);
  $addAnswerButton.on('click', function (e) {
    addAnswersForm($index);
  });
  $collectionHolder2.append($newLinkDiv2);
  $collectionHolder2.data('index', $collectionHolder2.find(':input').length);
}

function addAnswersForm($index) {
  var $collectionHolder = $("#tests_questions_" + $index + "_answers");
  var $newLinkDiv = $("[data-id=" + $index + "]");
  addAction($collectionHolder2, $newLinkDiv, true);
}

function addAction($collectionHolder, $newLinkDiv, $check) {
  var prototype = $collectionHolder.data('prototype');
  var index = $collectionHolder.data('index');
  var newForm = prototype;

  if ($check) {
    newForm = newForm.replace(/_answers_\d/g, '_answers_' + index);
    newForm = newForm.replace(/\[answers\]\[\d\]/g, '[answers][' + index + ']');
  } else {
    newForm = newForm.replace(/__name__/g, index);
  }

  $collectionHolder.data('index', index + 1);
  var $newFormDiv = $('<div></div>').append(newForm);
  $newLinkDiv.before($newFormDiv);
  return index;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiJGNvbGxlY3Rpb25Ib2xkZXIxIiwiJGNvbGxlY3Rpb25Ib2xkZXIyIiwiJGFkZFF1ZXN0aW9uQnV0dG9uIiwiJG5ld0xpbmtEaXYxIiwiYXBwZW5kIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImRhdGEiLCJmaW5kIiwibGVuZ3RoIiwib24iLCJlIiwiYWRkUXVlc3Rpb25zRm9ybSIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJG5ld0xpbmtEaXYiLCIkaW5kZXgiLCJhZGRBY3Rpb24iLCIkYWRkQW5zd2VyQnV0dG9uIiwiJG5ld0xpbmtEaXYyIiwiYXR0ciIsImFkZEFuc3dlcnNGb3JtIiwiJGNoZWNrIiwicHJvdG90eXBlIiwiaW5kZXgiLCJuZXdGb3JtIiwicmVwbGFjZSIsIiRuZXdGb3JtRGl2IiwiYmVmb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBRUEsSUFBSUMsa0JBQUosRUFBd0JDLGtCQUF4QjtBQUVBLElBQU1DLGtCQUFrQixHQUFHSixDQUFDLENBQUMseUVBQUQsQ0FBNUI7QUFDQSxJQUFNSyxZQUFZLEdBQUdMLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJNLE1BQWpCLENBQXdCRixrQkFBeEIsQ0FBckI7QUFFQUcsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVc7QUFDOUJQLG9CQUFrQixHQUFHRixDQUFDLENBQUMsa0JBQUQsQ0FBdEI7QUFDQUUsb0JBQWtCLENBQUNJLE1BQW5CLENBQTBCRCxZQUExQjtBQUNBSCxvQkFBa0IsQ0FBQ1EsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUNSLGtCQUFrQixDQUFDUyxJQUFuQixDQUF3QixRQUF4QixFQUFrQ0MsTUFBbkU7QUFDQVIsb0JBQWtCLENBQUNTLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQVNDLENBQVQsRUFBWTtBQUN2Q0Msb0JBQWdCLENBQUNiLGtCQUFELEVBQXFCRyxZQUFyQixDQUFoQjtBQUNILEdBRkQ7QUFHSCxDQVBEOztBQVNBLFNBQVNVLGdCQUFULENBQTBCQyxpQkFBMUIsRUFBNkNDLFdBQTdDLEVBQTBEO0FBQ3RELE1BQUlDLE1BQU0sR0FBR0MsU0FBUyxDQUFDSCxpQkFBRCxFQUFvQkMsV0FBcEIsRUFBaUMsS0FBakMsQ0FBdEI7QUFDQSxNQUFJRyxnQkFBZ0IsR0FBR3BCLENBQUMsQ0FBQywrRUFBRCxDQUF4QjtBQUNBLE1BQUlxQixZQUFZLEdBQUdyQixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTSxNQUFqQixDQUF3QmMsZ0JBQXhCLENBQW5CO0FBQ0FqQixvQkFBa0IsR0FBR0gsQ0FBQyxDQUFDLHNCQUFzQmtCLE1BQXRCLEdBQStCLFVBQWhDLENBQXRCO0FBQ0FFLGtCQUFnQixDQUFDRSxJQUFqQixDQUFzQixTQUF0QixFQUFpQ0osTUFBakM7QUFDQUUsa0JBQWdCLENBQUNQLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtBQUNyQ1Msa0JBQWMsQ0FBQ0wsTUFBRCxDQUFkO0FBQ0gsR0FGRDtBQUdBZixvQkFBa0IsQ0FBQ0csTUFBbkIsQ0FBMEJlLFlBQTFCO0FBQ0FsQixvQkFBa0IsQ0FBQ08sSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUNQLGtCQUFrQixDQUFDUSxJQUFuQixDQUF3QixRQUF4QixFQUFrQ0MsTUFBbkU7QUFDSDs7QUFFRCxTQUFTVyxjQUFULENBQXdCTCxNQUF4QixFQUFnQztBQUM1QixNQUFJRixpQkFBaUIsR0FBR2hCLENBQUMsQ0FBQyxzQkFBc0JrQixNQUF0QixHQUErQixVQUFoQyxDQUF6QjtBQUNBLE1BQUlELFdBQVcsR0FBR2pCLENBQUMsQ0FBQyxjQUFja0IsTUFBZCxHQUF1QixHQUF4QixDQUFuQjtBQUNBQyxXQUFTLENBQUNoQixrQkFBRCxFQUFxQmMsV0FBckIsRUFBa0MsSUFBbEMsQ0FBVDtBQUNIOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJILGlCQUFuQixFQUFzQ0MsV0FBdEMsRUFBbURPLE1BQW5ELEVBQTJEO0FBQ3ZELE1BQU1DLFNBQVMsR0FBR1QsaUJBQWlCLENBQUNOLElBQWxCLENBQXVCLFdBQXZCLENBQWxCO0FBQ0EsTUFBTWdCLEtBQUssR0FBR1YsaUJBQWlCLENBQUNOLElBQWxCLENBQXVCLE9BQXZCLENBQWQ7QUFDQSxNQUFJaUIsT0FBTyxHQUFHRixTQUFkOztBQUNBLE1BQUlELE1BQUosRUFBWTtBQUNSRyxXQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixjQUFoQixFQUFnQyxjQUFjRixLQUE5QyxDQUFWO0FBQ0FDLFdBQU8sR0FBR0EsT0FBTyxDQUFDQyxPQUFSLENBQWdCLG9CQUFoQixFQUFzQyxlQUFlRixLQUFmLEdBQXVCLEdBQTdELENBQVY7QUFDSCxHQUhELE1BR087QUFDSEMsV0FBTyxHQUFHQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJGLEtBQTdCLENBQVY7QUFDSDs7QUFDRFYsbUJBQWlCLENBQUNOLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDZ0IsS0FBSyxHQUFHLENBQXhDO0FBQ0EsTUFBTUcsV0FBVyxHQUFHN0IsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk0sTUFBakIsQ0FBd0JxQixPQUF4QixDQUFwQjtBQUNBVixhQUFXLENBQUNhLE1BQVosQ0FBbUJELFdBQW5CO0FBQ0EsU0FBT0gsS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3BERCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcblxubGV0ICRjb2xsZWN0aW9uSG9sZGVyMSwgJGNvbGxlY3Rpb25Ib2xkZXIyO1xuXG5jb25zdCAkYWRkUXVlc3Rpb25CdXR0b24gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPkFkZCBuZXcgcXVlc3Rpb248L2J1dHRvbj4nKTtcbmNvbnN0ICRuZXdMaW5rRGl2MSA9ICQoJzxkaXY+PC9kaXY+JykuYXBwZW5kKCRhZGRRdWVzdGlvbkJ1dHRvbik7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIxID0gJCgnI3Rlc3RzX3F1ZXN0aW9ucycpO1xuICAgICRjb2xsZWN0aW9uSG9sZGVyMS5hcHBlbmQoJG5ld0xpbmtEaXYxKTtcbiAgICAkY29sbGVjdGlvbkhvbGRlcjEuZGF0YSgnaW5kZXgnLCAkY29sbGVjdGlvbkhvbGRlcjEuZmluZCgnOmlucHV0JykubGVuZ3RoKTtcbiAgICAkYWRkUXVlc3Rpb25CdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBhZGRRdWVzdGlvbnNGb3JtKCRjb2xsZWN0aW9uSG9sZGVyMSwgJG5ld0xpbmtEaXYxKTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRRdWVzdGlvbnNGb3JtKCRjb2xsZWN0aW9uSG9sZGVyLCAkbmV3TGlua0Rpdikge1xuICAgIGxldCAkaW5kZXggPSBhZGRBY3Rpb24oJGNvbGxlY3Rpb25Ib2xkZXIsICRuZXdMaW5rRGl2LCBmYWxzZSk7XG4gICAgbGV0ICRhZGRBbnN3ZXJCdXR0b24gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiIGRhdGEtaWQ9XCJcIj5BZGQgbmV3IGFuc3dlcjwvYnV0dG9uPicpO1xuICAgIGxldCAkbmV3TGlua0RpdjIgPSAkKCc8ZGl2PjwvZGl2PicpLmFwcGVuZCgkYWRkQW5zd2VyQnV0dG9uKTtcbiAgICAkY29sbGVjdGlvbkhvbGRlcjIgPSAkKFwiI3Rlc3RzX3F1ZXN0aW9uc19cIiArICRpbmRleCArIFwiX2Fuc3dlcnNcIik7XG4gICAgJGFkZEFuc3dlckJ1dHRvbi5hdHRyKCdkYXRhLWlkJywgJGluZGV4KTtcbiAgICAkYWRkQW5zd2VyQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgYWRkQW5zd2Vyc0Zvcm0oJGluZGV4KTtcbiAgICB9KTtcbiAgICAkY29sbGVjdGlvbkhvbGRlcjIuYXBwZW5kKCRuZXdMaW5rRGl2Mik7XG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIyLmZpbmQoJzppbnB1dCcpLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGFkZEFuc3dlcnNGb3JtKCRpbmRleCkge1xuICAgIGxldCAkY29sbGVjdGlvbkhvbGRlciA9ICQoXCIjdGVzdHNfcXVlc3Rpb25zX1wiICsgJGluZGV4ICsgXCJfYW5zd2Vyc1wiKTtcbiAgICBsZXQgJG5ld0xpbmtEaXYgPSAkKFwiW2RhdGEtaWQ9XCIgKyAkaW5kZXggKyBcIl1cIik7XG4gICAgYWRkQWN0aW9uKCRjb2xsZWN0aW9uSG9sZGVyMiwgJG5ld0xpbmtEaXYsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBY3Rpb24oJGNvbGxlY3Rpb25Ib2xkZXIsICRuZXdMaW5rRGl2LCAkY2hlY2spIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcbiAgICBjb25zdCBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XG4gICAgbGV0IG5ld0Zvcm0gPSBwcm90b3R5cGU7XG4gICAgaWYgKCRjaGVjaykge1xuICAgICAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fYW5zd2Vyc19cXGQvZywgJ19hbnN3ZXJzXycgKyBpbmRleCk7XG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL1xcW2Fuc3dlcnNcXF1cXFtcXGRcXF0vZywgJ1thbnN3ZXJzXVsnICsgaW5kZXggKyAnXScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcbiAgICB9XG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCArIDEpO1xuICAgIGNvbnN0ICRuZXdGb3JtRGl2ID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQobmV3Rm9ybSk7XG4gICAgJG5ld0xpbmtEaXYuYmVmb3JlKCRuZXdGb3JtRGl2KTtcbiAgICByZXR1cm4gaW5kZXg7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==