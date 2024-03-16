import { useUserStore } from "@/stores/user";

// 模拟登陆，实际需要调用request进行登录请求
export function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username == 'admin' && password == '123') {
            resolve({
                code: 200,
                msg: '请求成功',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
            })
        } else {
            reject('账号密码错误');
        }
    });
}

// 模拟请求用户信息，正常是需要经过后端校验token后判断登录用户再进行返回数据
export function getInfo(token) {
    const userStore = useUserStore();
    return new Promise((resolve, reject) => {
        if (token == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9') {
            resolve({
                code: 200,
                msg: '请求成功',
                data: {
                    userId: 1,
                    userName: 'Coder_xiaoli',
                    nickName: '码农小李',
                    avatar: 'https://files.catbox.moe/zfaaqx.jpg',
                    permissions: ['*:*:*'],
                    roles: ['admin']
                }
            })
        } else {
            resolve({
                code: 403,
                msg: 'token已失效',
                data: {}
            })
        }

    });
}

// 模拟请求用户信息，正常是需要传入token后进行登出
export function logout(token) {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            msg: '退出成功'
        })
    });
}
