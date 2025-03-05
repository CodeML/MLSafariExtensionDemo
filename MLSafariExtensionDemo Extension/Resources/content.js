// 创建 Shadow DOM 容器
const container = document.createElement('div');
container.className = 'side-button-container';
const shadow = container.attachShadow({ mode: 'open' });

// 创建胶囊按钮
const button = document.createElement('button');
button.id = 'capsule-button';

// 添加图标（需替换为你的图片路径）
const img = document.createElement('img');
img.src = chrome.runtime.getURL('logo.svg'); // 扩展包内的图片
button.appendChild(img);

// 点击切换状态
button.addEventListener('click', () => {
  button.classList.toggle('expanded');
  chrome.runtime.sendMessage({ action: 'toggleButton' });
});

// 将按钮注入页面
shadow.appendChild(button);
document.body.appendChild(container);

// 注入样式
const style = document.createElement('style');
style.textContent = `
  #capsule-button {
    /* 胶囊按钮基础样式 */
    #capsule-button {
      position: fixed;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 40px;
      width: 58px; /* 初始宽度 */
      background: #EBEFF6;
      border-radius: 0 20px 20px 0; /* 右侧圆角 */
      border: none;
      cursor: pointer;
      overflow: hidden; /* 隐藏超出部分 */
      transition: width 0.3s ease;
      z-index: 999999;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    }
  }
  #capsule-button.expanded {
    width: 80px !important;
  }
  #capsule-button img {
    /* 按钮内图片 */
    #capsule-button img {
      position: absolute;
      width: 39.6px;
      height: 25px;
      right: 8.4px;
      top: 8px;
    }
  }
`;
shadow.appendChild(style);
