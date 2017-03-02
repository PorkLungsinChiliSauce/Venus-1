/**
 * Created by dongweizhao on 17/2/12.
 */
/**
 * Created by dongweizhao on 15-9-8.
 */
/**
 * Created by dongweizhao on 16/6/26.
 */
var Vcm = {};
Vcm.ReqData = function () {

}
/**
 *对象拷贝
 * @param o
 * @param c
 * @returns {*}
 */
Vcm.apply = function (o, c) {
  if (o && c && typeof c == 'object') {
    for (var m in c) {
      o[m] = c[m];
    }
    ;
  }
  return o;
};

(function () {
  var toString = Object.prototype.toString;
  Vcm.apply(Vcm, {
    //重写操作
    override: function (origclass, overrides) {
      if (overrides) {
        var p = origclass.prototype;
        Vcm.apply(p, overrides);
      }
    },
    //继承
    extend: function () {
      var oc = Object.prototype.constructor;
      return function (sb, sp, overrides) {
        if (typeof sp == 'object') {
          overrides = sp;
          sp = sb;
          sb = overrides.constructor != oc ? overrides.constructor : function () {
            sp.apply(this, arguments);
          };
        }
        var F = function () {
          },
          spp = sp.prototype;
        F.prototype = spp;
        sb.prototype = new F();
        sb.constructor = sb;
        sb.supclass = spp;
        if (spp.constructor == oc) {
          spp.constructor = sp;
        }
        Vcm.override(sb, overrides);
        return sb;
      }
    }(),
    /**
     * 判断是否是函数
     * @param v
     * @returns {boolean}
     */
    isFunction: function (v) {
      return toString.apply(v) === '[object Function]';
    },
    /**
     * 判断是否是数组
     * @param v
     * @returns {boolean}
     */
    isArray: function (v) {
      return toString.apply(v) === '[object Array]';
    },
    /**
     * 判断是否为数字
     * @param v
     * @returns {boolean}
     */
    isNumber: function (v) {
      return typeof v === 'number' && isFinite(v);
    }
  });
})();

(function () {
  Vcm.apply(Function.prototype, {
    /**
     *  var sayHi = function(name){
         *alert('Hi, ' + name);
          *}
     // clicking the button alerts "Hi, Fred"
     new Ext.Button({
         text: 'Say Hi',
          renderTo: Ext.getBody(),
           handler: sayHi.createCallback('Fred')
          });
     </code></pre>
     * @return {Function} The new function
     */
    createCallback: function (/*args...*/) {
      // make args available, in function below
      var args = arguments,
        method = this;
      return function () {
        return method.apply(window, args);
      };
    },
    /**
     * Creates an interceptor function. The passed function is called before the original one. If it returns false,
     * the original one is not called. The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     * <pre><code>
     var sayHi = function(name){
          alert('Hi, ' + name);
          }

     sayHi('Fred'); // alerts "Hi, Fred"

     // create a new function that validates input without
     // directly modifying the original function:
     var sayHiToFriend = sayHi.createInterceptor(function(name){
           return name == 'Brian';
            });

     sayHiToFriend('Fred');  // no alert
     sayHiToFriend('Brian'); // alerts "Hi, Brian"
     </code></pre>
     * @param {Function} fcn The function to call before the original
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the passed function is executed.
     * <b>If omitted, defaults to the scope in which the original function is called or the browser window.</b>
     * @return {Function} The new function
     */
    createInterceptor: function (fcn, scope) {
      var method = this;
      return !App.isFunction(fcn) ?
        this :
        function () {
          var me = this,
            args = arguments;
          fcn.target = me;
          fcn.method = method;
          return (fcn.apply(scope || me || window, args) !== false) ?
            method.apply(me || window, args) :
            null;
        };
    },
    /**
     * Creates a delegate (callback) that sets the scope to obj.
     * Call directly on any function. Example: <code>this.myFunction.createDelegate(this, [arg1, arg2])</code>
     * Will create a function that is automatically scoped to obj so that the <tt>this</tt> variable inside the
     * callback points to obj. Example usage:
     * <pre><code>
     var sayHi = function(name){
    // Note this use of "this.text" here.  This function expects to
    // execute within a scope that contains a text property.  In this
    // example, the "this" variable is pointing to the btn object that
    // was passed in createDelegate below.
    alert('Hi, ' + name + '. You clicked the "' + this.text + '" button.');
}

     var btn = new Ext.Button({
    text: 'Say Hi',
    renderTo: Ext.getBody()
    });

     // This callback will execute in the scope of the
     // button instance. Clicking the button alerts
     // "Hi, Fred. You clicked the "Say Hi" button."
     btn.on('click', sayHi.createDelegate(btn, ['Fred']));
     </code></pre>
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Function} The new function
     */
    createDelegate: function (obj, args, appendArgs) {
      var method = this;
      return function () {
        var callArgs = args || arguments;
        if (appendArgs === true) {
          callArgs = Array.prototype.slice.call(arguments, 0);
          callArgs = callArgs.concat(args);
        } else if (Vcm.isNumber(appendArgs)) {
          callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
          var applyArgs = [appendArgs, 0].concat(args); // create method call params
          Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
        }
        if (!Vcm.isArray(callArgs)) {
          callArgs = [callArgs];
        }
        return method.apply(obj || window, callArgs);
      };
    }

  })

})();


(function () {
  Vcm.apply(Vcm, {
    //公共ajax查询
    ajaxPost: function (url, body, success, error) {
      this.$http({url: url}).then(success, error);
    }
  })
})();
Vcm.bus = {};
(function () {
  Vcm.apply(Vcm.bus, {
    //公共影院查询
    seachCinemaList: function (_this, data) {
      Vcm.ajaxPost.createDelegate(_this, ['/cinemaList', null, function (res) {
          this.cinemaList = res.data.BODY;
          this.loadingShow = false;
        }, function (res) {
          this.showMsg = true;
        }]
      )();
    }
  })
})();


export default Vcm;





