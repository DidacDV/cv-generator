import './styles/header.css'
import html2pdf from 'html2pdf.js'; // Correct import

const Header = () => {

    const handleExport = () => {
        const el = document.querySelector('.previewContainer');
    
        //class to hide delete button and increase oppacity
        el.classList.add('print-ready');
    
        const options = {
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false
            },
            jsPDF: {
                unit: 'in',
                format: 'a4',
                orientation: 'portrait'
            }
        };
    
        html2pdf()
            .set(options)
            .from(el)
            .save()
            .then(() => {
                el.classList.remove('print-ready');
            });
    };

    return (
        <header className='headerContent'>
            <h1>CV Generator</h1>
            <nav>
                <a className='headerButton' rel="noopener noreferrer" target="_blank" href = "https:github.com" >GitHub</a>
                <a onClick={handleExport} className='headerButton'>Export to PDF</a>
            </nav>
        </header>
    );
};

export default Header;