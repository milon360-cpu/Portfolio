import FileDownloadIcon from '@mui/icons-material/FileDownload';
const DarkMood = () => {

    return (
        <div>
            <a 
                    href="./CVMe.pdf"
                    target='_blank'
                    rel='noopener noreferrer'
                    className="light-mood-icon-container duration-700 dark:bg-slate-700"
               > Download Resume <span > <FileDownloadIcon className='download-icon'/></span></a>
        </div>
    );
};

export default DarkMood;