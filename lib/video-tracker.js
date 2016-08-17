'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vpaidLifeCycle = require('./vpaid-life-cycle');

var _vpaidLifeCycle2 = _interopRequireDefault(_vpaidLifeCycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var quartiles = [{
  value: 0,
  name: _vpaidLifeCycle2.default[0]
}, {
  value: 0.25,
  name: _vpaidLifeCycle2.default[1]
}, {
  value: 0.50,
  name: _vpaidLifeCycle2.default[2]
}, {
  value: 0.75,
  name: _vpaidLifeCycle2.default[3]
}];

var _class = function () {
  /**
   * [constructor description]
   * @param  {[type]} el      [description]
   * @param  {TinyEmitter} emitter [description]
   * @return {[type]}         [description]
   */
  function _class(el, emitter) {
    var prefix = arguments.length <= 2 || arguments[2] === undefined ? 'AdVideo' : arguments[2];

    _classCallCheck(this, _class);

    this.el = el;
    this.emitter = emitter;
    this.prefix = prefix;
    this.quartileIndexEmitted = -1;
    this.el.addEventListener('timeupdate', this.handleTimeupdate.bind(this));
    this.el.addEventListener('ended', this.handleEnded.bind(this));
  }

  _createClass(_class, [{
    key: 'emit',
    value: function emit() {
      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      var eventName = this.prefix + rest[0];
      return this.emitter.emit.apply(this.emitter, [eventName].concat(rest.splice(1)));
    }
  }, {
    key: 'handleTimeupdate',
    value: function handleTimeupdate() {
      var upcomingQuartileIndex = this.quartileIndexEmitted + 1;
      var upcomingQuartile = quartiles[upcomingQuartileIndex];
      if (upcomingQuartile && this.el.currentTime / this.el.duration > upcomingQuartile.value) {
        this.emit(upcomingQuartile.name);
        this.quartileIndexEmitted = upcomingQuartileIndex;
      }
    }
  }, {
    key: 'handleEnded',
    value: function handleEnded() {
      this.emit(_vpaidLifeCycle2.default[4]);
      // Garbage collect event listeners
      this.el.removeEventListener('timeupdate', this.handleTimeupdate);
      this.el.removeEventListener('ended', this.handleEnded);
    }
  }]);

  return _class;
}();

exports.default = _class;