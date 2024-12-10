import '../App.css';

function HomePage() {
  return (
    <div className="flex App">
      <header>
        <h2>Welcome to Student Library</h2>
        <h3>Edith Jiokeng</h3>
        <a href='mailto:jiokengbognie0517@students.bowiestate.edu' target='_blank' rel="noreferrer">jiokengbognie0517@students.bowiestate.edu</a>
        <p>
          <a href='https://github.com/ebogni17/LibraryManagement' target='_blank' rel="noreferrer">Github</a>
        </p>
        <p>
          <a href='Edith_jiokeng_Final_Project_WhitePaper.pdf' download={true} rel="noreferrer">Project Report</a>
        </p>
        <p>
          <a href='#/book-data' target='_blank' rel="noreferrer">View book data</a>
        </p>
        <p>
          <a href='#/student-data' target='_blank' rel="noreferrer">View student data</a>
        </p>
      </header>
      <p>
        <a href='#/book-status-analysis' target='_blank' rel="noreferrer">View book analysis</a>
      </p>
    </div>
  );
}

export default HomePage;
