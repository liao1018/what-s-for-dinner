import { reactive } from 'vue';

const modal = reactive({
  setting: {},
  show,
  done,
  alert,
  confirm,
  popup,
  close,
});

const defaultShowSetting = {
  isShow: true,
  hasMaskClose: false,
  hasCloseButton: true,
  header: null,
  body: null,
  footer: [],
};

function show(setting) {
  const showSetting = { ...defaultShowSetting };

  Object.entries(setting).forEach(([key, value]) => {
    showSetting[key] = value;
  });

  modal.setting = showSetting;
}

function done(message) {
  show({
    body: message,
    hasCloseButton: false,
    footer: [{ content: '關閉視窗', type: 'primary', onClickEmit: 'done' }],
  });
}

function alert(error) {
  show({
    header: '錯誤訊息',
    hasMaskClose: true,
    body: !error.response ? error.message : error.response.data.message,
  });
}

function confirm(message) {
  modal.show({
    body: message,
    footer: [
      {
        content: '確認',
        type: 'primary',
        onClickEmit: 'confirm',
      },
    ],
  });
}

function popup(message) {
  modal.show({
    body: message,
  });
}

function close() {
  modal.setting = {};
}

export default modal;
