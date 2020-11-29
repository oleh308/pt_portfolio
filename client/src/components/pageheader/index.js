
import s from './pageheader.module.scss';

function PageHeader({ title }) {
  return (
    <header className={s.pageHeader}>
      <h1>{title}</h1>
    </header>
  )
}

export default PageHeader;
