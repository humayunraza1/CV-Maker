/* eslint-disable no-unused-vars */
import { Radio, Typography } from 'antd';
import { useState } from 'react';
const { Paragraph } = Typography
function EditableText() {
    const [fSize, setFsize] = useState(12);
    const [Text, editText] = useState('Input Text Here')
    return (
        <Paragraph
            editable={{
                onChange: editText,
            }}
            style={{
                fontSize: fSize + 'px'
            }}
        >
            {Text}
        </Paragraph>
    )
}

export default EditableText
