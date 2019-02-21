<template>
<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市景点游玩主题
        </div>
    <div class="header-right">城市
        <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
</div>
</template>
<script>
export default {
    name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .header{
        display flex
        line-height .86rem
        background $bgcolor
        color #fff
    }
    .header-left {
        width .64rem
        float left
    }
    .header-input{
        flex: 1
        height .64rem
        line-height .64rem
        margin-left .2rem
        margin-top .12rem
        background #fff
        border-radius .1rem
        color #ccc
        padding-left .2rem
    }
    .header-right{
        width 1.24rem
        float right
        text-align center
    }
    .back-icon{
        text-align  center
        font-size .4rem
    }
    .arrow-icon{
        margin-left -.04rem
        font-size .24rem
    }
</style>

 