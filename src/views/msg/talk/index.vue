<template>
    <div class="chatroom">
        <Chatheader />
        <div class="chat-content" ref="chatContainer" @click="emojiHide"
            :style="{ maxHeight: `calc(93vh - 100px - ${inputHeight}px)` }">
            <!-- 聊天记录 -->
            <div v-for="item in messageList" :key="item.time">
                <template v-if="item.name !== store.getGpt()">
                    <div class="content-right">
                        <span class="time">{{ item.time }}</span>
                        <span class="name">{{ item.name }}</span>
                        <img class="avatar" :src=item.avatar alt="头像">
                    </div>
                    <div class="contentbox-right">
                        <span class="content">
                            {{ item.content }}
                        </span>
                    </div>
                </template>
                <template v-else>
                    <div class="content-left">
                        <img class="avatar" :src=item.avatar alt="头像">
                        <span class="name">{{ item.name }}</span>
                        <span class="time">{{ item.time }}</span>
                    </div>
                    <div class="contentbox-left">
                        <span class="content">
                            {{ item.content }}
                        </span>
                    </div>
                </template>
            </div>
        </div>
        <div class="footer" :style="{ height: `calc(60px + ${inputHeight}px)` }">
            <!-- 表情输入 -->
            <div class="home-tool">
                <van-button type="default" class="emojibtn" @click="emojiShow"><van-icon name="smile-o"
                        size="30px" /></van-button>
                <div class="emoji-container" v-show="emojihowVisible" @click="emojiHide"
                    :style="{ bottom: `calc(80px + ${emojiHeight}px)` }">
                    <Emoji @click.stop="chooseEmoji"></Emoji>
                </div>
            </div>
            <!-- 输入框及发送 -->
            <van-field v-model="message" rows="1" autosize type="textarea" placeholder="请输入..." right-icon="photo-o"
                class="box" @input="handleInput" @focus="emojiHide" />
            <van-button class="btn" type="primary" :disabled="message.length === 0" @click="send">发送</van-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUpdated, nextTick } from 'vue'
import Chatheader from '@/components/Chatheader.vue'
import Emoji from '@/components/Emoji.vue'
import { messageItem, getAvatar, formatDate } from '@/utils/message'
import { messages } from '@/types'
import { useStore } from '@/stores/index'

const store = useStore()

// 输入框内容
const message = ref('');

// 消息列表
const messageList: Array<messages> = reactive([])

// 输入框每行的高度
const lineHeight = 24;

// 输入框行数
const lineCount = ref(0)

// 获取输入框元素
const inputField = ref<HTMLInputElement | null>(null);


/**
 * 表情面板显示与隐藏
 */
const emojihowVisible = ref(false)

const emojiShow = () => {
    emojihowVisible.value = !emojihowVisible.value
}

// 反正就是点到除表情框之外的地方我都给你隐藏
const emojiHide = () => {
    emojihowVisible.value = false
}

const chooseEmoji = (e: any) => {
    if (e.target.textContent.length <= 2) {  //部分表情只占一位,同时如果点到旁边的一点区域会输出全部的表情有点bug
        handleInput()
        message.value = message.value + e.target.textContent
    }
}


/**
 * 输入框高度自适应
 */
const inputHeight = computed(() => {
    return lineCount.value <= 1 ? 0 : lineHeight * (lineCount.value - 1); // 计算输入框应该有的高度
});

//emojiHeight随行数增多而变化，但是只会增加 24 的一半
const emojiHeight = computed(() => {
    return lineCount.value <= 1 ? 0 : (lineHeight - 12) * (lineCount.value - 1); // 计算输入框应该有的高度
});

const handleInput = () => {
    lineCount.value = inputField.value?.scrollHeight as number / 24;
}


/**
 * 自动滚动逻辑
 */
const chatContainer = ref<HTMLElement | null>(null)

onUpdated(() => {
    // 在视图更新之后执行滚动逻辑
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight //scrollHeight表示可滚动内容的整体高度。scrollTop是可滚动元素的一个属性，用于设置滚动条的垂直偏移量
    }
    if (inputField.value) {
        handleInput()
    }
})

const send = () => {
    //收回表情框
    emojihowVisible.value = false
    lineCount.value = 0
    const item = {
        name: store.getMaster() as string,
        content: message.value,
        time: formatDate(),
        avatar: getAvatar()
    }
    messageList.push(item)
    message.value = ''
}

onMounted(() => {
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight //初始加载时也滚动一下
    }
    messageItem().forEach((item) => {
        messageList.push(item)
    })
})

onMounted(() => {
    nextTick(() => {
        const myInput: HTMLInputElement | null = document.querySelector('#van-field-1-input')
        inputField.value = myInput
    })
})
</script>


<style scoped lang="less">
.chatroom {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .chat-content {
        flex: 1;
        overflow-y: scroll;
        padding: 10px;
        max-height: calc(93vh - 100px); //待定，要随之变化

        .content-right {
            display: flex;
            justify-content: flex-end;
            /* 右浮动 */
            color: darkgray;

            .time,
            .name {
                font-size: 12px;
                line-height: 50px;
                margin-right: 10px;
            }

            .avatar {
                border-radius: 50%;
                width: 50px;
                height: auto;
            }
        }

        .contentbox-right {
            display: flex;
            justify-content: flex-end;
            margin: 0px 60px;
            margin-bottom: 15px;

            .content {
                max-width: 80%;
                height: auto;
                word-wrap: break-word; //内容超出限制自动换行
                background-color: #f2f2f2;
                padding: 10px;
                font-size: 16px;
                border-radius: 20px;
            }
        }

        // 左侧写法
        .content-left {
            display: flex;
            justify-content: flex-start;
            /* 左浮动 */
            color: darkgray;

            .time,
            .name {
                font-size: 12px;
                line-height: 50px;
                margin-left: 10px;
            }

            .avatar {
                border-radius: 50%;
                width: 50px;
                height: auto;
            }
        }

        .contentbox-left {
            display: flex;
            justify-content: flex-start;
            margin: 0px 60px;
            margin-bottom: 15px;

            .content {
                max-width: 80%;
                height: auto;
                word-wrap: break-word;
                background-color: #f2f2f2;
                padding: 10px;
                font-size: 16px;
                border-radius: 20px;
            }
        }

    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 80px;
        padding: 10px;
        background-color: #f2f2f2;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        .home-tool {
            display: flex;

            .emojibtn {
                padding: 0;
                background-color: #f2f2f2;
                margin-right: 5px;
                border: 0;
            }

            position: relative;

            .emoji-container {
                width: 400px;
                height: 24vh;
                position: absolute;
                left: 0px;
                z-index: 10;
                transition: all 0.2s;
            }
        }

        .btn {
            margin-left: 10px;
            width: 70px;
            padding: 0 10px;
        }

    }
}
</style>