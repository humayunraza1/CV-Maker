/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Radio, Typography } from 'antd';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Bold, Italic, Underline } from "lucide-react"
const { Title } = Typography;
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
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
    const [isBold, setBold] = useState(true)
    const [isItalic, setItalic] = useState(false)
    const [isUnderline, setUnderline] = useState(false)
    const [marginT, setMarginTop] = useState(0)
    const [marginB, setMarginBottom] = useState(0)
    const [Text, editText] = useState('Input Text Here')
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Title
                    level={1}
                    editable={{
                        onChange: editText,
                        triggerType: "text"
                    }}
                    style={{
                        fontSize: fSize + 'px',
                        fontWeight: isBold ? 'bold' : 'normal',
                        fontStyle: isItalic ? 'italic' : 'normal',
                        textDecoration: isUnderline ? 'underline' : 'none',
                        marginTop: marginT + 'px',
                        marginBottom: marginB + 'px'

                    }}
                >
                    {Text}
                </Title>
            </ContextMenuTrigger>
            <ContextMenuContent className='w-64 bg-black text-white' >
                <ContextMenuItem>
                    <Grid container className='flex justify-center'>
                        <ToggleGroup size={"sm"} type="multiple">
                            <ToggleGroupItem className={`hover:bg-slate-800 ${isBold && "bg-slate-800"}`} onClick={(e) => { e.preventDefault(); setBold(!isBold) }} value="bold" aria-label="Toggle bold">
                                <Bold className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem className={`hover:bg-slate-800 ${isItalic && "bg-slate-800"}`} onClick={(e) => { e.preventDefault(); setItalic(!isItalic) }} value="italic" aria-label="Toggle italic">
                                <Italic className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem className={`hover:bg-slate-800 ${isUnderline && "bg-slate-800"}`} onClick={(e) => { e.preventDefault(); setUnderline(!isUnderline) }} value="underline" aria-label="Toggle underline">
                                <Underline className="h-4 w-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </Grid>
                </ContextMenuItem>
                <ContextMenuItem className='my-[-10px]' onClick={(e) => e.preventDefault()}>
                    <Grid container className='flex items-center'>
                        <Grid item xs={6}>
                            Font Size
                        </Grid>
                        <Grid item xs={6} className='flex justify-end items-center'>
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setFsize((prev) => {
                                    if (fSize > 15) {
                                        return prev - 1
                                    } else {
                                        return 15
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
                <ContextMenuItem className='my-[-10px]' onClick={(e) => e.preventDefault()}>
                    <Grid container className='flex items-center'>
                        <Grid item xs={6}>
                            Margin Top
                        </Grid>
                        <Grid item xs={6} className='flex justify-end items-center'>
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setMarginTop((prev) => {
                                    if (marginT > 0) {
                                        return prev - 1
                                    } else {
                                        return 0
                                    }
                                })
                            }}>
                                <RemoveIcon sx={{ color: "white" }} />
                            </IconButton>
                            {marginT}
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setMarginTop((prev) => {
                                    return prev + 1
                                })
                            }}>
                                <AddIcon sx={{ color: "white" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </ContextMenuItem>

                <ContextMenuItem className='my-[-10px]' onClick={(e) => e.preventDefault()}>
                    <Grid container className='flex items-center'>
                        <Grid item xs={6}>
                            Margin Bottom
                        </Grid>
                        <Grid item xs={6} className='flex justify-end items-center'>
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setMarginBottom((prev) => {
                                    if (marginB > 0) {
                                        return prev - 1
                                    } else {
                                        return 0
                                    }
                                })
                            }}>
                                <RemoveIcon sx={{ color: "white" }} />
                            </IconButton>
                            {marginB}
                            <IconButton onClick={(e) => {
                                e.preventDefault()
                                setMarginBottom((prev) => {
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
