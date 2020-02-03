import {createSelector} from "reselect";

const directories=state=>state.directory;

export const fetchDirectories=createSelector([directories],(directory)=>directory.menuItems);