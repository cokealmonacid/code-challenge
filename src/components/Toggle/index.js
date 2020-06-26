import React from 'react';
import {Switch} from 'antd';
import Emoji from 'a11y-react-emoji'

const Toggle = props => (
    <Switch
        {...props}
        checkedChildren={<Emoji symbol={"🌛"}/>}
        unCheckedChildren={<Emoji symbol={"🌞"}/>}
        checked={props.theme === 'dark' ? true : false}
    />
);

export default Toggle;