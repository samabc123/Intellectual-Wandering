<template>
    <div class="border">
        <div class="user-pic">
            <img src="" alt="">
        </div>
        <div class="user-content">
            <h2 class="spacing">111</h2>
            <p class="spacing">222</p>
            <img class="spacing" src="" alt="">
            <span class="spacing time">333</span>
            <div class="commit">
                <!-- <a v-on:click="likeClick($event, item)" class="btn btn-left" href="javascript:;">
                    <span class="icon-heart-empty"></span>{{ item.like }}
                </a>
                <a v-on:click="comtClick($event, item)" href="javascript:;" class="btn btn-comment">
                    <span class="icon-comment-alt"></span>评论
                </a> -->
            </div>
        </div>
    </div>
</template>
  
<script setup name="permission">
function likeClick(event, feed) {

}
</script>
  
<style scoped>
.border {
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
}

.commit {
    width: 260px;
    height: 70px;
    padding: 2px 20px;
    background: #3d4e56;
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
    right: 60px;
}

.user-pic {
    width: 80px;
    height: 80px;
    float: left;
}

.user-content {
    width: 80%;
    margin-left: 100px;
    padding: 0 20px 20px 20px;
    position: relative;
}

.user-content h2 {
    font-weight: bold;
    font-size: 26px;
    color: #6495ED;
}

.user-content p {
    font-size: 26px;
}

.spacing {
    margin-bottom: 20px;
}

.time {
    color: #ccc;
    font-size: 20px;
}
</style>