import queryString from 'query-string'

export const getQueryString = (query) => {
  const result = queryString.stringify(query)

  if (!result) return ''
  return `?${result}`
}

export const debounced = (delay, fn) => {
  let timerId

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

export const checkInValidVihcle = ({ vehicleType, vehiclePlateColor, vehicleExpiryDate, vehicleIdentity }) => {
  return !vehicleType || !vehiclePlateColor || !vehicleExpiryDate || !vehicleIdentity
}

export const capitalizeFirstLetter = (stringText) => {
  return stringText.charAt(0).toUpperCase() + stringText.slice(1)
}

export const getParameterByName = (name, url) => {
  if (!url) url = ''
  // eslint-disable-next-line
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const isEquivalent = (a, b) => {
  // Create arrays of property names
  let aProps = Object.getOwnPropertyNames(a)
  let bProps = Object.getOwnPropertyNames(b)
  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false
  }
  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i]
    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false
    }
  }
  // If we made it this far, objects
  // are considered equivalent
  return true
}

export const xoa_dau = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  return str
}

export const roundDownDecimal = (num, digits = 2) => {
  return Math.floor(num * 10 ** digits) / 10 ** digits
}
export const number_to_price = (value, digits = 2) => {
  if (isNaN(+value)) return '0'
  return roundDownDecimal(value, digits)?.toLocaleString('en-US', { maximumFractionDigits: digits })
}

export function formatMoneyShortenVN(amount) {
  if (amount == null || isNaN(amount)) return '0';

  const units = [
    { value: 1_000_000_000, suffix: 'tỷ' },
    { value: 1_000_000, suffix: 'tr' },
    { value: 1_000, suffix: 'k' },
  ];

  const unit = units.find(u => amount >= u.value);
  return  unit
    ? `${number_to_price(amount / unit.value)} ${unit.suffix}`
    : amount.toString();
}

export const price_to_number = (v) => {
  if (!v) {
    return 0
  }
  v = v.split(',').join('')
  v = v.split('.').join(',')

  return Number(v)
}

export function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function validatePass(pass) {
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
  return passw.test(pass)
}

export function validateOnlyNumber(pass) {
  const passw = /^\d+$/
  return passw.test(pass)
}
export function validateNumberPhone(number) {
  // let c1 = number.substring(0, 4)
  // if (c1 === '+855') {
  //   return true
  // }
  // c1 = number.substring(0, 3)
  // return c1 === '+60' || c1 === '+84'
  const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
  return number.match(regex)
}

export function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })
}

export function convertTextToHTML(text = '') {
  if (!text) return ''
  else return text.replace(/\n/g, '<br />').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

export function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000)

  let interval = Math.floor(seconds / 31536000)
  if (interval >= 1) {
    return interval + ' năm' + ' trước'
  }

  interval = Math.floor(seconds / 2592000)
  if (interval >= 1) {
    return interval + ' tháng' + ' trước'
  }

  interval = Math.floor(seconds / 86400)
  if (interval >= 1) {
    return interval + ' ngày' + ' trước'
  }

  interval = Math.floor(seconds / 3600)
  if (interval >= 1) {
    return interval + ' giờ' + ' trước'
  }

  interval = Math.floor(seconds / 60)
  if (interval >= 1) {
    return interval + ' phút' + ' trước'
  }

  return 'bây giờ'
}
export function changeToSlug(title) {
  let slug = title.toLowerCase()
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
  slug = slug.replace(/đ/gi, 'd')
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '')
  slug = slug.replace(/ /gi, '-')
  slug = slug.replace(/_-_/gi, '-')
  slug = slug.replace(/\-\-\-\-\-/gi, '-')
  slug = slug.replace(/\-\-\-\-/gi, '-')
  slug = slug.replace(/\-\-\-/gi, '-')
  slug = slug.replace(/\-\-/gi, '-')
  slug = '@' + slug + '@'
  slug = slug.replace(/\@\-|\-\@|\@/gi, '')
  return slug
}

export const copyToClipboard = (textToCopy) => {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy)
  } else {
    // text area method
    let textArea = document.createElement('textarea')
    textArea.value = textToCopy
    // make the textarea out of viewport
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    return new Promise((res, rej) => {
      // here the magic happens
      document.execCommand('copy') ? res() : rej()
      textArea.remove()
    })
  }
}

export function trimStrings(obj) {
  if (typeof obj === 'string') {
    return obj.trim();
  } else if (Array.isArray(obj)) {
    return obj.map(trimStrings);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = trimStrings(obj[key]);
      return acc;
    }, {});
  }
  
  return obj;
}

export function formatNumberVN(number) {
  return new Intl.NumberFormat('vi-VN').format(number);
}