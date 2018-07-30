(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Gesture/gestureTool.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2ab10e39VVDzqYpn9XQ2lF3', 'gestureTool', __filename);
// Scripts/Gesture/gestureTool.js

"use strict";

var DollarRecognizer = require("gestureHelp");
var gesture = new DollarRecognizer();
var Hero = require("Hero");

cc.Class({
    extends: cc.Component,

    properties: {
        // 声明 GestureAction_A 属性
        GestureAction_A: {
            default: null,
            type: cc.Label
        },
        // 声明 GestureAction_B 属性
        GestureAction_B: {
            default: null,
            type: cc.Label
        },
        // 声明 GestureAction_C 属性
        GestureAction_C: {
            default: null,
            type: cc.Label
        },
        myGraphics: {
            default: null,
            type: cc.Graphics
        },
        myHero: {
            default: null,
            type: Hero
        }
    },

    //事件监听
    setEventControl: function setEventControl() {
        var self = this;
        var _isDown = false;

        var graphics = this.myGraphics;
        var gestureAction_A = this.GestureAction_A;
        var gestureAction_B = this.GestureAction_B;
        var gestureAction_C = this.GestureAction_C;

        var hero = this.myHero;

        var gestureActionCount = 0;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞没
            onTouchBegan: function onTouchBegan(touch, event) {
                if (gestureActionCount >= 3) {
                    gestureActionCount = 0;
                    gestureAction_A.string = "";
                    gestureAction_B.string = "";
                    gestureAction_C.string = "";
                }
                //实现 onTouchBegan 事件回调函数
                var target = event.getCurrentTarget();
                // 获取事件所绑定的 target
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                _isDown = true;

                var len = gesture.InitPoint(locationInNode.x, locationInNode.y);
                // str = "this.Unistrokes[] = new Unistroke("+", new Array(new Point("+parseInt(locationInNode.x)+","+parseInt(locationInNode.y)+")";
                graphics.moveTo(0, 0);
                graphics.clear();
                graphics.circle(locationInNode.x, locationInNode.y, 2);
                graphics.moveTo(locationInNode.x, locationInNode.y);
                return true;
            },
            onTouchMoved: function onTouchMoved(touch, event) {
                // 触摸移动时触发
                //实现 onTouchBegan 事件回调函数
                var target = event.getCurrentTarget();
                // 获取事件所绑定的 target
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                if (_isDown) {
                    gesture.AddPoint(locationInNode.x, locationInNode.y);
                    graphics.lineTo(locationInNode.x, locationInNode.y);
                    graphics.stroke();
                    // str += ",new Point("+parseInt(locationInNode.x)+","+parseInt(locationInNode.y)+")";
                }
            },
            onTouchEnded: function onTouchEnded(touch, event) {
                // 点击事件结束处理

                if (_isDown) {
                    var res = "";
                    _isDown = false;
                    if (gesture.GetPoints().length >= 7) {
                        // str += "));";

                        // cc.log("集合: " + str);
                        var result = gesture.Recognize(gesture.GetPoints(), 0);
                        //判定手势操作
                        cc.log("Result: " + result.Name);
                        res = result.Name;
                    } else // fewer than 7 points were inputted
                        {
                            //当无法Recognize时，判定为点击操作
                            // cc.log("Too few points made. Please try again.");
                            cc.log("Result: Tap");
                            res = "Tap";
                        }

                    //判定该展示在哪一个GestureAction中
                    gestureActionCount++;
                    switch (gestureActionCount) {
                        case 1:
                            //GestureAction_A
                            gestureAction_A.string = res;
                            break;
                        case 2:
                            //GestureAction_B
                            gestureAction_B.string = res;
                            break;
                        case 3:
                            //GestureAction_C
                            gestureAction_C.string = res;
                            break;
                    }
                    if (gestureActionCount == 3) {
                        // cc.log("attack!! & " + hero);
                        hero.attack();
                    }
                }
            }

        }, self.node);
    },
    // use this for initialization
    onLoad: function onLoad() {

        //触摸监听
        this.setEventControl();
    },

    // start () {

    // },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=gestureTool.js.map
        