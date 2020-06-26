import React from 'react';
import {Switch} from 'antd';
import Emoji from 'a11y-react-emoji'

const Toggle = props => (
    <Switch
        {...props}
        checkedChildren={<Emoji symbol="🌛" label="love" />}
        unCheckedChildren={<Emoji symbol="🌞" label="love" />}
    />
)

export default Toggle;