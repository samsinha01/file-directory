import { useAppSelector } from "../store";

export const HomePage = () => {
    // const proSelectedFolder = useAppSelector(state => state.fileActions.selectedFolder);
    const proSelectedFile = useAppSelector(state => state.fileActions.selectedFile);

    return (
        <>
            <section className="p-10 w-full h-full relative">
                {proSelectedFile ? (
                    <>  
                        <h2 className="text-white font-bold text-2xl mb-5">{proSelectedFile.fileName.toUpperCase()}</h2>
                        <p className="text-white text-lg">{proSelectedFile.summary}</p>
                    </>
                ) : (
                    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Please select the file</p>
                )}
            </section>
        </>
    );
}