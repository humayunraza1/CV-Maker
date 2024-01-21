/* eslint-disable no-unused-vars */
import { useState } from "react";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Grid, IconButton } from '@mui/material';


function CustomDivider() {
    const [dwidth, setDwidth] = useState(100);
    const [dheight, setDheight] = useState(1);
    const [Dposition, setDposition] = useState('start')
    const [marginT, setMarginTop] = useState(10);
    const [marginB, setMarginBottom] = useState(10);
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div className='flex justify-center'><hr style={{ width: dwidth + '%', marginTop: marginT + 'px', marginBottom: marginB + 'px' }} /></div>
            </ContextMenuTrigger>
            <ContextMenuContent className='w-64 bg-black text-white'>
                <ContextMenuItem onClick={(e) => e.preventDefault()}>
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

                <ContextMenuItem onClick={(e) => e.preventDefault()}>
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
                <ContextMenuItem onClick={(e) => e.preventDefault()}>
                    <Grid container className='flex items-center'>
                        <Grid item xs={7}>
                            <p>Width</p>
                        </Grid>
                        <Grid item xs={5} className="flex justify-center">
                            <Select value={dwidth} onValueChange={setDwidth}>
                                <SelectTrigger className="w-[80px] h-[30px]">
                                    <SelectValue placeholder="Select width">
                                        {dwidth === 100 ? "Full" : "Half"}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className='bg-black text-white'>
                                    <SelectItem value="100">Full</SelectItem>
                                    <SelectItem value="50">Half</SelectItem>
                                </SelectContent>
                            </Select>
                        </Grid>
                    </Grid>
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}

export default CustomDivider
