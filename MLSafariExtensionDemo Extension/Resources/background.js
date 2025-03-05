chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleButton') {
    // 可在此处添加业务逻辑
    console.log('按钮状态已切换');
  }
});
