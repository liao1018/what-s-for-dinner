import moment from 'moment-timezone';

const shouldNotEmpty = {
  name: '姓名',
  bedNumber: '床號',
  attendingDoctor: '主治醫師',
  content: '意見回饋',
};

export default {
  // 全部要先設定好null
  verify(form) {
    Object.entries(form).forEach(([key, value]) => {
      switch (key) {
        case 'twid':
          if (!value || !value.match(/^[A-Z]{1,2}\d{8,9}$/i)) { throw Error('身分證格式錯誤，請輸入1~2碼大寫英文字與8~9位數字。'); }
          break;

        case 'birthdate':
          if (!moment(value).isValid()) { throw Error('生日格式錯誤，請輸入8位西元年月日。'); }
          break;

        case 'dischargedDate':
          if (!moment(value).isValid()) { throw Error('出院日期格式錯誤，請輸入8位西元年月日。'); }
          break;

        case 'mobile':
          if (!value || !value.match(/^09\d{8}$/i)) { throw Error('手機號碼格式錯誤，請輸入09開頭共10位數字。'); }
          break;

        case 'password':
          if (!value || !value.match(/^[a-zA-Z0-9]{4,10}$/)) throw Error('密碼格式錯誤，須為4-10位數字或英文字母。');
          break;

        case 'id':
          if (!value
            || (!value.match(/^[0-9]{7}$/)
            && (!value.match(/^[A-Z]{1,2}\d{8,9}$/i)))) {
            throw Error(
              '格式錯誤，\n請輸入1~2碼大寫英文字與8~9位數字，或是7位數字(病歷號)',
            );
          }
          break;

        default:
          if (!value && Object.keys(shouldNotEmpty).includes(key)) {
            throw Error(`請輸入您的${shouldNotEmpty[key]}。`);
          }
          break;
      }
    });
  },
};
