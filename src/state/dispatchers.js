import store from './store';
import actionTypes from './actions';

const setColorDispatcher = (color) => {
    store.dispatch({
        type: actionTypes.setColor,
        color
    });
};
const setSizeDispatcher = (size) => {
    store.dispatch({
        type: actionTypes.setSize,
        size
    });
};
const setBorderDispatcher = (border) => {
    store.dispatch({
        type: actionTypes.setBorder,
        border
    });
};
const saveOutput = () => {
    store.dispatch({
        type: actionTypes.saveOutput
    });
};

const deleteOutput = (id) => {
    store.dispatch({
        type: actionTypes.deleteOutput,
        id
    });
};

export { setColorDispatcher, setSizeDispatcher, setBorderDispatcher, saveOutput, deleteOutput };
