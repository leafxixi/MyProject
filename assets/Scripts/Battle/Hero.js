// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        anim: cc.Animation

        // HP  //生命
        // ATK //攻击
        // DEF //防御
        // SPD //速度
        // CRI //暴击
        // CHR //技能成功率
        // HIT //命中

        // STR //力量  影响ATK 少量影响HP
        // CON //体质  影响HP  少量影响DEF
        // DEX //敏捷  影响CRI 少量影响SPD
        // INT //智慧  影响CHR 少量影响HIT

        // EQUIPMENTA
        // EQUIPMENTB
        // EQUIPMENTC

        // SKILLA
        // SKILLB
        // SKILLC
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    attack : function () {
        this.anim.play('heroAttack');
    },

    // update (dt) {},
});
