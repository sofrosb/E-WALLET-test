import "./style.css";

export function PageTitle({ title, secondTitle }) {
  const titlePage = title;
  const underTitle = secondTitle;

  return (
    <header className="page-header">
      <h1 className="header-title">{titlePage}</h1>
      <h5 className="under-title">{underTitle}</h5>
    </header>
  );
}
