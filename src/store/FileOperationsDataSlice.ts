import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { filesProps, selectedFolderProps } from "../lib/utils/datatype/fileDataTypes";

interface FileOperationsProps{
    isRenameFile:boolean;
    createType:string | null;
    selectedFolder:selectedFolderProps | null,
    selectedFile:filesProps | null,
    tempDataFile:selectedFolderProps[],
    tempFile:filesProps[],
}

const initialState:FileOperationsProps = {
    isRenameFile:false,
    createType:null,
    selectedFolder:null,
    selectedFile:null,
    tempDataFile:[],
    tempFile:[],
}

const FileRenameDataSlice = createSlice({
    name:'fileActions',
    initialState,
    reducers:{
        setFileRenameTrue(state, action:PayloadAction<boolean>){
            state.isRenameFile = action.payload;
        },
        setCreateTypoe(state, action:PayloadAction<string | null>){
            state.createType = action.payload;
        },
        setSelectedFolder(state, action:PayloadAction<selectedFolderProps | null>){
            state.selectedFolder = action.payload;
        },
        setSelectedFile(state, action:PayloadAction<filesProps | null>){
            state.selectedFile = action.payload;
        },
        setTemDataArrObj(state, action:PayloadAction<selectedFolderProps[]>){
            state.tempDataFile = action.payload;
        },
        setTemFile(state, action:PayloadAction<filesProps[]>){
            state.tempFile = action.payload;
        }
    }
});

export const {
    setFileRenameTrue,
    setCreateTypoe,
    setSelectedFolder,
    setSelectedFile,
    setTemDataArrObj,
    setTemFile,
} = FileRenameDataSlice.actions;

export const getFileNameStatus = (state:{fileActions:FileOperationsProps}) => state.fileActions.isRenameFile;
export const getCreateType = (state:{fileActions:FileOperationsProps}) => state.fileActions.createType;
export const getSelectedFolder = (state:{fileActions:FileOperationsProps}) => state.fileActions.selectedFolder;
export const getSelectedFile = (state:{fileActions:FileOperationsProps}) => state.fileActions.selectedFile;
export const getTempDataArrObj = (state:{fileActions:FileOperationsProps}) => state.fileActions.tempDataFile;
export const getTempFile = (state:{fileActions:FileOperationsProps}) => state.fileActions.tempFile;


export default FileRenameDataSlice.reducer;