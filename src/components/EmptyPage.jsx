/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import EditableTitle from '../utils/EditableTitle';
import EditableText from '../utils/EditableText';
function EmptyPage({ onComp }) {
    return (
        <div className="w-[595px] h-[842px] bg-white p-4">
            {/* {onComp.length > 0 ? onComp.map((i, j) => { i === 'H1' && <h1 className='text-black'>Sample title {j}</h1> }) : <p className='text-black'>Please add a componenet to begin</p>} */}
            {onComp}
        </div>
    )
}
EmptyPage.propTypes = {
    onComp: PropTypes.array,
    // Define other props with their respective types here
};
export default EmptyPage
