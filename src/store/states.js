import Cookies from 'js-cookie'
const states = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  language: Cookies.get('language') || 'en',
  size: Cookies.get('size') || 'medium'
}
export default states

