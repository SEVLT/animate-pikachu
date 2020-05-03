!(function () {
    function writeCode(code) {
        let codeContainer = document.querySelector('#code')
        let drawContainer = document.querySelector('#style-draw')
        let n = 0
        let id = setInterval(() => {
            n += 1
            codeContainer.innerHTML = code.substring(0, n)
            drawContainer.innerHTML = code.substring(0, n)
            codeContainer.scrollTop = codeContainer.scrollHeight
            if (n >= code.length) {
                clearInterval(id)
            }
        }, 20)
    }
    let code = `/*         画一只皮卡丘         */

/*
 * 先填充底色
 */
.draw-wrapper {
    background-color: #fee433;
}

/*
 * 鼻子：借助无内容的 div 边框
 */
.nose {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    top: 28px;
    right: 50%;
    margin-right: -12px;
}

/*
 * 眼睛
 */
.eye {
    position: absolute;
    width: 49px;
    height: 49px;
    border: 2px solid black;
    background-color: #2e2e2e;
    border-radius: 50%;
}

/*
 * 眼珠：使用伪类，减少 html 页面标签数量
 */
.eye::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
    left: 6px;
    top: -1px;
}

/*
 * 左眼位置
 */
.eye-left {
    position: absolute;
    right: 50%;
    margin-right: 90px;
}

/*
 * 右眼位置
 */
.eye-right {
    position: absolute;
    left: 50%;
    margin-left: 90px;
}

/*
 * 脸颊
 */
.face {
    position: absolute;
    width: 68px;
    height: 68px;
    background-color: #fc0d1c;
    border-radius: 50%;
    border: 2px solid black;
    top: 85px;
}

/*
 * 左脸颊位置
 */
.face-left {
    right: 50%;
    margin-right: 116px;
}

/*
 * 右脸颊位置
 */
.face-right {
    left: 50%;
    margin-left: 116px;
}

/*
 * 上嘴唇：使用一个 div 盒子，背景色与底色相同
 */
.upperLip {
    position: absolute;
    width: 80px;
    height: 25px;
    background-color: #fee433;
    border: 2px solid black;
    border-top: none;
    top: 50px;
    z-index: 1;
}

/*
 * 左侧上嘴唇：借助盒子的 border-radius 属性改变形状，
              并且旋转
 */
.upperLip-left {
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    right: 50%;
    transform: rotate(-20deg);
}

/*
 * 右侧上嘴唇：与左侧上嘴唇类似，设置边框圆角并旋转
 */
.upperLip-right {
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    left: 50%;
    transform: rotate(20deg);
}

/*
 * 嘴巴容器：设置一个容器盖住多余的嘴巴部分
 */
.mouth-wrapper {
    position: absolute;
    width: 200px;
    height: 105px;
    bottom: 0;
    right: 50%;
    margin-right: -100px;
    overflow: hidden;
}

/*
 * 嘴巴：条形椭圆，只保留下面部分，其余部分被嘴巴容器遮住
 */
.mouth {
    position: absolute;
    height: 3500px;
    width: 300px;
    border-radius: 200px/2000px;
    border: 2px solid black;
    background-color: #990513;
    bottom: 0;
    right: 50%;
    margin-right: -150px;
    overflow: hidden;
}

/*
 * 舌头：使用伪类，避免 html 页面标签数量
 */
.mouth::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #fc4a62;
    border-radius: 50%;
    right: 50%;
    margin-right: -50px;
    bottom: -20px;
}

/*
 * ok，皮卡丘完成！
 */`
    writeCode(code)
})()
