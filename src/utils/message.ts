export const getName = (name: string) => {
    return name === "码农小李" ? "李白" : "码农小李"
}

export const getAvatar = () => {
    return 'src/assets/avatar.png'
}

export const emojis = () => {
    return "😀,😁,😂,😃,😄,😅,😆,😉,😊,😋,😎,😍,😘,😗,😙,😚,😇,😐,😑,😶,😏,😣,😥,😮,😯,😪,😫,😴,😌,😛,😜,😝,😒,😓,😔,😕,😲,😷,😖,😞,😟,😤,😢,😭,😦,😧,😨,😬,😰,😱,😳,😵,😡,😠,💘,❤,💓,💔,💕,💖,💗,💙,💚,💛,💜,💝,💞,💟,❣,💪,👈,👉,☝,👆,👇,✌,✋,👌,👍,👎,✊,👊,👋,👏,👐,✍,🍇,🍈,🍉,🍊,🍋,🍌,🍍,🍎,🍏,🍐,🍑,🍒,🍓,🍅,🍆,🌽,🍄,🌰,🍞,🍖,🍗,🍔,🍟,🍕,🍳,🍲,🍱,🍘,🍙,🍚,🍛,🍜,🍝,🍠,🍢,🍣,🍤,🍥,🍡,🍦,🍧,🍨,🍩,🍪,🎂,🍰,🍫,🍬,🍭,🍮,🍯,🍼,☕,🍵,🍶,🍷,🍸,🍹,🍺,🍻,🍴,🌹,🍀,🍎,💰,📱,🌙,🍁,🍂,🍃,🌷,💎,🔪,🔫,🏀,⚽,⚡,👄,👍,🔥,🙈,🙉,🙊,🐵,🐒,🐶,🐕,🐩,🐺,🐱,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🐈,🐯,🐅,🐆,🐴,🐎,🐮,🐂,🐃,🐄,🐷,🐖,🐗,🐽,🐏,🐑,🐐,🐪,🐫,🐘,🐭,🐁,🐀,🐹,🐰,🐇,🐻,🐨,🐼,🐾,🐔,🐓,🐣,🐤,🐥,🐦,🐧,🐸,🐊,🐢,🐍,🐲,🐉,🐳,🐋,🐬,🐟,🐠,🐡,🐙,🐚,🐌,🐛,🐜,🐝,🐞,🦋,😈,👿,👹,👺,💀,☠,👻,👽,👾,💣"
}

export const messageItem = () => { //怎么存的话就随便可以localhost，如果是完整的项目可以从后端调接口，后端会有存聊天记录的数据库
    return [
        {
            name: "码农小李", //姓名
            content: "你叫什么？",
            time: "2023-10-22 19:55:12",
            avatar: ('src/assets/avatar.png'),
        },
        {
            name: "李白", //姓名
            content: "我没叫啊",
            time: "2023-10-22 19:56:34",
            avatar: ('src/assets/2.jpg'),
        },
        {
            name: "码农小李", //姓名
            content: "我说你叫什么？",
            time: "2023-10-22 19:57:12",
            avatar: ('src/assets/avatar.png'),
        },
        {
            name: "李白", //姓名
            content: "我根本没说话啊",
            time: "2023-10-22 19:58:34",
            avatar: ('src/assets/2.jpg'),
        },
        {
            name: "李白", //姓名
            content: "😮😮😮",
            time: "2023-10-22 19:58:54",
            avatar: ('src/assets/2.jpg'),
        },
        {
            name: "码农小李", //姓名
            content: "6",
            time: "2023-10-22 19:59:12",
            avatar: ('src/assets/avatar.png'),
        },
        {
            name: "码农小李", //姓名
            content: "😅",
            time: "2023-10-22 20:00:10",
            avatar: ('src/assets/avatar.png'),
        }, {
            name: "李白", //姓名
            content: "哈喽",
            time: "2023-10-22 19:58:54",
            avatar: ('src/assets/2.jpg'),
        }, {
            name: "李白", //姓名
            content: "最近过的还好吗?",
            time: "2023-10-22 19:58:54",
            avatar: ('src/assets/2.jpg'),
        },
    ]
}

export const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}