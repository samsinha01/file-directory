import { FaPhotoVideo } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { setCreateTypoe, setFileRenameTrue, setTemDataArrObj, setTemFile } from "../store/FileOperationsDataSlice";
import { FilesDirectoryArrObj, openFilesArr } from "../lib/utils/DataFile";
import { DirectoryFoldersCompo } from "./DirectoryFoldersCompo";
import { toast } from "react-toastify";
import type { filesProps, selectedFolderProps } from "../lib/utils/datatype/fileDataTypes";

export const Sidebar = () => {
    const dispatch = useAppDispatch();

    // provider states
    const proFileRenameStatus = useAppSelector(state => state.fileActions.isRenameFile);
    const proSelectedFolder = useAppSelector(state => state.fileActions.selectedFolder);
    const proSelectedFile = useAppSelector(state => state.fileActions.selectedFile);
    const protempDataFile = useAppSelector(state => state.fileActions.tempDataFile);
    const proTempFile = useAppSelector(state => state.fileActions.tempFile);
    const proCreateFileType = useAppSelector(state => state.fileActions.createType);


    // local states
    const [isAddTrue, setIsAddTrue] = useState(false);

    useEffect(() => {
        dispatch(setTemDataArrObj(FilesDirectoryArrObj));
        dispatch(setTemFile(openFilesArr));
    }, []);

    useEffect(() => {
        if (!proCreateFileType) return;
        handleCreate();
    }, [proCreateFileType]);

    function handleAddBtn() {
        setIsAddTrue(prev => !prev);
    }

    function handleCreate() {
        const blankFolder: selectedFolderProps = {
            folderId: protempDataFile.length + 1,
            folderText: `new folder ${protempDataFile.length + 1}`,
            files: []
        }

        const blankFile: filesProps = {
            fileId: Number(`957${proTempFile.length + 1}`),
            fileName: `new file${proTempFile.length + 1}.doc`,
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut ducimus impedit cum. Dolorem exercitationem reprehenderit eaque mollitia natus harum similique sequi facere in odit ab, aperiam assumenda vel magni!'
        }

        if (proCreateFileType === 'file') {
            if (proSelectedFolder?.folderId) {
                const findObj = protempDataFile.findIndex(item => item.folderId === proSelectedFolder.folderId);
                const pushedObj: filesProps = {
                    fileId: Number(`${findObj}.${protempDataFile[findObj].files.length + 1}`),
                    fileName: `new file ${protempDataFile[findObj].files.length + 1}.doc`,
                    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut ducimus impedit cum. Dolorem exercitationem reprehenderit eaque mollitia natus harum similique sequi facere in odit ab, aperiam assumenda vel magni!'
                }


                const newfiles = [...protempDataFile[findObj].files, ...[pushedObj]]
                const newDeletedArr = protempDataFile.filter(item => item.folderId !== proSelectedFolder.folderId);

                const newArr: selectedFolderProps[] = [{
                    ...protempDataFile[findObj],
                    files: newfiles
                },
                ...newDeletedArr
                ];

                dispatch(setTemDataArrObj(newArr));
            } else {
                const newArr: filesProps[] = [
                    ...proTempFile,
                    ...[blankFile]
                ];

                dispatch(setTemFile(newArr));
            }

            dispatch(setCreateTypoe(null));
        }

        if (proCreateFileType === 'folder') {
            if (proSelectedFolder?.folderId) {
                toast.error("You can't create a nested folder.");
            } else {
                const newArr: selectedFolderProps[] = [
                    ...protempDataFile,
                    ...[blankFolder]
                ];

                dispatch(setTemDataArrObj(newArr));
            }

            dispatch(setCreateTypoe(null));
        }
    }

    function handleRename() {
        dispatch(setFileRenameTrue(!proFileRenameStatus));
    }

    function FileCreateTypeFun(type: string) {
        dispatch(setCreateTypoe(type));
        handleAddBtn();
    }

    function handleDelete(id: number | null) {
        if (!id || !proSelectedFolder) return toast.error("Select Folder or file");

        const findObj = protempDataFile.findIndex(item => item.folderId === proSelectedFolder.folderId);

        if (proSelectedFolder && !proSelectedFile) {
            const newDeletedArr = protempDataFile.filter(item => item.folderId !== proSelectedFolder.folderId);
            dispatch(setTemDataArrObj(newDeletedArr));

        } else if (proSelectedFolder && proSelectedFile) {
            // const findFile = protempDataFile[findObj].files.findIndex(item => item.fileId === proSelectedFile.fileId);

            const deleteFile = protempDataFile[findObj].files.filter(item => item.fileId !== proSelectedFile.fileId);

            const newDeletedArr = protempDataFile.filter(item => item.folderId !== proSelectedFolder.folderId);

            const newArr = [{
                ...protempDataFile[findObj],
                files: deleteFile
            },
            ...newDeletedArr
            ];

            dispatch(setTemDataArrObj(newArr));
        } else if (!proSelectedFolder && proSelectedFile) {
            const newDeletedArr = proTempFile.filter(item => item.fileId !== proSelectedFile.fileId);
            dispatch(setTemFile(newDeletedArr));
        }
        else {
            toast.error("Please select folder or file");
        }
    }

    return (
        <>
            <section className="">
                <div className="px-2 flex gap-2 items-center relative">
                    <button
                        onClick={handleAddBtn}
                        className="py-1 px-2 border rounded-md bg-black text-white cursor-pointer"
                    >
                        Add
                    </button>

                    <button
                        onClick={handleRename}
                        className="py-1 px-2 border rounded-md bg-black text-white cursor-pointer"
                    >
                        Rename
                    </button>

                    <button
                        onClick={() => handleDelete(proSelectedFolder?.folderId ?? null)}
                        className="py-1 px-2 border rounded-md bg-black text-white cursor-pointer"
                    >
                        Delete
                    </button>

                    {isAddTrue && (
                        <>
                            <div className="bg-gray-100 border absolute left-2 top-10 w-[100px] h-fit flex flex-col">
                                <button
                                    className="py-1 px-2 border-b hover:bg-gray-300"
                                    onClick={() => FileCreateTypeFun('folder')}
                                >Folder</button>

                                <button
                                    className="py-1 px-2 border-b hover:bg-gray-300"
                                    onClick={() => FileCreateTypeFun('file')}
                                >File</button>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-5 border-b">
                    <div className="flex gap-1 items-center py-2 px-4 hover:bg-gray-100">
                        <span>
                            <FaPhotoVideo />
                        </span>
                        <span>Pictures</span>
                    </div>

                    <div className="flex gap-1 items-center py-2 px-4 hover:bg-gray-100">
                        <span>
                            <LiaDownloadSolid />
                        </span>
                        <span>Downloads</span>
                    </div>

                    <div className="flex gap-1 items-center py-2 px-4 hover:bg-gray-100">
                        <span>
                            <IoDocumentsOutline />
                        </span>
                        <span>Documents</span>
                    </div>
                </div>

                <DirectoryFoldersCompo />
            </section>
        </>
    );
}