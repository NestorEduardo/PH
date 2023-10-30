import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink += `/${crumb}`

        return (
            <div className='capitalize text-xs text-slate-400' key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
                <span>/</span>
            </div>
        )
    })

  return (
    <div className='flex'>
      {crumbs}
    </div>
  );
};

export default Breadcrumb;
