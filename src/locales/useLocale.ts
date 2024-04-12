import { ConfigProvider } from 'antd'
import antd_zhCN from 'antd/locale/en_US'
import antd_enUS from 'antd/locale/zh_CN'
import { useTranslation } from 'react-i18next'

export default function useLocale() {
  const { i18n } = useTranslation()

  const setChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    if (lang === 'zh') {
      ConfigProvider.config({ locale: antd_zhCN })
    } else {
      ConfigProvider.config({ locale: antd_enUS })
    }
  }
  return {
    setChangeLanguage
  }
}
