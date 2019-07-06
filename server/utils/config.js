module.exports = {
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  sms: {
    get appKey() {
      return '61c9204179403d15085b17384b441dd8'
    },
    get appid() {
      return '1400222344'
    },
    get templateId() {
      return '217965'// 需要在腾讯云短信中申请
    },
    get smsSign() {
      return 'gaomingwei'// 需要在腾讯云短信中申请
    },
    get smsType() {
      return '0'// 0 普通短信， 1 营销短信
    },
    get render(code) {
      return `【腾讯云】您的验证码是: ${code}, 【10】分钟有效，过期请重新获取！如果不是本人获取，请忽略！`
    },
    get yz() {
      return 86
    },
    get phone() {
      return '15021750575'
    },
    get code() {
      return () => {
        return Math.random().toString(16).toUpperCase()
      }
    }
  },
  smtp: {
    get code() {
      return () => {
        return Math.random().toString(16).slice(6, 10).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime()*60*60*1000
      }
    },
    get appKey() {
      return 'xxxx'// 需要在QQ邮箱中查找
    },
    get appid() {
      return '1400222344'
    },
    get user() {
      return '717503359@qq.com'
    },
    get pass() {
      return 'ifisntifltawbcbi'
    },
    get host() {
      return 'smtp.qq.com'
    }
  }
}