import PropTypes from 'prop-types';
import { Button, Grid, IconButton } from "@mui/material"
import EditableTitle from '../utils/EditableTitle';
import EditableText from '../utils/EditableText';

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
                        <h1 className="font-bold text-2xl">Components</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="w-full flex">
                            <input className="bg-transparent text-black" />
                            <Button>Go</Button>
                        </div>
                    </Grid>
                    <Grid container gap={2}>
                        <Grid item xs={5} className="h-[120px]">
                            <div className="w-full text-4xl h-full flex items-center justify-center border-4 rounded-lg border-dashed hover:bg-slate-200 hover:cursor-pointer" onClick={addTitle}>
                                <h1>H1</h1>
                            </div>
                        </Grid>
                        <Grid item xs={5} className="h-[120px]">
                            <div className="w-full text-4xl h-full flex items-center justify-center border-4 rounded-lg border-dashed hover:bg-slate-200 hover:cursor-pointer" onClick={addText}>
                                <h1>P</h1>
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
