import { Switch } from 'antd'

// import DarkIcon from '@/assets/svg/moon.svg'
// import LightIcon from '@/assets/svg/sun.svg'

type propTypes = {
  onClick?: () => void
}

function SwitchDark(props: propTypes) {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${props}`, checked)
  }

  return (
    <Switch
      className="switch-dark"
      defaultChecked={true}
      checkedChildren={
        <>
          {/*<img src={LightIcon} alt="LightIcon" />*/}
          🌞
        </>
      }
      unCheckedChildren={
        <>
          {/*<img src={DarkIcon} alt="DarkIcon" />*/}
          🌜
        </>
      }
      onChange={onChange}
    />
  )
}

export default SwitchDark
