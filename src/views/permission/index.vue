<template>
    <div>
        <div class="user-self">
            <div class="username left">
                <h1>{{ users.username }}</h1>
            </div>
            <div class="user-icon">
                <img :src="users.url" alt="">
            </div>
        </div>
        <div class="border" v-for="item in AllFeeds" :key="item">
            <div class="user-pic">
                <img :src="item.url">
            </div>
            <div class="user-content">
                <h2 class="spacing">{{ item.name }}</h2>
                <p class="spacing fonts">{{ item.content }}</p>
                <img class="spacing imgs" :src="item.picUrl">
                <span class="spacing time">{{ item.time }}</span>
                <div class="commit" v-show="(showComt)">
                    <a v-on:click="likeClick($event, item)" class="btn btn-left" href="javascript:;">
                        {{ item.like }}
                    </a>
                    <a v-on:click="comtClick($event, item)" href="javascript:;" class="btn">
                        评论
                    </a>
                </div>
                <van-button class="btn-default" @click="showComtClick"></van-button>
            </div>
            <!-- <div class="repcomment">
                <div class="comments"
                    v-show="item.userLike && item.userLike.length > 0 || item.comment && item.comment.length > 0">
                    <div class="top">
                        <span class="triangle">
                        </span>
                        <div class="like" v-show="item.userLike && item.userLike.length > 0">
                            <p>
                                <span class="user" v-for="onelike in item.userLike">{{ onelike }}<span
                                        class="dh-black">,</span></span>
                            </p>
                        </div>
                        <div class="comment" v-show="item.comment && item.comment.length > 0">
                            <div class="com-space" v-for="onecommet in item.comment">
                                <div v-if="!(onecommet.reply)">
                                    <a href="javascript:;" v-on:click.stop="replyComt($event, item, onecommet)"
                                        class="reply">
                                        <span class="user">{{ onecommet.name }}:</span>
                                        {{ onecommet.content }}
                                    </a>
                                </div>
                                <div v-else>
                                    <a href="javascript:;" v-on:click.stop="replyComt($event, item, onecommet)"
                                        class="reply">
                                        <span class="user">{{ userinfo.username }}</span>回复 <span class="user">{{ replyUser
                                        }}:
                                            <a href="javascript:;" class="reply">{{ onecommet.content }}</a>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
  
<script setup name="permission">
import { onMounted, ref } from "vue";
import { getCurrentInstance } from "vue"
const { proxy } = getCurrentInstance()

const AllFeeds = ref([])
const users = ref([])
let showComt = ref(false)

onMounted(() => {
    proxy.$axios.get("/json/commitData.json").then((res) => {
        console.log(res)
        AllFeeds.value = res.data.data
    })
    proxy.$axios.get("/json/my-info.json").then((res) => {
        console.log(res)
        users.value = res.data.data
    })
})
function likeClick() {

}
function showComtClick() {
    showComt.value = !showComt.value
}

</script>
  
<style lang="scss" scoped>
.user-self {
    width: 100%;
    height: 200px;
    background: url('../../../public/profile2/background.png');
}

.username {
    margin-top: 120px;
    margin-left: 20px;
}

.username h1 {
    font-size: 34px;
    color: #fff;
}

.left {
    float: left;
}

.user-icon {
    width: 80px;
    height: 80px;
    float: left;
    margin-left: 200px;
    margin-top: 120px;
    padding: 5px;
    background-color: #ffffff;
    border: 1px solid #878787;

    img {
        width: 100%;
        height: 100%;
    }
}

.border {
    width: 365px;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;

    .user-pic {
        margin-left: 8px;
        float: left;

        img {
            width: 60px;
            height: 60px;
        }
    }

    .user-content {
        margin-left: 60px;
        padding: 0 20px 20px 20px;

        h2 {
            font-weight: bold;
            font-size: 22px;
            color: #6495ED;
        }

        p {
            font-size: 26px;
        }

        .spacing {
            width: 200px;
            margin-bottom: 10px;
        }

        .time {
            color: #ccc;
            font-size: 16px;
        }

        .fonts {
            width: 260px;
            font-size: 16px;
        }

        .imgs {
            width: 280px;
            height: 250px;
        }

        .commit {
            padding: 2px 20px;
            background: gray;
            border-radius: 10px;
            display: inline;

            .btn {
                line-height: 20px;
                text-align: center;
                display: inline;
                margin: 0 5px;
                color: #fff;
                font-size: 12px;
                text-decoration: none;
                outline: none;
            }

            // .btn-left {
            //     border-right: 1px solid #000;
            // }
        }

        .btn-default {
            border: none;
            width: 45px;
            height: 45px;
            background: url(../other/sms.svg) no-repeat;
            left: 200px;
            bottom: 15px;
            outline: none;
        }
    }

    // .comments {
    //     margin-left: 100px;
    //     position: relative;
    // }

    // .top {
    //     width: 480px;
    //     margin: 0 0 20px 20px;
    //     padding: 5px 0;
    //     background: #F4F4F4;
    // }

    // .top p {
    //     margin: 15px;
    //     font-size: 24px;
    //     position: relative;
    // }

    // .triangle {
    //     position: absolute;
    //     width: 0px;
    //     height: 0px;
    //     line-height: 0px;
    //     border-bottom: 10px solid #F4F4F4;
    //     border-left: 10px solid #fff;
    //     border-right: 10px solid #fff;
    //     left: 40px;
    //     top: -10px;
    // }

    // .top .user {
    //     font-size: 24px;
    //     color: #6495ED;
    // }
}</style>