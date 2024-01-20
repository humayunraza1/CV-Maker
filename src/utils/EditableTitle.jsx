/* eslint-disable no-unused-vars */

import { CheckOutlined, HighlightOutlined } from '@ant-design/icons';
import { Radio, Typography } from 'antd';
import { useState } from 'react';
const { Paragraph } = Typography
function EditableTitle() {
    const [fSize, setFsize] = useState(22);
    const [Text, editText] = useState('Input Text Here')
    return (
        <Typography.Title
            level={1}
            editable={{
                onChange: editText,
            }}
            style={{
                fontSize: fSize + 'px'
            }}
        >
            {Text}
        </Typography.Title>
    )
}

export default EditableTitle
