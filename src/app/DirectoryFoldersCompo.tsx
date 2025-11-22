import { FaChevronDown, FaChevronUp, FaFolder, FaFolderOpen } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store";
import { setSelectedFile, setSelectedFolder } from "../store/FileOperationsDataSlice";
import { IoDocumentSharp } from "react-icons/io5";
import type { filesProps, selectedFolderProps } from "../lib/utils/datatype/fileDataTypes";

export const DirectoryFoldersCompo: React.FC = () => {
    const dispatch = useAppDispatch();

    // provider states
    const proSelectedFolder = useAppSelector(state => state.fileActions.selectedFolder);
    const proSelectedFile = useAppSelector(state => state.fileActions.selectedFile);
    const protempDataFile = useAppSelector(state => state.fileActions.tempDataFile);
    const protempFile = useAppSelector(state => state.fileActions.tempFile);

    function handleFolderClick(folder: selectedFolderProps) {
        if (proSelectedFolder?.folderId === folder.folderId) {
            dispatch(setSelectedFolder(null));
        } else {
            dispatch(setSelectedFolder(folder));
        }
    }

    function handleFileSelect(data: filesProps) {
        if (proSelectedFile?.fileId === data.fileId) {
            dispatch(setSelectedFile(null));
        } else {
            dispatch(setSelectedFile(data));
        }
    }

    return (
        <>
            <div>
                {protempDataFile.map((data, index) =>
                    <>
                        <div key={`${index}we`}>
                            <div
                                className={`px-4 py-2 border-b flex justify-between items-center cursor-pointer
                                    ${(proSelectedFolder && !proSelectedFile) && proSelectedFolder?.folderId === data.folderId ? 'bg-blue-500 text-white hover:bg-black' : 'hover:bg-gray-300'}`}
                                onClick={() => handleFolderClick(data)}
                            >
                                <div className="flex gap-1 items-center">
                                    <div>
                                        {proSelectedFolder?.folderId === data.folderId ? <FaFolderOpen /> : <FaFolder />}
                                    </div>
                                    <p>{data.folderText}</p>
                                </div>
                                <button>
                                    {proSelectedFolder?.folderId === data.folderId ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                            </div>

                            {proSelectedFolder?.folderId === data.folderId && (
                                <div className="flex flex-col">
                                    {data.files.map((item, id) =>
                                        <>
                                            <div
                                                key={item.fileId}
                                                className={`py-2 pl-6 pr-4 border-b flex gap-1 items-center cursor-pointer ${(proSelectedFolder && proSelectedFile) && proSelectedFile.fileId === item.fileId ? 'bg-blue-500 text-white hover:bg-black' : 'bg-gray-200  hover:bg-blue-20'}`}
                                                onClick={() => handleFileSelect(item)}
                                            >
                                                <div>
                                                    <IoDocumentSharp />
                                                </div>
                                                <p>{item.fileName}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                )}

                <div className="flex flex-col">
                    {protempFile.map((item, id) =>
                        <>
                            <div
                                key={id}
                                className={`py-2 pl-6 pr-4 border-b flex gap-1 items-center cursor-pointer ${(!proSelectedFolder && proSelectedFile) && proSelectedFile.fileId === item.fileId ? 'bg-blue-500 text-white hover:bg-black' : 'bg-gray-200  hover:bg-blue-20'}`}
                                onClick={() => handleFileSelect(item)}
                            >
                                <div>
                                    <IoDocumentSharp />
                                </div>
                                <p>{item.fileName}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}