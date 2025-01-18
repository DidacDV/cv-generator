import './styles/header.css'
import html2pdf from 'html2pdf.js'; // Correct import

const Header = () => {

    const handleExport = () => {
        const el = document.querySelector('.previewContainer');
        html2pdf().from(el).save("resume.pdf");
    }

    return (
        <header className='headerContent'>
            <h1>CV Generator</h1>
            <nav>
                <a rel="noopener noreferrer" target="_blank" href = "https:github.com" >GitHub</a>
                <a onClick={handleExport}>Export to PDF</a>
            </nav>
        </header>
    );
};

export default Header;