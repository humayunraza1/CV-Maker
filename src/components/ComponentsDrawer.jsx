/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Button, Grid, IconButton } from "@mui/material"
import EditableTitle from '../utils/EditableTitle';
import EditableText from '../utils/EditableText';
import { useState } from 'react';
import CustomDivider from '../utils/CustomDivider';
function ComponentsDrawer({ isOpenComp, setOpenComp, addComp, onComp }) {

    function addTitle() {
        const newTitle = <EditableTitle key={onComp.length + 1} />
        addComp((prev) => {
            return [...prev, newTitle]
        })
    }
    function addText() {
        const newText = <EditableText key={onComp.length + 1} />
        addComp((prev) => {
            return [...prev, newText]
        })
    }
    function addDivider() {
        const newDivider = <CustomDivider key={onComp.length + 1} />
        addComp((prev) => {
            return [...prev, newDivider]
        })
        console.log(onComp)
    }
    return (
        isOpenComp === true && <div className="absolute top-0 bg-white w-[40vh] h-screen">
            <Grid container>
                <Grid item className="text-right px-3" xs={12}>
                    <IconButton onClick={() => setOpenComp(false)}>
                        X
                    </IconButton>
                </Grid>
                <Grid container rowGap={2} className="p-10">

                    <Grid item xs={12}>
                        <div className="w-full flex">
                            <input className="bg-transparent text-black" />
                            <Button>Go</Button>
                        </div>
                    </Grid>
                    <Grid container gap={2} className='flex justify-center '>
                        <Grid item xs={12} className='px-4'>
                            <h1 className="font-bold text-2xl">Components</h1>
                        </Grid>
                        <Grid item xs={5} className="h-[120px]">
                            <div className="w-full text-4xl h-full flex flex-col items-center justify-center border-4 rounded-lg border-dashed hover:bg-slate-200 hover:cursor-pointer" onClick={addTitle}>
                                <h1>H</h1>
                                <p className='text-sm mt-2'>Heading</p>
                            </div>
                        </Grid>
                        <Grid item xs={5} className="h-[120px]">
                            <div className="w-full text-4xl h-full flex flex-col items-center justify-center border-4 rounded-lg border-dashed hover:bg-slate-200 hover:cursor-pointer" onClick={addText}>
                                <h1>P</h1>
                                <p className='text-sm mt-2'>Paragraph</p>
                            </div>
                        </Grid>
                        <Grid item xs={5} className="h-[120px]">
                            <div className="w-full text-4xl h-full flex flex-col items-center justify-center border-4 rounded-lg border-dashed hover:bg-slate-200 hover:cursor-pointer" onClick={addDivider}>
                                <img className='w-[70px] h-[70px]' alt='Divider icon' src='../../public/resources/images/divider.webp' />
                                <p className='text-sm mt-[-12px]'>Divider</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}
ComponentsDrawer.propTypes = {
    setOpenComp: PropTypes.func.isRequired,
    isOpenComp: PropTypes.bool.isRequired,
    addComp: PropTypes.func,
    onComp: PropTypes.array

    // Define other props with their respective types here
};
export default ComponentsDrawer
