/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { CheckOutlined, HighlightOutlined } from '@ant-design/icons';
import { Radio, Typography } from 'antd';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Grid, Icon, IconButton } from '@mui/material';
const { Paragraph } = Typography
function EditableTitle() {
    const [fSize, setFsize] = useState(22);
    const [Text, editText] = useState('Input Text Here')
    return (
        <ContextMenu>
            <ContextMenuTrigger>
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
            </ContextMenuTrigger>
            <ContextMenuContent className='w-64 bg-black text-white'>
                <ContextMenuItem>
                    <Grid container className='flex items-center'>
                        <Grid item xs={6}>
                            Font Size
                        </Grid>
                        <Grid item xs={6} className='flex justify-end items-center'>
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setFsize((prev) => {
                                    if (fSize > 18) {
                                        return prev - 1
                                    } else {
                                        return 18
                                    }
                                })
                            }}>
                                <RemoveIcon sx={{ color: "white" }} />
                            </IconButton>
                            {fSize}
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setFsize((prev) => {
                                    return prev + 1
                                })
                            }}>
                                <AddIcon sx={{ color: "white" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}
export default EditableTitle
